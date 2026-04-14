const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um numero: ", (n1) => {
    
    let num1 = Number(n1);

    if (num1 > 0){
        console.log("Positivo");
    }else if(num1 < 0){
        console.log("Negativo");
    }else{
        console.log("Zero");
    }
rl.close();
});