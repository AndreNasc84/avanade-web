//alert('foi importado o arquivo terceiro.js);

//Window.alert()

function clickEnviar(){

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    alert(`prezado ${nome}, foi enviado um email de confirmação para email contendo:/n Telefone ${telefone} /n Usuário: ${usuario} /n Senha: ${senha}`);
}