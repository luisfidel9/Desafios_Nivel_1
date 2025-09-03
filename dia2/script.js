const botaoCor = document.getElementById("mudarCor");
const botaocontador = document.getElementById("incrementar");
const contador =  document.getElementById("contador");

let valor = 0;

//Mudar a cor de fundo
botaoCor.addEventListener("click", () => {

    //gerar cor aleatoria
    const corAleatoria = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;

});

//Incrementar o contador

botaocontador.addEventListener("click", () => {
    valor+=1;
    contador.textContent = valor;
});
