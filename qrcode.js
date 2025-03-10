/*document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault(); //função para impedir envio tradicional do form
});

//capturar valores

const texto = document.getElementById('texto').value;
const cpf = document.getElementById('cpf').value;
const data = document.getElementById('data').value;

*/
//enviar resultad0

// Função para mascarar CPF
function mascararCPF(event) {
    let cpf = event.target.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }
    event.target.value = cpf;
}

// Função para enviar dados
function enviarresult() {
    // Captura dos dados dos inputs
    const texto = document.getElementById('texto').value;
    const cpf = document.getElementById('cpf').value;
    const data = document.getElementById('data').value;

    // Criação do objeto de dados
    const dados = {
        texto: texto,
        cpf: cpf,
        data: data
    };

    // Exibindo os dados em um alerta
    alert("Seus dados são: " + JSON.stringify(dados)); // Usando JSON.stringify para exibir o objeto em formato de string

}




 