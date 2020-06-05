/* eslint-disable-line */ const AWS = require('aws-sdk');
const https = require('https');
const region = process.env.REGION;
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;
const apiKey = process.env.API_KEY;
const ssm = new AWS.SSM();
const UrlParse = require('url').URL;

const createTodo = gql`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      username
      location
      description
      website
      monthlyViews
      createdAt
      updatedAt
      owner
    }
  }
`;

async function getEndpoint() {
  var params = {
    Name: 'GraphQLEndpoint-' + process.env.ENV,
    WithDecryption: true,
  };
  var request = await ssm.getParameter(params).promise();
  return request.Parameter.Value;
}

exports.handler = async (event, context, callback) => {
  const appsyncUrl = await getEndpoint();
  const endpoint = new UrlParse(appsyncUrl).hostname.toString();

  console.log('add to database');
  var userID = event.request.userAttributes.sub;
  console.log(event.request.userAttributes);

  const req = new AWS.HttpRequest(appsyncUrl, region);

  const item = {
    input: {
      username: userID,
      description: 'Item Generated from Lambda',
    },
  };

  req.method = 'POST';
  req.headers.host = endpoint;
  req.headers['Content-Type'] = 'application/json';
  req.body = JSON.stringify({
    query: print(createTodo),
    operationName: 'createUser',
    variables: item,
  });

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

  return {
    statusCode: 200,
    body: data,
  };
};
