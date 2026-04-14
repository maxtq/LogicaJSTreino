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

      let res = num1 + num2 + num3;
      let media = res / 3;
      let percent = (num1 / res) * 100;

      console.log("A soma é: " + res);
      console.log("A média é: " + media);
      console.log("A porcentagem do primeiro número é: " + percent.toFixed(2) + "%");

      rl.close();
    });
  });
});