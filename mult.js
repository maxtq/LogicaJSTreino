const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um numero: ", (n1) => {
    
    let num1 = Number(n1);

    let res = num1 % 6;

    if(res == 0){
        console.log(num1+" é multiplo de 6");
    }else{
        console.log(num1+" Não é multiplo de 6")
    }
    rl.close();
});
