// Projeto Leitor de Arquivos e Pastas

$(document).ready(() => {

    const criarUl = (classes) => {
        const ul = document.createElement('ul')
        ul.classList.add('list-group')
        if (Array.isArray(classes)) {
            ul.classList.add(...classes);
        }
        return ul
    }

    const criarLi = (classes) => {
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        if (Array.isArray(classes)) {
            li.classList.add(...classes);
        }
        return li
    }

    const criarKbd = (texto) => {
        const kbd = document.createElement('kbd')
        kbd.textContent = texto
        return kbd
    }

    const criarH2 = (nome, classes) => {
        const h2 = document.createElement('h2')
        h2.textContent = nome
        if (Array.isArray(classes)) {
            h2.classList.add(...classes);
        }
        return h2
    }

    const criarH3 = (nome, classes) => {
        const h3 = document.createElement('h3')
        h3.textContent = nome
        if (Array.isArray(classes)) {
            h3.classList.add(...classes);
        }
        return h3
    }

    const estrutura = {
        'projeto': {
            'nome': 'LinkaApp',
            'arquivos': ['dados.json', 'LinkaRemember.html'],
            'pastas_filhas': {
                'pastaFilha1': { 'nome': 'Controles', 'arquivos': ['controladores.js'] },
                'pastaFilha2': { 'nome': 'Estilos', 'arquivos': ['estilizacao.css'] },
                'pastaFilha3': { 'nome': 'Icones', 'arquivos': ['html-5.png', 'css-3.png', 'js.png', 'json.png'] }
            }
        }
    }

    const criarEstruturaHTML = (pastaProjeto) => {
        const ulPai = criarUl()
        ulPai.id = 'pastaProjeto'

        const liPai = criarLi()
        const h2PastaPai = criarH2(pastaProjeto.projeto.nome, ['pasta_pai', 'badge'])
        liPai.appendChild(h2PastaPai)

        const ulFilha = criarUl(['bg-warning'])
        let indicePasta = 1;
        for (let pasta in pastaProjeto.projeto.pastas_filhas) {
            const pastaFilha = pastaProjeto.projeto.pastas_filhas[pasta];

            let classePastaLi = `pastaPai_filha${indicePasta}`
            const liFilha = criarLi([classePastaLi])
            const h3PastaFilho = criarH3(pastaFilha.nome, [classePastaLi, 'h3', 'badge'])
            const ulVovo = criarUl()

            let indiceArquivo = 1;
            for (let arquivo of pastaFilha.arquivos) {
                let classeArquivo = `arquivo${indiceArquivo}_pasta${indicePasta}`
                const kbdArquivoFilho = criarKbd(arquivo)
                const linhaArquivo = criarLi([classeArquivo])
                linhaArquivo.appendChild(kbdArquivoFilho)
                ulVovo.appendChild(linhaArquivo)
                indiceArquivo++;
            }
            liFilha.appendChild(h3PastaFilho)
            liFilha.appendChild(ulVovo)
            ulFilha.appendChild(liFilha)
            indicePasta++;
        }

        const arquivos = pastaProjeto.projeto.arquivos
        for (let indicePai = 0; indicePai < arquivos.length; indicePai++) {
            let classeLi = `arquivo${indicePai + 1}_pastaPai`
            const liArquivoPai = criarLi(['list-group-item', classeLi])

            let nomeArquivo = arquivos[indicePai]
            const kbdArquivoPai = criarKbd(nomeArquivo)

            liArquivoPai.appendChild(kbdArquivoPai)
            ulFilha.appendChild(liArquivoPai)
        }

        liPai.appendChild(ulFilha)
        ulPai.appendChild(liPai)
        return ulPai
    }

    // Atualizar lista de arquivos
    $('button#atualizarEstrutura').click(() => {
        const elementoEstrutura = criarEstruturaHTML(estrutura)
        const listaFake = elementoEstrutura //console.log('listaFake:', listaFake)
        console.log($('ul#pastaProjeto'))
        $('ul#pastaProjeto').html(listaFake)
        $('div#status').html(listaFake)
    })
})
