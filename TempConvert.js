const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function parseBoolean (input) {
    const normalized = input.trim().toLowerCase();
    if (["c", "celsius", "1"].includes(normalized))return true;
    if (["f", "fahrenheit", "0"].includes(normalized))return false;
    return null;    
}

function ask1() {
    rl.question("Digite celsius ou fahrenheit,: ", (n1) => {
    const boolValue = parseBoolean(n1);

    //testa se a booleana é valida e retorna a pergunta ou segue para proxima pergunta
    if (boolValue === null) {
        console.log("❌ Invalid input. Please enter c/f, celsius/fahrenheit, or 1/0.");
        return ask1();
      } else {
        console.log(`✅ Parsed boolean: ${boolValue} (type: ${typeof boolValue})`);
    if (boolValue) {
        console.log("você escolheu celsius");
    }else{
        console.log("você escolheu fahrenheit");
    }
    ask2(boolValue);
}});
};

function ask2(isCelsius) {
    rl.question(`Digite uma temperatura em ${isCelsius ? "Celsius" : "Fahrenheit"}: `, (n2) => {
        const num2 = Number(n2.replace(",","."));

        if (isNaN(num2)){
            console.log("❌ Valor inválido. Digite um número.");
            return ask2(isCelsius);
        }

        if (isCelsius){
            const toFah = num2 * (9/5) + 32
            console.log(toFah + " Fahrenheit");
        }else{
            const toCel = (num2 - 32)*(5/9)
            console.log(toCel + " Celsius");
        }

        rl.close(); 
    });
};

ask1();
