document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('name').value;
    const idade = document.getElementById('idade').value;
    const escolaridade = document.getElementById('escolaridade').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    // Validações básicas
    if (!nome || !idade || !escolaridade || !email || !senha) {
        alert('Preencha todos os campos!');
        return;
    }

    // Salva os dados no Local Storage
    const usuario = {
        nome,
        idade,
        escolaridade,
        email,
        senha,
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'html2.html'; // Redireciona para a tela de login
});
