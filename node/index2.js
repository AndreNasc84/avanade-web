/*Atividade:
Faça no arquivo index.js criado na aula de nodejs, uma função que receba como parâmetro 1 número e identifique se esse número é par ou ímpar 
(pesquisar na internet sobre o operador MOD representado pelo dígito %). O retorno precisa ser um boolean.
Utilize o console.log e chame a função criada no arquivo index.js. Execute npm run start para rodar o código e ver o resultado no console.
*/

function ePar (num1){
    var num1 = 7
        console.log(`O número ${num1} é par?`)
    
        if (num1 % 2 == 0){
            return true
        }
            else{
            return false
    };
}
console.log(ePar());