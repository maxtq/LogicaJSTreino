const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (n1) => {
  rl.question("Digite outro número: ", (n2) => {
    rl.question("Digite mais um número: ", (n3) => {

        let num1 = Number(n1);
        let num2 = Number(n2);
        let num3 = Number(n3);

        if(num1 == num2  & num2 == num3){
            console.log("Equilátero");
        }else if(num1 == num2 || num2 == num3 || num1 == num3){
            console.log("Isóceles");
        }else{
            console.log("Escaleno")
        }
        rl.close();
    });
  });
});