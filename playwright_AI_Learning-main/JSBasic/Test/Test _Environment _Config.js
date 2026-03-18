let environment='qa'

switch(environment)
{
    case 'dev':console.log( "Environment: Dev ,Base URL: https://Dev-api.testingacademy.com ,API Key: stg_key_xxxx-xxxx, Timeout: 8000ms, Description: dev - dev env");
                break;
    case 'qa':console.log( "Environment: Dev ,Base URL: https://QA-api.testingacademy.com ,API Key: stg_key_xxxx-SSxxxx, Timeout: 82000ms, Description: Qa - QA need attension env");
                break;
    case 'staging':( "Environment: Dev ,Base URL: https://Satgging-api.testingacademy.com ,API Key: stg_key_xxxsaqx-xxxx, Timeout: 8q000ms, Description: stagging  - stgging env");
           break;
    case 'production':( "Environment: Dev ,Base URL: https://prod-api.testingacademy.com ,API Key: stg_key_xxxsax-xxxx, Timeout: 8000ms, Description: prd - main  env");
                break;
    default: console.log("UNKNOWN environmenet ");
}



//Other way
const envName = "staging";
let baseURL, apiKeyPattern, timeout, description;

switch (envName) {
    case "dev":
        baseURL = "https://dev-api.testingacademy.com";
        apiKeyPattern = "dev_key_xxxx-xxxx";
        timeout = 5000;
        description = "Development - For active development and testing";
        break;
    case "staging":
        baseURL = "https://staging-api.testingacademy.com";
        apiKeyPattern = "stg_key_xxxx-xxxx";
        timeout = 8000;
        description = "Staging - Pre-production mirror";
        break;
    case "qa":
        baseURL = "https://qa-api.testingacademy.com";
        apiKeyPattern = "qa_key_xxxx-xxxx";
        timeout = 7000;
        description = "QA - For quality assurance testing";
        break;
    case "production":
    case "prod":
        baseURL = "https://api.testingacademy.com";
        apiKeyPattern = "prod_key_xxxx-xxxx";
        timeout = 10000;
        description = "Production - Live environment";
        break;
    default:
        console.log("UNKNOWN - Unhandled environment");
}
if (baseURL && apiKeyPattern && timeout && description) {
    console.log(`Environment: ${envName.toUpperCase()} Base URL: ${baseURL} API Key: ${apiKeyPattern} Timeout: ${timeout}ms Description: ${description}`);
}

