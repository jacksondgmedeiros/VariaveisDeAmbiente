import dataToConnect from "./data/dataToConnect.js";

async function main() {
        //usando as variaveis de ambiente, vem do arquivo .env
        const user = process.env.USERDATABASE;
        const password = process.env.PASSWORDDATABASE;
        await dataToConnect(user, password);        


}

main();