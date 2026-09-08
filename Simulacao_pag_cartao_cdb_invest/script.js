// valores que serao mostrados no html
const dados = [
    {
        mes: 0,
        divida: 0,
        cdb: 0,
        ibxr100: 0
    }
];


// valores que serão guardados e não será mostrados no html
const privdados = [
    {
        parcelasVal: 0,
        parcelasquant: 0
    }
]

const corpoTabela = document.getElementById("tabela");

function preencherTabela(dados) {
    // Limpa a tabela antes de preencher
    corpoTabela.innerHTML = "";

    dados.forEach(obj => {
        const tr = document.createElement("tr");

        // Pega cada valor do objeto
        Object.values(obj).forEach(valor => {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });

        corpoTabela.appendChild(tr);
    });
}

// funcao que cria uma compra aleatoria nova com 50% de chance de ter uma divida nova de 0 a 1000
function crescimento_divida() {

    // gera numero aleatorio
    const Rngtakediv = Math.random() * 1000;

    if (Rngtakediv >= 500) {

        const valordiv = Math.random() * 1000;
        const novaDivida = dados[dados.length-1].divida + valordiv;

        dados.push({
            mes: dados[dados.length-1].mes + 1,
            divida: novaDivida
        });
        preencherTabela(dados);


    }else{
    
    novaDivida = dados[dados.length-1].divida

    dados.push({
        mes: dados[dados.length-1].mes + 1,
        divida: novaDivida
    });
    preencherTabela(dados);
    }
    
    crescimento_parcelas
}

// funcao que simula a quantidade de parcelas e o valor delas
function crescimento_cdb() {
    
}

// funcao que simula quanto dinheiro sera colocado no cdb para
function crescimento_cdb() {
    
}

// funcao que simula quanto dinheiro sera colocado no ibrx 100
function crescimento_ibrx100() {
    
}

const interval = setInterval(crescimento_divida,2500);
preencherTabela(dados);