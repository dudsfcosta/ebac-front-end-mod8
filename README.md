# 📝 Formulário de Cadastro com Busca de CEP

Uma aplicação web interativa de formulário de cadastro de usuários. Este projeto destaca-se por consumir a API pública do ViaCEP para preencher automaticamente o endereço do usuário e por utilizar o `localStorage` do navegador para armazenar os dados inseridos.

## 🚀 Funcionalidades

- **Busca Automática de Endereço:** Ao digitar um CEP válido e sair do campo, o sistema consulta a API do ViaCEP e preenche automaticamente os campos de Rua, Bairro, Cidade e Estado.
- **Validação de CEP:** Utiliza Expressões Regulares (RegEx) para garantir que o formato do CEP inserido contenha exatamente 8 números antes de fazer a requisição.
- **Armazenamento Local:** Salva as informações do formulário (Nome, Email, CEP e Endereço completo) no `localStorage` do navegador, permitindo a persistência dos dados no lado do cliente.
- **Feedback Visual:** Preenche os campos temporariamente com "..." enquanto a API processa a busca, e exibe alertas caso o CEP seja inválido ou não encontrado.
- **Prevenção de Recarregamento:** Bloqueia o comportamento padrão de envio do formulário (`preventDefault`) para manter os dados na tela e registrá-los corretamente.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação do formulário de cadastro com campos apropriados (`type="email"`, `type="text"`).
- **CSS3:** 
  - Layout construído com **Flexbox** (para o formulário) e **CSS Grid** (para o container principal).
  - Estilização moderna com gradientes no cabeçalho, sombras (`box-shadow`) e efeitos de transição no botão (`:hover`).
- **JavaScript:**
  - **Consumo de API (JSONP):** Criação dinâmica de tags `<script>` para contornar problemas de CORS e consumir dados da API do ViaCEP via callback.
  - **Web Storage API:** Uso do `localStorage.setItem` e `getItem` para gravar e ler os dados no navegador.
  - **Manipulação de DOM e Eventos:** Uso de eventos como `onblur` e `onclick` para disparar ações de forma fluida para o usuário.

## ⚙️ Como executar o projeto localmente

1. Faça o download dos arquivos (`index.html`, `styles.css`, `scripts.js`).
2. Mantenha os três arquivos na mesma pasta.
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente no seu navegador.
4. Digite um CEP real (ex: `01001000`) e clique fora do campo para ver a mágica do preenchimento automático acontecer.
5. Preencha os demais dados e clique em "Salvar".
6. **Dica:** Para ver os dados salvos, abra o console do desenvolvedor no seu navegador (pressionando `F12` e indo na aba "Console").

## 👩‍💻 Autora

Desenvolvido por **Eduarda Ferreira Costa** &copy; 2025.
