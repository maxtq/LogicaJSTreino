const dados = [
    {
        divida: 0,
        cdb: 0,
        ibxr100: 0
    }
];

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

function crescimento_divida() {
    const Rngtakediv = Math.random() * 1000;

    if (Rngtakediv >= 500) {

        const valordiv = Math.random();
        const novaDivida = valordiv * 1000;

        dados.push({
            divida: novaDivida + dados.divida,
            cdb: (novaDivida / 2) + dados.cdb,
            ibxr100: (novaDivida / 2) + dados.ibrx100
        });
        preencherTabela(dados);
    }
}

const interval = setInterval(crescimento_divida,2500);
preencherTabela(dados);