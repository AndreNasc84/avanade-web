const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

var lista = [];

function getProduto(req, res) {
    res.send(lista);
}

function novoProduto(req, res) {
    const produto = req.body;
    const produtoPesq = lista.find((produtoLista) => produtoLista.categoria === produto.categoria);
    if (!produtoPesq) {
        lista.push(produto);
        res.send('inserido com sucesso');
    } else {
        res.send(`não é possível inserir pois já existe um produto da mesma categoria ${produto.categoria}`);
    }
}

function getProdutoByCategoria(req, res) {
    const produtoCateg = req.params.categoria;
    const produtoPesq = lista.find((produtoLista) => produtoLista.categoria == produtoCateg);
    if(!produtoPesq){
        res.send(`não existe produto com o id ${produtoCateg}`)
    } else {
        res.send(produtoPesq);
    }
}

function deleteProd(req, res) {
    const produtoCateg = req.params.categoria;
    lista = lista.filter((produto) => produto.categoria != produtoCateg);
    res.send(`produto de id ${produtoCateg} foi removido com sucesso!`);
}

function updateProd(req, res) {
    const produtoCateg = req.params.categoria;
    const produto = req.body;
    const produtoPesq = lista.find((produtoLista) => produtoLista.categoria == produtoCateg);
    if(!produtoPesq){
        res.send(`não existe produto com o id ${produtoCateg}`)
    } else {
        produtoPesq.name = produto.name;
        produtoPesq.preco = produto.preco;
        produtoPesq.categoria = produto.categoria;
        produtoPesq.descricao = produto.nicknames;

        res.send(`produto de id ${produtoId} alterado com sucesso!`);
    }
}

app.get('/produto', getProduto);
app.get('/produto/:id', getProdutoByCategoria);
app.post('/produto', novoProduto);
app.put('/produto/:id', updateProd);
app.delete('/produto/:id', deleteProd);


app.listen(3000);

/*Crie um GET, GET por id, POST, PUT, DELETE similar ao Pokemon para o seguinte objeto:

{
    "nome": "produto de teste",
    "preço": 25.2,
    "categoria": "categoria de teste",
    "descriçao": "descrição de teste"
}

{
    name: "Pikachu",
    id: 0,
    default: true,
    weight: 50.1,
    order: 0,
    nicknames: ["principal", "filho do ash"]
}
*/
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

// Implemente uma verificação de id na rota POST /pokemon para NÃO inserir se já existir um pokemón 
// na lista (utilizar a função find para obter pelo id, pesquisar no google caso tenha dúvidas).

// Crie no projeto do pokemón a rota GET /pokemon/:id onde o id é o req.params.id e use a função 
// find da lista para obter o objeto correspondente ao id.

// Crie no projeto do pokemón a rota DELETE /pokemon/:id onde o id é o req.params.id e utilize a função 
// filter da lista para atualizar a lista somente com os ids que NÃO são o id passado como 
// parâmetro (se tiver dúvidas pesquisar no google como remover um objeto de uma lista de objetos).

app.get('/pokemon', getPokemon);
app.get('/pokemon/:id', getPokemonById);
app.post('/pokemon', criandoPokemon);
app.put('/pokemon/:id', updatePokemon);
app.delete('/pokemon/:id', deletePokemon);


app.listen(3000);*/