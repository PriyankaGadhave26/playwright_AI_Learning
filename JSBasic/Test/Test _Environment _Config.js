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

