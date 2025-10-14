document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');          //obtendo o formulário e seus campos por id

    form.addEventListener('submit', function(event) {
        event.preventDefault();      //impedir a página de recarregar após o envio do formulário

        const nomeValue = nomeInput.value.trim();
        const emailValue = emailInput.value.trim();
        const mensagemValue = mensagemInput.value.trim();      //pegar os valores dos campos e remover espaços em branco extras

        if (nomeValue === '' || emailValue === '' || mensagemValue === '') {
            alert('Todos os campos devem ser preenchidos!');
            return;                           //validação se algum dos campos está em branco
        }

        alert('Mensagem enviada com sucesso!');            //no caso de sucesso de envio do formulário
        form.reset();          //limpa todos os campos do formulário
    });
});