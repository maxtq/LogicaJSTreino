const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um numero: ", (n1) => {
    
    let num1 = Number(n1);

    if (num1 >= 65){
        console.log("idoso");
    }else if(num1 < 65 && num1 > 18){
        console.log("Adulto");
    }else{
        console.log("menor de idade");
    }
rl.close();
});