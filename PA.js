const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro termo: ", (n1) => {
    rl.question("Digite a quantidade de termos: ", (n2) => {
        rl.question("Digite a razão: ", (n3) => {

             let a1 = Number(n1);
             let n = Number(n2);
             let r = Number(n3);

            res = (2*a1+(n-1)*r)*(n/2);

            console.log("A Soma é: " + res);


    rl.close();
        });
    });
});
