// Array to store the inputs value. I think it's easier to use it as a debug over using localStorage alone
const campos = ["nome", "email", "cep", "logradouro", "bairro", "localidade", "estado"];

// variable to manipulate the submit button behavior
const btn = document.getElementById('btn');

// Get the initial values for when the page is loaded and throw it in the array above
// I didn't manage to make the debug to work without this
window.onload = () => {
    campos.forEach(campo => {
        const salvo = localStorage.getItem(campo);
        if (salvo) document.getElementById(campo).value = salvo;
    });
};

// Updates the value in campos[] each time a new value is brought by the fields
campos.forEach(campo => {
    document.getElementById(campo).addEventListener("input", () => {
        localStorage.setItem(campo, document.getElementById(campo).value);
    });
});

function clearCepForm() {

    // This one clears the fields below if Cep is invalid or non-existent.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {

    if (!("erro" in conteudo)) {

        // If the Cep is valid, fills the address obtained from the API.
        document.getElementById('logradouro').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('localidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        document.getElementById('ibge').value=(conteudo.ibge);
    }
    else {
        // If the address wasn't found by the API, calls clearCepForm to... clear the form fields.
        clearCepForm();
        alert("CEP não encontrado.");
    }
}

function pesquisaCep(valor) {

    // Gets the numbers from Cep typed
    let cep = valor.replace(/\D/g, '');

    // Checks if Cep has a value.
    if (cep !== "") {

        // Validates CEP with a RegEx.
        let validaCep = /^[0-9]{8}$/;

        // Validates the format inserted. Cep needs to be a string containing 8 numbers.
        if(validaCep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logradouro').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('localidade').value="...";
            document.getElementById('uf').value="...";
            document.getElementById('ibge').value="...";

            // JS element.
            let script = document.createElement('script');

            // Element synced with the callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            // Inserts scripts in the document and load content.
            document.body.appendChild(script);

        }
        else {

            // Invalid Cep.
            clearCepForm();
            alert("Formato de CEP inválido.");
        }
    }
    else {
        // If CEP has no value, clears the form.
        clearCepForm();
    }
}

function storedFields() {

    // the idea of that function is preventing the page from reloading once the form is submitted
    for(let i = 0; i <= campos.length; i++) {

        // this one is to check if the info was properly stored on the page's localStorage
        // the array "campos" (meaning fields) is only used here
        console.log(campos[i]);
    }

    // and this is my headache
    btn.addEventListener('submit',(event) => {

        // all works except for that preventDefault
        event.preventDefault();
        alert("Dados salvos com sucesso!");
    });
}