async function dataToConnect(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log('Conectado com sucesso!');
    }else {
        console.log('Usuário ou senha incorretos!');
    }
    
}

export default dataToConnect;