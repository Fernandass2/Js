/**
 * carrossel de imagen
 * @author Fernanda Batista
 * 
**/

let indice = 0 // 0,1 0,2 (3imagens)

// capturar  a tags html indetificada (id)
const imgs = document.getElementById('imagens')
// capturar dois elementos html
const imagem = document.querySelectorAll('#imagens img')


function carrossel() {
    indice++ //soma 1 a variavel indice
    console.log(indice)
    if (indice >= imagem.length) {
        indice = 0
        //

    }
    // a linha abaixo modfica o estilo CSS de imgs
    //style modifica o CSS
    //transform(deslocamento do eixo x)
    //indice 0: posição inicial | 1: deslocar 512px  esq| 2:
    //deslocar 1024px esq
    //OBS: 512px (sincronizar com o tamanho )
    imgs.style.transform = `translatex(${-indice * 512}px)`
}
// a linha abaixo execulta a função carrossel a cada 2s
setInterval(carrossel, 2000)