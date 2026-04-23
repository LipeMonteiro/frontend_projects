# 🎡 Image Carousel (Slider)

Um carrossel de imagens interativo e automatizado, desenvolvido para destacar banners ou conteúdos visuais. O projeto conta com navegação por setas, indicadores de posição (radio buttons) e transições suaves de movimento.

---

## 🚀 Demonstração

O projeto oferece uma experiência de visualização dinâmica com as seguintes funcionalidades:
* **Reprodução Automática:** O carrossel alterna as imagens a cada 3 segundos.
* **Pausa Inteligente:** O temporizador é interrompido quando o usuário passa o mouse sobre a imagem e retoma ao retirar.
* **Controle de Navegação:** Botões laterais (próximo/anterior) e controles inferiores sincronizados com o estado da imagem.
* **Transições Suaves:** Movimentação fluida entre os slides através de propriedades de transformação do CSS.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura do container e controles de navegação.
* **CSS3:** * `Flexbox` para alinhamento horizontal dos slides.
    * `Transition` e `Transform` para o efeito de deslize.
    * `Position: absolute` para a interface de controles sobreposta.
* **JavaScript (Vanilla):**
    * `setInterval` e `clearInterval` para o ciclo automático.
    * Lógica de operadores aritméticos para navegação infinita (loop).
    * Manipulação de eventos de mouse e cliques.
* **Font Awesome:** Ícones vetoriais para os botões de seta.

---

## 📂 Como visualizar o projeto

Para rodar este componente localmente:

1.  Certifique-se de ter as imagens necessárias na pasta `./img/` (banner-1.jpg até banner-5.jpg).
2.  Abra o arquivo `index.html` em seu navegador.
3.  **Dica:** Utilize a extensão **Live Server** do VS Code para a melhor experiência de desenvolvimento.

---

## 📈 Metas de Aprendizado

Este projeto foi fundamental para praticar conceitos intermediários de Frontend:
* **Lógica de Loop Infinito:** Uso do operador de resto (`%`) para fazer o índice voltar ao zero ao chegar na última imagem.
* **Gerenciamento de Estado:** Sincronização entre os botões de rádio e a posição atual do slider.
* **Event Listeners:** Escuta de eventos complexos como `mouseenter` e `mouseleave`.

---

## 📫 Contato

* **LinkedIn:** [Filipe Monteiro](https://www.linkedin.com/in/filipe-monteiro-208b8b326/)
* **E-mail:** contato@filipemonteiro.com

---
⭐️ **Gostou do que viu? Sinta-se à vontade para deixar uma star!**
