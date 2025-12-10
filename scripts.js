function clearCepForm() {

    // This one clears the fields below if Cep is invalid or non-existent.
    document.getElementById('rua').value=("");
    localStorage.setItem('logradouro', "");
    document.getElementById('bairro').value=("");
    localStorage.setItem('bairro', "");
    document.getElementById('localidade').value=("");
    localStorage.setItem('cidade',"");
    document.getElementById('uf').value=("");
    localStorage.setItem('uf',"");
}

function meu_callback(conteudo) {

    if (!("erro" in conteudo)) {

        // If the Cep is valid, fills the address obtained from the API.
        document.getElementById('logradouro').value=(conteudo.logradouro);
        localStorage.setItem('logradouro', conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        localStorage.setItem('bairro', conteudo.bairro);
        document.getElementById('localidade').value=(conteudo.localidade);
        localStorage.setItem('localidade',conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        localStorage.setItem('uf', conteudo.uf);
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

function storedFields(event) {

    console.log(localStorage.getItem('logradouro'));

    // and this is my headache
    const warn = "test";
    alert(warn);
    event.preventDefault();
}