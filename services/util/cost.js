export function calculateCost(storage) {
  const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;
  return rate * storage * 100;
}

/*
// Testing 

npx aws-api-gateway-cli-test \ 
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='us-east-1_PTNRknfUV' \
--app-client-id='te1bq6hg1hgih16rsecb8a55j' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:9ccb0859-7d57-40b7-865e-ec368420ece4' \
--invoke-url='https://u9763q58pe.execute-api.us-east-1.amazonaws.com' \
--api-gateway-region='us-east-1' \
--path-template='/billing' \
--method='POST' \
--body='{"source":"tok_visa","storage":21}'




*/
