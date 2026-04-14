const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um numero: ", (n1) => {

  let num1 = Number(n1);
  let res;
  let rest;

  res = num1 / 5;
  rest = num1 % 5;
  res = Math.trunc(res);

  if (rest == 0) {
    console.log(res + " notas de 5");
  } else {
    if (rest == 1) {
      console.log((res - 1) + " notas de 5 e " + 2 + " notas de 3");
    } else {
      if (rest == 2) {
        console.log((res - 2) + " notas de 5 e " + 4 + " notas de 3");
      } else {
        if (rest == 3) {
          console.log(res + " notas de 5 e " + 1 + " notas de 3");
        } else {
          if (rest == 4) {
            console.log((res - 1) + " notas de 5 e " + 3 + " notas de 3");
          }
        }
      }
    }
  }

  rl.close();
});