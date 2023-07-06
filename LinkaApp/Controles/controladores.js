// Projeto Leitor de Arquivos e Pastas

const estrutura = {
    'pastaPrincipal': {
        'nome': 'LinkaApp',
        'arquivos': ['dados.json', 'LinkaRemember.html'],
        'pastas_filhas': {
            'pastaFilha1': { 'nome': 'Controles', 'arquivos': ['controladores.js'] },
            'pastaFilha2': { 'nome': 'Estilos', 'arquivos': ['estilizacao.css'] },
            'pastaFilha3': { 'nome': 'Icones', 'arquivos': ['html-5.png', 'css-3.png', 'js.png', 'json.png'] }
        }
    }
}

const criarElementoUl = classes => {
    const ul = document.createElement('ul')
    ul.classList.add(...classes)
    return ul
}

const criarElementoLi = classes => {
    const li = document.createElement('li')
    li.classList.add(...classes)
    return li
}

const criarElementoKbd = texto => {
    const kbd = document.createElement('kbd')
    kbd.textContent = texto
    return kbd
}

const criarElementoH2 = (nome, classes) => {
    const h2 = document.createElement('h2')
    h2.textContent = nome
    h2.classList.add(...classes)
    return h2
}

const criarEstruturaHTML = () => {
    const ulPai = criarElementoUl(['list-group'])
    ulPai.id = 'pastaProjeto'

    const liPai = criarElementoLi(['list-group-item'])

    const h2PastaPai = criarElementoH2(estrutura.pastaPrincipal.nome, ['pasta_pai', 'badge'])

    const ulFilha = criarElementoUl(['list-group', 'bg-warning'])

    for (let pastaFilha = ''; pastaFilha < estrutura.pastaPrincipal.pastas_filhas.length; pastaFilha++) {
        const ulPastaFilha = criarElementoUl(['list-group'])
        const liFilha = criarElementoLi(['list-group-item'])

        const h3PastaFilha = document.createElement('h3')
        h3PastaFilha.classList.add('pasta_filha1', 'badge')
        h3PastaFilha.textContent = pastaFilha.nome

        pastaFilha.arquivos.forEach((arquivo) => {
            const liArquivo = criarElementoLi(['list-group-item', 'arquivo1_pasta1'])
            const kbdArquivo = criarElementoKbd(arquivo)
            liArquivo.appendChild(kbdArquivo)
            ulPastaFilha.appendChild(liArquivo)
        })

        liFilha.appendChild(h3PastaFilha)
        liFilha.appendChild(ulPastaFilha)
        ulFilha.appendChild(liFilha)
    }

    estrutura.pastaPrincipal.arquivos.forEach((arquivo) => {
        const liArquivoPai = criarElementoLi(['list-group-item', 'arquivo1_pastaPai'])
        const kbdArquivoPai = criarElementoKbd(arquivo)
        liArquivoPai.appendChild(kbdArquivoPai)
        ulFilha.appendChild(liArquivoPai)
    })

    liPai.appendChild(h2PastaPai)
    liPai.appendChild(ulFilha)
    ulPai.appendChild(liPai)

    return ulPai
}

// Atualizar lista de arquivos
//const divFuncaoCRUD = document.getElementById('pastaProjeto')
//divFuncaoCRUD.html(elementoEstrutura)

const elementoEstrutura = criarEstruturaHTML(estrutura)
comparar = '<ul class="list-group" id="pastaProjeto"><li class="list-group-item"><h2 class="pasta_pai badge">LinkaApp</h2><ul class="list-group bg-warning"><li class="list-group-item"><h3 class="pasta_filha1 badge">Controles</h3><ul class="list-group"><li class="list-group-item arquivo1_pasta1"><kbd>controladores.js</kbd></li></ul></li><li class="list-group-item"><div class="pasta_filha2 badge">Estilos</div><ul class="list-group"><li class="list-group-item arquivo2_pasta2"><kbd>estilizacao.css</kbd></li></ul></li><li class="list-group-item"><div class="pasta_filha3 badge">Icones</div><ul class="list-group"><li class="list-group-item arquivo1_pasta3"><kbd>html-5.png</kbd></li><li class="list-group-item arquivo2_pasta3"><kbd>css-3.png</kbd></li><li class="list-group-item arquivo3_pasta3"><kbd>js.png</kbd></li><li class="list-group-item arquivo4_pasta3"><kbd>json.png</kbd></li></ul></li><li class="list-group-item arquivo1_pastaPai"><kbd>dados.json</kbd></li><li class="list-group-item arquivo2_pastaPai"><kbd>LinkaRemember.html</kbd></li></ul></li></ul>'
teste = elementoEstrutura.outerHTML

if (teste == comparar) {
    console.log(Igualzinho)
} else {
    console.log('ainda nao')
    console.log(teste)
    console.log(comparar)
}

/*
$(document).ready(() => {
    //$('#funcaoCRUD').html(JSON(estrutura))

    $('button#atualizarEstrutura').click((estrutura) => {})
})
*/