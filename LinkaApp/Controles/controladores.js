// Projeto Leitor de Arquivos e Pastas


// Função para criar um elemento <ul>
var ts_criarUl = function (classes) {
    var _a;
    var ul = document.createElement('ul');
    ul.classList.add('list-group');
    if (Array.isArray(classes)) {
        (_a = ul.classList).add.apply(_a, classes);
    }
    else if (classes) {
        ul.classList.add(classes);
    }
    return ul;
};
// Função para criar um elemento <li>
var ts_criarLi = function (classes) {
    var _a;
    var li = document.createElement('li');
    li.classList.add('list-group-item');
    if (Array.isArray(classes)) {
        (_a = li.classList).add.apply(_a, classes);
    }
    else if (classes) {
        li.classList.add(classes);
    }
    return li;
};
// Função para criar um elemento <kbd>
var ts_criarKbd = function (texto) {
    var kbd = document.createElement('kbd');
    kbd.textContent = texto;
    return kbd;
};
// Função para criar um elemento <h2>
var ts_criarH2 = function (nome, classes) {
    var _a;
    var h2 = document.createElement('h2');
    h2.textContent = nome;
    if (Array.isArray(classes)) {
        (_a = h2.classList).add.apply(_a, classes);
    }
    else if (classes) {
        h2.classList.add(classes);
    }
    return h2;
};
// Função para criar um elemento <h3>
var ts_criarH3 = function (nome, classes) {
    var _a;
    var h3 = document.createElement('h3');
    h3.textContent = nome;
    if (Array.isArray(classes)) {
        (_a = h3.classList).add.apply(_a, classes);
    }
    else if (classes) {
        h3.classList.add(classes);
    }
    return h3;
};
// Objeto com a estrutura de dados
var ts_estrutura = {
    projeto: {
        nome: 'LinkaApp',
        arquivos: ['dados.json', 'LinkaRemember.html'],
        pastas_filhas: {
            pastaFilha1: { nome: 'Controles', arquivos: ['controladores.js'] },
            pastaFilha2: { nome: 'Estilos', arquivos: ['estilizacao.css'] },
            pastaFilha3: { nome: 'Icones', arquivos: ['html-5.png', 'css-3.png', 'js.png', 'json.png'] }
        }
    }
};
var ts_criarEstruturaHTML = function (pastaProjeto) {
    var ulPai = criarUl();
    ulPai.id = 'pastaProjeto';
    var liPai = criarLi();
    var h2PastaPai = criarH2(pastaProjeto.projeto.nome, ['pasta_pai', 'badge']);
    liPai.appendChild(h2PastaPai);
    var ulFilha = criarUl(['bg-warning']);
    var indicePasta = 1;
    for (var pasta in pastaProjeto.projeto.pastas_filhas) {
        if (pastaProjeto.projeto.pastas_filhas.hasOwnProperty(pasta)) {
            var pastaFilha = pastaProjeto.projeto.pastas_filhas[pasta];
            var classePastaLi = "pastaPai_filha".concat(indicePasta);
            var liFilha = criarLi([classePastaLi]);
            var h3PastaFilho = criarH3(pastaFilha.nome, [classePastaLi, 'h3', 'badge']);
            var ulVovo = criarUl();
            var indiceArquivo = 1;
            for (var _i = 0, _a = pastaFilha.arquivos; _i < _a.length; _i++) {
                var arquivo = _a[_i];
                var classeArquivo = "arquivo".concat(indiceArquivo, "_pasta").concat(indicePasta);
                var kbdArquivoFilho = criarKbd(arquivo);
                var linhaArquivo = criarLi([classeArquivo]);
                linhaArquivo.appendChild(kbdArquivoFilho);
                ulVovo.appendChild(linhaArquivo);
                indiceArquivo++;
            }
            liFilha.appendChild(h3PastaFilho);
            liFilha.appendChild(ulVovo);
            ulFilha.appendChild(liFilha);
            indicePasta++;
        }
    }
    var arquivos = pastaProjeto.projeto.arquivos;
    for (var indicePai = 0; indicePai < arquivos.length; indicePai++) {
        var classeLi = "arquivo".concat(indicePai + 1, "_pastaPai");
        var liArquivoPai = criarLi(['list-group-item', classeLi]);
        var nomeArquivo = arquivos[indicePai];
        var kbdArquivoPai = criarKbd(nomeArquivo);
        liArquivoPai.appendChild(kbdArquivoPai);
        ulFilha.appendChild(liArquivoPai);
    }
    liPai.appendChild(ulFilha);
    ulPai.appendChild(liPai);
    return ulPai;
};
// Atualizar lista de arquivos
var ts_buttonAtualizarEstrutura = document.querySelector('button#atualizarEstrutura');
buttonAtualizarEstrutura === null || buttonAtualizarEstrutura === void 0 ? void 0 : buttonAtualizarEstrutura.addEventListener('click', function () {
    var _a, _b;
    var elementoEstrutura = criarEstruturaHTML(estrutura);
    var listaFake = elementoEstrutura.cloneNode(true);
    console.log(document.querySelector('ul#pastaProjeto'));
    (_a = document.querySelector('ul#pastaProjeto')) === null || _a === void 0 ? void 0 : _a.appendChild(listaFake);
    (_b = document.querySelector('div#status')) === null || _b === void 0 ? void 0 : _b.appendChild(listaFake);
});
