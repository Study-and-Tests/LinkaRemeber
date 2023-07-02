$(document).ready(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const tabela = document.getElementById('tabela');
        const tbody = tabela.querySelector('tbody');
        const funcaoCRUD = document.getElementById('funcaoCRUD');

        function exibirAlerta(mensagem) {
            funcaoCRUD.textContent = mensagem;
            setTimeout(function () {
                funcaoCRUD.textContent = '';
            }, 3000);
        }

        function preencherTabela(dados) {
            tbody.innerHTML = '';

            dados.forEach(function (dado) {
                const linha = document.createElement('tr');
                linha.innerHTML = `
              <td>${dado.nome}</td>
              <td>${dado.email}</td>
            `;

                tbody.appendChild(linha);
            });
        }

        function lerDadosJson() {
            fetch('../dados.json')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    preencherTabela(data);
                    exibirAlerta('Arquivo lido com sucesso');
                })
                .catch(function (error) {
                    console.error('Erro ao ler o arquivo:', error);
                    exibirAlerta('Erro ao ler o arquivo');
                });
        }

        lerDadosJson();
    });

});
