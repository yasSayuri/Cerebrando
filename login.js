document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    // Recupera os dados do Local Storage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
        alert('Nenhum usuário cadastrado!');
        return;
    }

    // Valida as credenciais
    if (usuario.email === email && usuario.senha === senha) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.href = 'principal.html'; // Redireciona para a página principal
    } else {
        alert('Email ou senha incorretos!');
    }
});
