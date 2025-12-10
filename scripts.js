/* // Referências aos inputs
const campos = ["nome", "email", "cep", "logradouro", "bairro", "localidade", "estado"];

// Carregar dados salvos ao abrir a página
window.onload = () => {
    campos.forEach(campo => {
        const salvo = localStorage.getItem(campo);
        if (salvo) document.getElementById(campo).value = salvo;
    });
};

// Salvando dados automaticamente ao digitar
campos.forEach(campo => {
    document.getElementById(campo).addEventListener("input", () => {
        localStorage.setItem(campo, document.getElementById(campo).value);
    });
});
*/
function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('logradouro').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('localidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        document.getElementById('ibge').value=(conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulario_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisaCep(valor) {

    //Nova variável "cep" somente com dígitos.
    let cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep !== "") {

        //Expressão regular para validar o CEP.
        let validaCep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validaCep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logradouro').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('localidade').value="...";
            document.getElementById('uf').value="...";
            document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            let script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
    }
}

function camposSalvos() {


    const btn = document.getElementById('btn');
    /*for(let i = 0; i <= 6; i++) {

        console.log(campos[i]);
    }*/
    btn.addEventListener('submit',(event) => {
        event.preventDefault();
        alert("Dados salvos com sucesso!");
    });
}