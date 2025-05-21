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
    clearInterval(interval) //Para o intervalo atual
    interval = setInterval(nextImg, 3000)// Cria um novo intervalo, reiniciando o contador do zero
}

function nextImg() {
    indiceAtual = (++indiceAtual) % totalImg
    atualizarCarrossel()
    resetInterval()
    updateControls()
}

function backImg() {
    indiceAtual = (indiceAtual - 1 + totalImg) % totalImg
    atualizarCarrossel()
    resetInterval()
    updateControls()
}

// Pausar quando o mouse estiver sobre o carrossel
container.addEventListener('mouseenter', () => {clearInterval(interval)})

// Retomar quando o mouse sair do carrossel
container.addEventListener('mouseleave', () => {resetInterval()})

// Animação dos controles de navegação
let controls = document.querySelectorAll('.carrossel .ctrl')

function updateControls(){
   controls.forEach((ctrl, index) => {
    //Adiciona o atributo checked ao radio de acordo com o índice da imagem
    ctrl.checked = index === indiceAtual
    //Atualiza o carrossel de acordo com o click do radio correspondente
    ctrl.addEventListener('click', () => {
        indiceAtual = index
        atualizarCarrossel()
    })
   })
}

//Atualizar a página com a imagem atual já indicada no radio
updateControls(indiceAtual)