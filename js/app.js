let amigos = []; //array vazio

function adicionar() { 
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == '') {
        alert('Informe o nome do amigo');
        return;
    }
    if (amigos.includes(amigo.value)){
        alert('Nome já adicionado');
        return;
    }  

    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);
    
    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';   
}

function sortear(botao) {
    if (amigos.length < 3){
        alert('Escolha ao menos 3 amigos');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
    }
    }
    botao.disabled = true;
            
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';  
    document.getElementById('nome-amigo').innerHTML = '';
    let botaoSortear = document.querySelector('.button.secondary');
    botaoSortear.disabled = false;
    botaoSortear.textContent = "Sortear";
}
//function para embaralhar o Array algoritmo Fisher–Yates.
function embaralha(amigos) {

    for (let indice = amigos.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [amigos[indice - 1], amigos[indiceAleatorio]] = 
            [amigos[indiceAleatorio], amigos[indice - 1]];
    }
}