let imgArray = ["img/d.png", "img/s.png", "img/t.png", "img/v.png", "img/w.png"];
let txtArray = ["DESOLATE DIVE", "AGONY OF THORNS", "TENTACLE OF DESPAIR", "VENGEFUL SPIRIT", "HOWLING WRAITHS"];
let currentIndex = 1;

const nail = document.querySelector('#nail');
const mask = document.querySelector('#mask');
const soul = document.querySelector('#soul');
const speed = document.querySelector('#speed');

const controles = document.querySelectorAll(".controle-ajuste");
const estatisticas = document.querySelectorAll("[data-est]");

const pecas = {
    "nail": {
        "nail": 4,
        "spells": 0,
        "soul": -10,
        "speed": -2
    },
    "mask": {
        "nail": 0,
        "spells": 2,
        "soul": 5,
        "speed": 2
    },
    "soul": {
        "nail": 0,
        "spells": 15,
        "soul": 20,
        "speed": -2
    },
    "speed": {
        "nail": -4,
        "spells": 0,
        "soul": -30,
        "speed": 20
    }
};

function atualizaEstatistica(peca, operacao) {
    estatisticas.forEach((elemento) => {
        const estatistica = elemento.dataset.est;
        const valorAtual = parseInt(elemento.textContent);
        const valorPeca = pecas[peca][estatistica];
        elemento.textContent = operacao === '-' ? valorAtual - valorPeca : valorAtual + valorPeca;
    });
}

controles.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const operacao = evento.target.textContent.trim();
        const inputElement = evento.target.parentElement.querySelector('input');
        manipulaDados(operacao, inputElement);
        atualizaEstatistica(evento.target.dataset.at, operacao);
    });
});

function manipulaDados(operacao, elemento) {
    let valorAtual = parseInt(elemento.value);
    
    if (operacao === '-') {
        if (valorAtual > -99) {
            elemento.value = valorAtual - 1;
        }
    } else if (operacao === '+') {
        if (valorAtual < 99) {
            elemento.value = valorAtual + 1;
        }
    }
}

function updateCarrossel() {
    document.getElementById("carrosselImg").src = imgArray[currentIndex];
    document.getElementById("carrosselTxt").value = txtArray[currentIndex];
}

function prevImg() {
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    updateCarrossel();
}

function nextImg() {
    currentIndex = (currentIndex + 1) % imgArray.length;
    updateCarrossel();
}

function info() {
    const carrosselTxt = document.getElementById("carrosselTxt").value;
    const nailAttack = document.querySelector("[data-est='nail']").textContent;
    const spellsAttack = document.querySelector("[data-est='spells']").textContent;
    const soul = document.querySelector("[data-est='soul']").textContent;
    const speed = document.querySelector("[data-est='speed']").textContent;

    const infoText = `
                            
      SPEEL =  ${carrosselTxt} |  NAIL ATTACK = ${nailAttack}
      |  SPELLS ATTACK = ${spellsAttack} | SOUL = ${soul} | SPEED = ${speed}
    
    `;

    alert(infoText);
}