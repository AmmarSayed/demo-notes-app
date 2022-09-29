import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId': only return items with matching 'userId'
    //   partition key
    KeyConditionExpression: "userId = :userId",
    // 'ExpressionAttributeValues' defines the value in the condition
    // - ':userId': defines 'userId' to be the id of the author
    ExpressionAttributeValues: {
      ":userId": event.requestContext.authorizer.iam.cognitoIdentity.identityId,
    },
  };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;
});

/*
npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='us-east-1_PTNRknfUV' \
--app-client-id='te1bq6hg1hgih16rsecb8a55j' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:9ccb0859-7d57-40b7-865e-ec368420ece4' \
--invoke-url='https://u9763q58pe.execute-api.us-east-1.amazonaws.com' \
--api-gateway-region='us-east-1' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'

*/
