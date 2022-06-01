function obterPokemonX(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon');
    xhr.onload = function (){
        var lista = JSON.parse(xhr.response).results.map((pokemon) => {return pokemon.name});
        buscarImgPokemon(lista);
    };
    xhr.send();
}

function buscarImgPokemon(lista){
    var xhr2 = new XMLHttpRequest();
    xhr2.onload = function(){
        document.getElementById('pokemon').innerHTML += `<img src="${JSON.parse(xhr2.response).sprites.front_default}"/>`;
    };
    lista.forEach((idPokemon, i) => {
        setTimeout(() => {
            xhr2.open('GET', `https://pokeapi.com/api/v2/pokemon/${idPokemon}`);
            xhr2.send();
        }, 1000 * i);
    });
}

function obterPokemon(){
    var xhr = new XMLHttpRequest();
    var idPokemon = document.getElementById('idPokemon').value;
    xhr.open('GET', `https://pokeapi.com/api/v2/pokemon/${idPokemon}`);
    xhr.onload = function (){
        document.getElementById('pokemonSel').innerHTML += `<img src="${JSON.parse(xhr.response).sprites.front_default}"/>`;
    };
    xhr.send();
}