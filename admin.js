document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formUsuario');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const listaUsuarios = document.getElementById('usuariosLista');
    const pesquisarInput = document.getElementById('pesquisar');
    const limparCamposBtn = document.getElementById('limparCampos');
    const excluirTodosBtn = document.getElementById('excluirTodos');

    const carregarUsuarios = () => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        listaUsuarios.innerHTML = '';
        usuarios.forEach((usuario, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${usuario.nome} - ${usuario.email} <span>(${usuario.data})</span>
                <button onclick="removerUsuario(${index})">Excluir</button>
            `;
            listaUsuarios.appendChild(li);
        });
    };

    const salvarUsuario = (usuario) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        carregarUsuarios();
    };

    const limparCampos = () => {
        nomeInput.value = '';
        emailInput.value = '';
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const usuario = {
            nome: nomeInput.value,
            email: emailInput.value,
            data: new Date().toLocaleString(),
        };
        salvarUsuario(usuario);
        limparCampos();
    });

    limparCamposBtn.addEventListener('click', limparCampos);

    excluirTodosBtn.addEventListener('click', () => {
        if (confirm('Deseja excluir todos os usuários?')) {
            localStorage.removeItem('usuarios');
            carregarUsuarios();
        }
    });

    pesquisarInput.addEventListener('input', () => {
        const termo = pesquisarInput.value.toLowerCase();
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        listaUsuarios.innerHTML = '';
        usuarios
            .filter(usuario => usuario.nome.toLowerCase().includes(termo) || usuario.email.toLowerCase().includes(termo))
            .forEach((usuario, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${usuario.nome} - ${usuario.email} <span>(${usuario.data})</span>
                    <button onclick="removerUsuario(${index})">Excluir</button>
                `;
                listaUsuarios.appendChild(li);
            });
    });

    window.removerUsuario = (index) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        carregarUsuarios();
    };

    carregarUsuarios();
});
