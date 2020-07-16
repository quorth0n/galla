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
const getPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      createdAt
      totalScore
    }
  }
`;

// MUTATIONS
const updatePost = gql`
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      totalScore
      rank

      title
      license
      userID
      thumb
      updatedAt
      resolutions {
        resMode
        url
      }
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

const getRank = (score, time) => {
  const order = Math.log10(Math.max(Math.abs(score), 1));
  let sign = 0;
  if (score > 0) {
    sign = 1;
  } else if (score < 0) {
    sign = -1;
  }
  const deltaMs = new Date(time).getTime() - 1594783167165;
  const deltaSec = Math.abs(deltaMs / 1000);
  return parseFloat((sign * order + deltaSec / 45000).toFixed(7));
};

const resolvers = {
  votePost: async (ctx) => {
    const fetchedPost = await gqlRequest({
      query: print(getPost),
      operationName: 'GetPost',
      variables: {
        id: ctx.arguments.id,
      },
    });
    const { totalScore, createdAt } = fetchedPost.data.getPost;
    const score = totalScore + ctx.arguments.vote;
    const rank = getRank(score, createdAt);
    console.log('new score', score);
    console.log('rank', rank);

    const updatedPost = await gqlRequest({
      query: print(updatePost),
      operationName: 'UpdatePost',
      variables: {
        input: {
          id: ctx.arguments.id,
          totalScore: score,
          rank,
        },
      },
    });
    console.log('updated post', updatedPost);
    return updatedPost.data.updatePost;
  },
};

// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity objecsearchQueryNameent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async (event) => {
  if (Math.abs(event.arguments.vote) > 2) {
    throw new Error();
  }

  const resolver = resolvers[event.fieldName];
  if (resolver) {
    return await resolver(event);
  }
  throw new Error('Resolver not found.');
};
