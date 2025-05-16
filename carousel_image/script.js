const container = document.querySelector('.carrossel .imagens')
const img = document.querySelectorAll('.carrossel .imagens .img')
const totalImg = img.length
let indiceAtual = 0

let interval = setInterval(nextImg, 3000)

// Função responsável por efetuar o deslocamento do container
function atualizarCarrossel() {
    const deslocamento = -indiceAtual * 100
    container.style.transform = `translateX(${deslocamento}vw)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(nextImg, 3000)
}

function nextImg() {
    indiceAtual = (indiceAtual + 1) % totalImg
    atualizarCarrossel()
    resetInterval()
}

function backImg() {
    indiceAtual = (indiceAtual - 1 + totalImg) % totalImg
    atualizarCarrossel()
    resetInterval()
}

// Pausar quando o mouse estiver sobre o carrossel
container.addEventListener('mouseenter', () => {
    clearInterval(interval)
})

// Retomar quando o mouse sair do carrossel
container.addEventListener('mouseleave', () => {
    resetInterval()
})