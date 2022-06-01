/*function SOMA(NUM1, NUM2){
    return NUM1 + NUM2;
}*/

//var Nome = "André do Nascimento";
//var Formacao = "- Avanade PCDev -";
//var Ano = 2022;
function NOME(){
    return 'ANDRÉ DO NASCIMENTO';
}
NOME();

function NOME(){
    return 'ANDRÉ - AVANADE';
}
NOME();

function DIVISAO(NUM1, NUM2){
    return NUM1 / NUM2;
}
DIVISAO(35,10);



//var nome=[];
// testando

var nome = ['Andre', 'Erick', 'Nilce', 'Cassia', 'Felipe', 'Moises', 'Maiara'];
console.log(nome);

var nome = ['Andre', 'Erick', 'Nilce', 'Cassia', 'Felipe', 'Moises', 'Maiara'];
var inclusao = nome.push('Gustavo');
console.log(nome);
console.log(inclusao);


/*1 - Crie uma função que retorne o seu nome
2 - Crie uma função que retorne o nome passado por parâmetro
3 - Faça uma função para dividir 2 números
4 - faça uma função que retorne um array com o nome dos alunos presentes na aula
5 - faça uma função que recebe um array e um valor, adicione o valor no array e retorne o array
*/

function meuNome(){
    return "Gustavo";
}

function retornaNomePassadoPorParametro(nome){
    return nome;
}

function divisao(n1,N2){
    if(n2 === 0){
        return 0;
    }
    return n1 / N2;
}

//outra opção

function divisao(n1,N2){
    return n2 === 0 ? 0 : n1/n2;
   // if(n2 === 0){
    //    return 0;
    //}
    //return n1 / n2
}

function alunosPresente(){
    return ["André", "Erick", "Felipe", "Nilce", "moises"];

}

function adicionarAoArray(arr, valor){
    arr.push(valor);
    return arr;
}


//// outro assunto
{nome: "André", idade: 30, altura: 1.75, corCabelo: "Castanho", 
    cursos:["JS", "JAVA", "CSS", "HMTL"],
    filhos: [{nome: "chiquita", idade: 8}], 
    habilitado: false, 
    genitora: "Maria", idade: 65};





function filtro(nome){
    return nome === "ana";
}

//pessoa.filhos.filter((filtro)) -> {
//    return filho.nome === "ana"
//}

/*
1 - Faça uma função que retorne um objeto que represente você, com os seguintes atributos: 
altura: ponto flutuante
corCabelo: string
cursos: array
escreverNome: função que escreve seu nome
filhos: array de objetos, o objeto filho precisa ter nome e idade
habilitado: boolean
idade: inteiro
mae: objeto com nome e idade
nome: string*/

function getObj(){
    var obj = {
        altura: 1.75,
        corCabelo: "preto",
        cursos: ["JAVA","CSS"],
        nome: "André",
        escreverNome: function(){
            console.log(this.nome);
        },
        filhos: [{nome: "josé", idade: 50}, {nome: "maria", idade: }],
        habilitado: false,
        idade: 25,
        mae: {nome: "isis", idade: 62}
    }
}
/*
2 - faça uma função que utilize a função anterior e filtre pelos filhos com mais de 1 ano de idade.
*/
function getFilhosMaisUmAnoIdade(){
    return getObjt().filhos.filter((filho) => {return filho.idade > 1});
}
/*


3 - faça uma função que utilize a função 1 e obtenha somente o nome dos filhos com mais de 1 ano de idade.
*/
function getNomeFilhosMaisUmAnoIdade(){
    return getFilhosMaisUmAnoIdade().map((filho) => {return filho.nome});
}