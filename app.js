// Sortear a quantidade de numeros pedido pelo usuario
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    // Loop de 0 a quantidade escolhida
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        
        // Loop: enquanto "sorteados" tiver "numero"(True), sortear novo numero
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
}

// Funcao para achar um valor entre dois numeros, incluindo o ultimo possível
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}