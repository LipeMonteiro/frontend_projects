# 📔Documentação técnica - Cronômetro

---

## 🔸Visão geral

Este código constrói um **cronômetro digital** com as seguintes funcionalidade:

- ▶ Iniciar o cronômetro
- ⏸ Parar o cronômetro
- ↩ resetar o cronômetro
- 🏴 Registrar uma marcação de tempo
- 👁 Controle de visibilidade dos botões de controle

O tempo é exibido no formado **HH:MM:SS** sendo atualizado a casa um segundo pelo `setInterval` .

---

## 🔸 Estrutura Geral do Funcionamento

1. Seleção de elementos do DOM
2. Criação de variáveis de controle de tempo
3. Função de atualização do tempo
4. Função de controle de visibilidade dos botões
5. Eventos dos botões (iniciar, pausar, marcar e zerar)

---

## 🔸 Seleção de Elementos e Variáveis de Controle

```jsx
let display =document.querySelector(".timer__display");
```

- Seleciona o elemento responsável por exibir o tempo do cronômetro.

```jsx
let interval =null;
```

- Controla o `setInterval`.
- Quando `null`, indica que o cronômetro não está em execução.

```jsx
let seconds =0;
let minutes =0;
let hours =0;
```

- Variáveis responsáveis por armazenar o tempo atual do cronômetro.

---

## 🔸 Seleção dos Botões

```jsx
let btnStart =document.getElementsByClassName("timer__button")[0];
let btnStop  =document.getElementsByClassName("timer__button")[1];
let btnClear =document.getElementsByClassName("timer__button")[2];
let btnMark  =document.getElementsByClassName("timer__button")[3];

```

- Os botões compartilham a mesma classe (`timer__button`).
- `getElementsByClassName` retorna uma **HTMLCollection** (semelhante a um array).
- Por isso, é necessário acessar cada botão pelo **índice**.

---

## 🔸 Função `updateTime()`

Responsável por **atualizar o tempo do cronômetro a cada segundo**.

### Funcionamento:

1. Incrementa os segundos
2. Converte segundos em minutos ao chegar em 60
3. Converte minutos em horas ao chegar em 60
4. Formata os valores para dois dígitos
5. Atualiza o display

```jsx
functionupdateTime() {
    seconds++;

if (seconds ===60) {
        seconds =0;
        minutes++;
    }

if (minutes ===60) {
        minutes =0;
        hours++;
    }

let formattedSeconds =String(seconds).padStart(2,'0');
let formattedMinutes =String(minutes).padStart(2,'0');
let formattedHours   =String(hours).padStart(2,'0');

    display.innerText =`${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
```

### 🔎 Destaque: `padStart(2, '0')`

- Garante que todos os números tenham **dois dígitos**
- Exemplo: `1 → 01`

---

## 🔸 Função `showButons(start, stop)`

Controla a **visibilidade dos botões** de iniciar e pausar.

```jsx
functionshowButons(start, stop) {
    btnStart.classList.toggle('timer__button--hide', start);
    btnStop.classList.toggle('timer__button--hide', stop);
}
```

- Usa `classList.toggle(classe, condição)`
- Se a condição for `true`, a classe é adicionada
- Se for `false`, a classe é removida

---

## 🔸 Evento: Iniciar Cronômetro

```jsx
btnStart.addEventListener('click',() => {
if (interval ==null) {
updateTime();
        interval =setInterval(updateTime,1000);
    }

showButons(true,false);
    btnClear.disabled =false;
    btnMark.disabled =false;
});
```

### O que acontece:

- Evita múltiplos `setInterval`
- Inicia o cronômetro
- Alterna os botões
- Ativa os botões de **marcação** e **reset**

---

## 🔸Evento: Pausar Cronômetro

```jsx
btnStop.addEventListener('click',() => {
clearInterval(interval);
    interval =null;
showButons(false,true);
});
```

- Para o cronômetro
- Libera o botão de iniciar novamente

---

## 🔸 Marcações de Tempo (Laps)

```jsx
let mark =document.querySelector(".timer__marks");
let markId =0;
```

- `mark` é o container das marcações
- `markId` controla o número da marcação

```jsx
btnMark.addEventListener('click',() => {
    markId++;

let formattedSeconds =String(seconds).padStart(2,'0');
let formattedMinutes =String(minutes).padStart(2,'0');
let formattedHours   =String(hours).padStart(2,'0');

    mark.style.display ='block';
    mark.innerHTML +=`<p>Bloco ${markId}:${formattedHours}:${formattedMinutes}:${formattedSeconds}</p>`;
});
```

- Cada clique gera um registro do tempo atual
- As marcações são acumuladas no HTML

---

## 🔸 Evento: Zerar Cronômetro

```jsx
btnClear.addEventListener('click',() => {
clearInterval(interval);
    interval =null;

    seconds =0;
    minutes =0;
    hours =0;

    display.innerText ="00:00:00";

    markId =0;
    mark.innerText ="";
    mark.style.display ='none';

showButons(false,true);
    btnClear.disabled =true;
    btnMark.disabled =true;
});

```

### Ações realizadas:

- Para o cronômetro
- Zera o tempo
- Limpa as marcações
- Restaura o estado inicial da interface

---

## ✅ Conclusão

Este código é um **excelente exemplo prático** de:

- Manipulação do DOM
- Controle de tempo com `setInterval`
- Boas práticas de estado (`interval = null`)
- Organização lógica de funções
- Interação entre JavaScript e CSS