/*const express = require('express') /*require é uma função global no node, busca no node_nodules por biblioteca informado como parametro, onde instancia o objeto*/ 
/*const app = express()

function helloNode(req, res){
    res.send('Hello Word');
}

function somarNumeros(req, res){
    const n1 = 2;
    const n2 = 1;
    res.send((n1 + n2).toString());
}

function retornaDigitado(req, res){ /*req= requisição, res= response/resultado*/
/*    const digitado = req.params.id;
    res.send(digitado);
}

function retornaFrasePokemon(req, res){
    const pokemon = req.params.nomePokemon;
    res.send(`O pokemon digitado foi o ${pokemon}`);
}

function getObj(req, res){
    const obj = {
        altura: 1.75,
        corCabelo: "preto",
        cursos: ["JAVA","CSS"],
        nome: "André",
        escreverNome: function(){
            console.log(this.nome);
        },
        filhos: [{nome: "josé", idade: 50}, {nome: "maria", idade: 0}],
        habilitado: false,
        idade: 25,
        mae: {nome: "isis", idade: 62}
    };
    res.send(obj);
}

app.get('/teste/andre',helloNode);
app.get('/', somarNumeros);
app.get('/:id', retornaDigitado);
app.get('/pokemon/:nomePokemon', retornaFrasePokemon);
app.get('/obj/obj', getObj);

app.listen(3000);


*/



/*********** revisão 03062022 */



/*
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const list = [];

function getObj(req, res){
    res.send(lista);
}

function criandoObj(req, res){
    const obj = req.body;
    lista.push(obj);
    res.send('inserido com sucesso');
}

app.get('/objt', getObj);
app.post('/criando', criandoObj);

app.listen(3000);
*/



/***
 * Crie um projeto node novo junto com express e body parser.
Crie uma lista no arquivo index.js para receber valores.
Crie uma rota GET /pokemon que busque a lista anterior.
Crie uma rota chamada POST /pokemon para inserir na lista anterior o pokemon, com os seguintes atributos:
name: string
id: int
default: boolean
weight: double (ponto flutuante ou número com casa decimal)
order: int,
nicknames: lista de string com apelidos do pokemon.
*/

/*
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const lista = [];

function getPokemon(req, res){
    res.send(lista);
}

function criandoPokemon(req, res){
    const pokemon = req.body;
    lista.push(pokemon);
    res.send('inserido com sucesso');
}

app.get('/pokemon', getPokemon);
app.post('/pokemon', criandoPokemon);

app.listen(3000);
*/

/*
{
    name: "Pikachu",
    id: 0,
    default: true,
    weight: 50.1,
    order: 0,
    nicknames: ["principal", "filho do ash"]
}





/*
Implemente uma verificação de id na rota POST /pokemon para NÃO inserir se já exitir um pokemon 
na lista (utilizar a função find para obter pelo id, pesquisar no google caso tenha dúvidas).
crie no projeto do pokemon a rota GET /pokemon/:id onde o id é o req.params.id e use a função 
find da lista para obter o projeto correspondente ao id.
crie no projeto pokemon a rota DELETE /pokemon/:id onde o id é o req.params.id e utiliza a função
filter da lista para atualizar a lista somente com os ids que NÃO são o id passado como
parametro (se tiver dúvidas pesquisar no google como remover um objeto de uma lista de objetos).
*/

const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

var lista = [];

function getPokemon(req, res){
    res.send(lista);
}

function criandoPokemon(req, res){
    const pokemon = req.body;
    const pokemonPesquisado = lista.find((pokemonNaLista) => pokemonNaLista.id === pokemon.id); /*FIND: Retorna o valor do primeiro elemento na matriz em que o predicado é verdadeiro e indefinido caso contrário.*/
    if(!pokemonPesquisado) {
        lista.push(pokemon);
        res.send('inserido com sucesso');
    } else {
        res.send(`não é possível inserir pois já existe um pokemon com o id ${pokemon.id}`);
    }
}

function getPokemonById(req, res) {
    const pokemonId = req.params.id;
    const pokemonPesquisado = lista.find((pokemonNaLista) => pokemonNaLista.id == pokemonId);
    if (!pokemonPesquisado){
        res.send(`não existe um pokemon com o id ${pokemonId}`)
    } else {
        res.send(pokemonPesquisado);
    }
}

function deletePokemon(req, res){
    const pokemonId = req.params.id;
    lista = lista.filter((pokemon) => pokemon.id != pokemonId);
    res.send(`pokemon de id ${pokemonId} foi removido com sucesso!`);
}

app.get('/pokemon', getPokemon);
app.get('/pokeon/:id', getPokemonById);
app.post('/pokemon', criandoPokemon);
app.delete('/pokemon/:id', deletePokemon);

app.listen(3000);

/*   const lista2 = [
        {
            "name": "Pikachu", 
            "id": 0,
            "default": true,
            "weight": 50.1,
            "order": 0,
            "nicknames": [
                "principal", 
                "filho do ash"
            ]
        },
        {
            "name": "bulbasaur", 
            "id": 1,
            "default": true,
            "weight": 50.1,
            "order": 0,
            "nicknames": [
                "principal2", 
                "filho do ash2"
            ]
        }
    ]*/
/*
    const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


var lista = [];

function getPokemon(req, res) {
    res.send(lista);
}

function criandoPokemon(req, res) {
    const pokemon = req.body;
    const pokemonPesquisado = lista.find((pokemonNaLista) => pokemonNaLista.id === pokemon.id);
    if (!pokemonPesquisado) {
        lista.push(pokemon);
        res.send('inserido com sucesso');
    } else {
        res.send(`não é possível inserir pois já existe um pokemon com o id ${pokemon.id}`);
    }
}

function getPokemonById(req, res) {
    const pokemonId = req.params.id;
    const pokemonPesquisado = lista.find((pokemonNaLista) => pokemonNaLista.id == pokemonId);
    if(!pokemonPesquisado){
        res.send(`não existe um pokemón com o id ${pokemonId}`)
    } else {
        res.send(pokemonPesquisado);
    }
}

function deletePokemon(req, res) {
    const pokemonId = req.params.id;
    lista = lista.filter((pokemon) => pokemon.id != pokemonId);
    res.send(`pokemon de id ${pokemonId} foi removido com sucesso!`);
}

function updatePokemon(req, res) {
    const pokemonId = req.params.id;
    const pokemon = req.body;
    const pokemonPesquisado = lista.find((pokemonNaLista) => pokemonNaLista.id == pokemonId);
    if(!pokemonPesquisado){
        res.send(`não existe um pokemón com o id ${pokemonId}`)
    } else {
        pokemonPesquisado.name = pokemon.name;
        pokemonPesquisado.id = pokemon.id;
        pokemonPesquisado.default = pokemon.default;
        pokemonPesquisado.weight = pokemon.weight;
        pokemonPesquisado.order = pokemon.order;
        pokemonPesquisado.nicknames = pokemon.nicknames;
        res.send(`pokemon de id ${pokemonId} alterado com sucesso!`);
    }
}

app.get('/pokemon', getPokemon);
app.get('/pokemon/:id', getPokemonById);
app.post('/pokemon', criandoPokemon);
app.put('/pokemon/:id', updatePokemon);
app.delete('/pokemon/:id', deletePokemon);


app.listen(3000);
*/