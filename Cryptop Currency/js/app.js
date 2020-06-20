// The vars 
const crypt = new CryptoApi();
const ui = new UI();

crypt.getData().then(data=>{console.log('Hey '+ data)});