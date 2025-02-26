// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo;
let listaAmigos = [];
let listaAmigosSorteados =[];
let amigoSecreto;

function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo == ''){
        alert("Nombre vacío")        
    }else{
        if(listaAmigos.includes(nombreAmigo)){
            alert(`No se pudo agregar ${nombreAmigo}, ya a se encuentra en la lista`)
        }else{
            listaAmigos.push(nombreAmigo);
            document.getElementById('listaAmigosUl').innerHTML += `<li>${listaAmigos[listaAmigos.length-1]}</li>`;
        } 
    }
}

function sorteoAmigoSecreto(){
    let random = Math.floor(Math.random()*listaAmigos.length)
    amigoSecreto = listaAmigos[random];

    if(listaAmigosSorteados.length == listaAmigos.length){
        alert('Ya se sortearon todos los nombres')
    }else{
        if(listaAmigosSorteados.includes(amigoSecreto)){
            return sorteoAmigoSecreto()
        }else{
            listaAmigosSorteados.push(amigoSecreto);
            document.getElementById('resultado').innerHTML = `<li>${amigoSecreto}</li>`;
        }
    }
}