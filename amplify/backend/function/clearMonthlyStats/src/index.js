/* Amplify Params - DO NOT EDIT
	API_API_GRAPHQLAPIENDPOINTOUTPUT
	API_API_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/* eslint-disable-line */ const AWS = require('aws-sdk');
const https = require('https');
const gql = require('graphql-tag');
const graphql = require('graphql');

const appsyncUrl = process.env.API_API_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const apiKey = process.env.API_KEY;

const { print } = graphql;
const UrlParse = require('url').URL;

// QUERIES
const searchUsers = gql`
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        username
      }
      nextToken
      total
    }
  }
`;
const searchPosts = gql`
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
      }
      nextToken
      total
    }
  }
`;

// MUTATIONS
const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      monthlyViews
    }
  }
`;
const updatePosts = gql`
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      monthlyViews
    }
  }
`;

async function gqlRequest(body) {
  console.log('running request', body);
  const endpoint = new UrlParse(appsyncUrl).hostname.toString();

  const req = new AWS.HttpRequest(appsyncUrl, region);

  req.method = 'POST';
  req.headers.host = endpoint;
  req.headers['Content-Type'] = 'application/json';
  req.body = JSON.stringify(body);

  if (apiKey) {
    req.headers['x-api-key'] = apiKey;
  } else {
    const signer = new AWS.Signers.V4(req, 'appsync', true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  }

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      result.on('data', (data) => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });
  console.log(await data);
  return data;
}

exports.handler = async (event, context, callback) => {
  const resetModelMonthlyViews = async (
    searchQuery,
    updateQuery,
    name,
    key
  ) => {
    // query names
    const capitalName = name[0].toUpperCase() + name.slice(1);
    const searchQueryName = `Search${capitalName}s`;
    const updateQueryName = `Update${capitalName}`;

    console.log(`fetching list of ${name}s...`);
    const fetchedItems = await gqlRequest({
      query: print(searchQuery),
      operationName: searchQueryName,
      variables: {
        filter: {
          monthlyViews: {
            ne: 0,
          },
        },
      },
    });

    console.log(`resetting ${name} monthly views...`);
    const resetItemViews = async (keyValue) => {
      const item = {
        input: {
          [key]: keyValue,
          monthlyViews: 0,
        },
      };
      const data = {
        query: print(updateQuery),
        operationName: updateQueryName,
        variables: item,
      };
      await gqlRequest(data);
    };
    const resetItemArray = async (items, nextToken) => {
      for (let i = 0; i < items.length; i++) {
        await resetItemViews(items[i][key]);
        if (i === items.length - 1 && items[i][key] !== nextToken) {
          // fetch next page of data on last element, if there is more
          const nextItems = await gqlRequest({
            query: print(searchQuery),
            operationName: searchQueryName,
            variables: {
              filter: {
                monthlyViews: {
                  ne: 0,
                },
              },
              nextToken,
            },
          });
          await resetItemArray(
            Object.values(nextItems.data)[0].items,
            Object.values(nextItems.data)[0].nextToken
          );
        }
      }
    };
    await resetItemArray(
      Object.values(fetchedItems.data)[0].items,
      Object.values(fetchedItems.data)[0].nextToken
    );
  };
  await Promise.all([
    resetModelMonthlyViews(searchUsers, updateUser, 'user', 'username'),
    resetModelMonthlyViews(searchPosts, updatePosts, 'post', 'id'),
  ]);

  return event;
};
