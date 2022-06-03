/*console.log('Andre');*/

/*function imprime(){
for(var i=0; i<10; i++){
    console.log('Andre');
    console.log('Javascript');
    }
}

imprime();*/
/*1*/
function getObj(){
    return obj ={
        altura: 1.75,
            corCabelo: 'preto',
            cursos: ['JS', 'JAVA', 'C#'],
            nome: 'Marcos',
            escreverNome: function(){
                this.console.log(this.nome);
            },
            filhos: [{ nome: 'José', idade: 50 }, { nome: 'Maria', idade: 0 }],
            habilitado: false, 
            idade: 25, 
            mae: { nome: 'Iza', idade: 62 }
        }
};

console.log(getObj());

/**********/
/*2*/
function getFilhosMaisUmAnoIdade(){
     return getObj().filhos.filter((filho) => {return filho.idade > 1});
}
console.log(getFilhosMaisUmAnoIdade());


/******************************************* */
/*
1- Crie uma função dentro do arquivo index.js que imprima no console o seguinte objeto:

{
        altura: 1.75,
        corCabelo: "preto",
        cursos: ["JS", "JAVA", "C#"],
        nome: "Marcos",
        escreverNome: function () {
            console.log(this.nome);
        },
        filhos: [{ nome: "José", idade: 50 }, { nome: "Maria", idade: 0 }],
        habilitado: false,
        idade: 25,
        mae: { nome: "Iza", idade: 62 }
    };


execute com npm run start para ver o resultado no console.
*/


function imprima () {
    return {
        nome: "Marcos",
        idNome: function (){
            console.log(this.nome);
        },
        mae: {nome: "Iza", idade: 62}, 
        idade: 25,
        habilitado: false,
        filhos: [{nome: "José", idade: 50}, {nome: "Maria", idade: 0}],
        cursos: ["JS", "JAVA", "C#"], 
        corCabelo: "Preto", 
        altura: 1.75
    };
}

console.log(imprima());

/*

2 - Crie uma função no arquivo index.js que utilize a função anterior e filtre pelos filhos com mais de 1 ano de idade.
execute npm run start para ver o resultado
*/

function filhoMaisUmAno() {
    return teste().filhos.filter((filhos) => {return filhos.idade > 1});
}
console.log(filhoMaisUmAno());


function parouimpar (n1){
    var n1 = 7
    console.log(`O número ${n1} é par?`)
    if (n1%2 == 0){
        return true
    }else{
        return false
    };
}
console.log(parouimpar());