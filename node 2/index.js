const express = require('express') /*require é uma função global no node, busca no node_nodules por biblioteca informado como parametro, onde instancia o objeto*/ 
const app = express()

function helloNode(req, res){
    res.send('Hello Word');
}

function somarNumeros(req, res){
    const n1 = 2;
    const n2 = 1;
    res.send((n1 + n2).toString());
}

function retornaDigitado(req, res){ /*req= requisição, res= response/resultado*/
    const digitado = req.params.id;
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
 * 
 * 
 * 
 */