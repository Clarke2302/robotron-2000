const robotron = document.querySelector("#robotron"); //criei um link até o elemento com id robotron

const peca = document.querySelector("#peca");

robotron.addEventListener("click", (evento) =>{ //função anônima (sem nada dentro)
    console.log("Eaí meu cupinxa!");
    console.log(evento);
}) //com um click no robo ele diz oi

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click" , (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle){ //add subtrair e soma nas peças
    const peca = controle.querySelector("[data-contador]");

    if(operacao==="-"){
        peca.value = parseInt(peca.value) -1;
    }else{
        peca.value = parseInt(peca.value)+1;
    }
}

function dizOi(nome){
    const alertaNome = prompt("Digite seu nome")
    console.log("Oi terráqueo chamado "+alertaNome);
    
    console.log("Seja Bem-Vindo ao Robotron 2000.");

    console.log("Monte o seu Robô, e se prepare para a invasão alienígena!!!");
    
}

dizOi(); //toda vez que eu recarregar a pagina a frase vai aparecer

function atualizaEstatisticas(peca){

    estatisticas.forEach((elemento) => {
        elemento.textContent= parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        
    })
}

