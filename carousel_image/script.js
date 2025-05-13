let indiceAtual = 0
const imagens = document.querySelectorAll('.carrossel .imagens .img')
let total = imagens.length
const container = document.querySelector('.carrossel .imagens')

console.log('Carrossel iniciado.')
console.log('Total de slides:', total)

setInterval(() => {
    console.log('=================================')
    console.log('Antes',indiceAtual)

    indiceAtual = (indiceAtual + 1) % total

    console.log('Depois:', indiceAtual)

    const deslocamento = -indiceAtual * 100
    container.style.transform = `translateX(${deslocamento}vw)`

    console.log(`Movendo o carrossel para: ${deslocamento}vw`)
}, 3000)