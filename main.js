const form = document.getElementById('form-contato');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    adicionarContato();
    limparFormulario();      
});

function adicionarContato() {
    const inputNome = document.getElementById('form_nome');
    const inputTelefone = document.getElementById('form_telefone');  

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    const tbody = document.querySelector('tbody');
    tbody.innerHTML += linha; 
}

function limparFormulario() {
    form.reset();
}