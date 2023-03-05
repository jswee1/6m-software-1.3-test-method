/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
const databaseCredential = ["devuser:password"];

// Task: Add code here

switch (env) {
    case "STAGE":
        databaseCredential = "stageuser:password";
        console.log(`Database credential for environment ${env} is ${databaseCredential}`);
        break;
  
    case "PROD":
        databaseCredential = "produser:password";
        console.log(`Database credential for environment ${env} is ${databaseCredential}`);
    break;
    default:
        console.log(`Database credential for environment ${env} is ${databaseCredential}`);
  }

