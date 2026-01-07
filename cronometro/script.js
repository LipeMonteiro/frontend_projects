//========================== Selecionandos elementos e criando variáeis de controle ==================================

let display = document.querySelector(".timer__display"); //Selecionando o elemento h1 onde ficam os números do cronômetro.
let interval = null; //Variável para controlar do setInterval, o null indica que nenhum intervalo esá sendo executado.

let seconds = 0; //Variável p/ controle dos segundos.
let minutes = 0; //Variável p/ controle dos minutos.
let hours = 0;

/*==== Selecionando os botões de iniciar, pausar e resetar ====*/

/*Os botões usam a classe "btn" e ao selecionar os elementos que utilizam essa classe 
o JS retorna  um array, então é necessário passar o index do elemento que deseja obter.*/
let btnStart = document.getElementsByClassName("timer__button")[0];
let btnStop = document.getElementsByClassName("timer__button")[1];
let btnClear = document.getElementsByClassName("timer__button")[2];
let btnMark = document.getElementsByClassName("timer__button")[3];

/*========================================================================================================*/

/*Funções responsávies pelo funcionamento do cronômetro*/

// Função responsável pela atualização do cronômetro, executada a cada um segundo pelo setInterval() mais abaixo na função start.
function updateTime() {
    seconds++; /*Adciona +1 aos segundos, ou seja, sempre que a função roda o tempo avança um segundo. */

    if (seconds === 60) { //Se o cronômetro chegou em 60 segundos...
        seconds = 0; //Zera os segundos e...
        minutes++;//Os minutos aumentam +1.
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    //Formatando os números.                                        
    let formattedSeconds = String(seconds).padStart(2, '0');// - String(minutes) e String(seconds) Converte números para texto.
    let formattedMinutes = String(minutes).padStart(2, '0');// - .padStart(2, '0') é um método que completa o começo de uma String até atingir um tamanho específico. 
    let formattedHours = String(hours).padStart(2, '0');// - .padStart(2, '0') é um método que completa o começo de uma String até atingir um tamanho específico. 
    // - Ou seja, nesse caso se o número for "1", o padStart(2, '0') vai completar com zero no início até ter dois dígitos e ficar "01".


    display.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; // - Monta o texto final do cronômetro e coloca no h1.
}

//Altera a visibilidade dos botões
function showButons(start, stop) { //A função recebe três parâmetros e esses parâmetros representam "true" e "false".
    btnStart.classList.toggle('timer__button--hide', start); //O "classList.toogle()" adiciona ou remove a classe show (1º parâmetro).
    btnStop.classList.toggle('timer__button--hide', stop); //No segundo parâmetro será passado "true" ou "false" e o toggle irá saber se é para adicionar ou remover a classe "show."
};

//Função que inicia o cronômetro
btnStart.addEventListener('click', () => {

    if (interval == null) {
        updateTime();
        interval = setInterval(updateTime, 1000);
    }
    showButons(true, false);
    btnClear.disabled = false;
    btnMark.disabled = false;

})
//Função que para o cronômetro
btnStop.addEventListener('click', () => {

    clearInterval(interval) //Para o intervalo de execução e ele não executa mais a função updateTime
    interval = null; //Marca que não tem mais intervalo ativo, para que o start possa entender que o interval não está em execução.
    showButons(false, true);

});

// Incluindo marcação
let mark = document.querySelector(".timer__marks")//Selecionando a div onde ficam o registro das marcações.
let markId = 0;

btnMark.addEventListener('click', () => {
    markId++
    //Formatando os números.                                        
    let formattedSeconds = String(seconds).padStart(2, '0');// - String(minutes) e String(seconds) Converte números para texto.
    let formattedMinutes = String(minutes).padStart(2, '0');// - .padStart(2, '0') é um método que completa o começo de uma String até atingir um tamanho específico. 
    let formattedHours = String(hours).padStart(2, '0');// - .padStart(2, '0') é um método que completa o começo de uma String até atingir um tamanho específico. 
    // - Ou seja, nesse caso se o número for "1", o padStart(2, '0') vai completar com zero no início até ter dois dígitos e ficar "01".

    mark.style.display = 'block';
    mark.innerHTML += `<p>Bloco${markId}: ${formattedHours}:${formattedMinutes}:${formattedSeconds}</p>`; // - Monta o texto final do cronômetro e coloca no h1.

});

//Zerar cronômetro
btnClear.addEventListener('click', () => {

    clearInterval(interval);
    interval = null;

    seconds = 0; //Zea os segundos
    minutes = 0; //Zera os minutos
    hours = 0; // Zera as horas    
    display.innerText = "00:00:00"; //Atualiza o display com o cronômetro zerado.
    markId = 0;
    mark.innerText = "";
    mark.style.display = 'none';

    showButons(false, true);
    btnClear.disabled = true;
    btnMark.disabled = true;
});

// Animação de alternância entre as telas




