const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro coeficiente: ", (q1) => {
    rl.question("Digite segundo coeficiente: ", (q2) => {
        rl.question("Digite o terceiro coeficiente: ", (q3) => {
            rl.question("Digite o termo independente: ", (qt) => {
                rl.question("Digite o divisor: ", (q5) => {

                    let n1 = Number(q1);
                    let n2 = Number(q2);
                    let n3 = Number(q3);
                    let t = Number(qt);
                    let n5 = Number(q5);

                    let res1 = n1*n5+n2

                    let res2 = res1*n5+n3 

                    let resf = res2*n5+t

                    console.log(`Resultado: ${n1}x² + ${res1}x + ${res2}, resto = ${resf}`);
 
                    rl.close();
                });
            });
        });
    });
});