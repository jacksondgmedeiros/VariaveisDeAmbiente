async function dataToConnect(user, password) {
    if (user === 'admin' && password === 'admin') {
        console.log('Conectado com sucesso!');
    }else {
        console.log('Usuário ou senha incorretos!');
    }
    
}

export default dataToConnect;