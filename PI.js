const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um numero: ", (n1) => {
    
    let num1 = Number(n1);
    let res;

    res = num1 % 2

    if (res == 0){
        console.log("O número " + num1 + " é par.")
    }else{
    console.log("O número " + num1 + " é impar.");
  }
    rl.close();
});
