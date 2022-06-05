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
    const produtoPesq = lista.find((produtoLista) => produtoLista.id === produto.id);
    if (!produtoPesq) {
        lista.push(produto);
        res.send('inserido com sucesso');
    } else {
        res.send(`não é possível inserir pois já existe um produto com o id ${produto.id}`);
    }
}

function getProdutoById(req, res) {
    const produtoId = req.params.id;
    const produtoPesq = lista.find((produtoLista) => produtoLista.id == produtoId);
    if(!produtoPesq){
        res.send(`não existe produto com o id ${produtoId}`)
    } else {
        res.send(produtoPesq);
    }
}

function deleteProd(req, res) {
    const produtoId = req.params.id;
    lista = lista.filter((produto) => produto.id != produtoId);
    res.send(`produto de id ${produtoId} foi removido com sucesso!`);
}

function updateProd(req, res) {
    const produtoId = req.params.id;
    const produto = req.body;
    const produtoPesq = lista.find((produtoLista) => produtoLista.id == produtoId);
    if(!produtoPesq){
        res.send(`não existe produto com o id ${produtoId}`)
    } else {
        produtoPesq.name = produto.name;
        produtoPesq.id = produto.id;
        produtoPesq.default = produto.default;
        produtoPesq.weight = produto.weight;
        produtoPesq.order = produto.order;
        produtoPesq.nicknames = produto.nicknames;
        res.send(`produto de id ${produtoId} alterado com sucesso!`);
    }
}

app.get('/produto', getProduto);
app.get('/produto/:id', getProdutoById);
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
*/