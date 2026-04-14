const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um numero: ", (n1) => {

    let num1 = Number(n1);
    
    let res2 = num1 % 2;
    let res3 = num1 % 3;
    let res5 = num1 % 5;

    if (res2==0){
        console.log(num1+" é dívisivel por 2")
    }else{
        console.log(num1+" Não é dívisivel por 2")
    }
    if (res3==0){
        console.log(num1+" é dívisivel por 3")
    }else{
        console.log(num1+" Não é dívisivel por 3")
    }
    if (res5==0){
        console.log(num1+" é dívisivel por 5")
    }else{
        console.log(num1+" Não é dívisivel por 5")
    }
    rl.close();
});
