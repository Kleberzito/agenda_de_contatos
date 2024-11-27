const form = document.getElementById('form-contato');
const contato_telefone = [];
let linhas = "";

form.addEventListener('submit', (event) => {
    event.preventDefault();
    adicionarContato();
    limparFormulario();      
});

function adicionarContato() {
    const inputNome = document.getElementById('form_nome');
    const inputTelefone = document.getElementById('form_telefone'); 
    
    console.log(contato_telefone);

    if(contato_telefone.includes(inputTelefone.value)) {
        alert('Telefone já cadastrado');           
    }
    else{
        contato_telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>'; 
        
        linhas += linha;
    }

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = linhas; 
}

function limparFormulario() {
    form.reset();
}