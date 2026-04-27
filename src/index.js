import dataToConnect from "./data/dataToConnect.js";

async function main() {
    //use variables from .env file
    console.log('User: ' + process.env.USERDATABASE);
    console.log('Password: ' + process.env.PASSWORDDATABASE);


    // await dataToConnect('admin', 'admin');
}

main();