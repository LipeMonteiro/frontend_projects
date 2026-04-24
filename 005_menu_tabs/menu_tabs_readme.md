# 📌 Menu Tabs com Underline Animado

------------------------------------------------------------------------

Esse projeto consiste em criar um menu que altera o conteúdo principal
através do clique nos links da barra de navegação.

<img src="./image.png" width="700px">

Projeto de um menu de navegação em formato **Tabs**, com:

-   Alteração dinâmica de conteúdo
-   Controle de estado ativo
-   Animação de underline deslizante
-   Implementação utilizando apenas **HTML, CSS e JavaScript puro
    (Vanilla JS)**

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

### 🔹 Estrutura HTML

A aplicação é dividida em três blocos principais:

-   `.container` → Wrapper principal da aplicação
-   `header` → Contém:
    -   Lista de links (`.link`)
    -   Elemento `.line`, responsável pelo underline animado
-   `.content` → Container dos conteúdos (`.content_item`) que são
    exibidos dinamicamente

Estrutura lógica:

    .container
     ├── header
     │    ├── .link
     │    ├── .link
     │    └── .line
     └── .content
          ├── .content_item
          ├── .content_item
          └── .content_item

------------------------------------------------------------------------

## ⚙️ Lógica JavaScript

A lógica é baseada em **manipulação de DOM** e **controle de classes
CSS**.

------------------------------------------------------------------------

### 1️⃣ Seleção dos links

Primeiro selecionamos todos os links do menu:

``` js
const links = document.querySelectorAll(".link");
```

Em seguida, percorremos a NodeList utilizando `forEach`, obtendo:

-   `element` → O elemento atual
-   `index` → A posição do elemento no array

``` js
links.forEach((element, index) => {

});
```

------------------------------------------------------------------------

### 2️⃣ Adicionando o evento de clique

Para cada link, adicionamos um `addEventListener("click")`:

``` js
links.forEach((element, index) => {
  element.addEventListener("click", () => {

  });
});
```

------------------------------------------------------------------------

### 3️⃣ Animação do underline

O underline (`.line`) deve:

-   Ajustar sua largura (`width`)
-   Ajustar sua posição horizontal (`left`)

Esses valores são obtidos a partir do link clicado:

-   `offsetWidth` → Largura do elemento
-   `offsetLeft` → Distância da esquerda

``` js
const line = document.querySelector(".line");

line.style.width = element.offsetWidth + "px";
line.style.left = element.offsetLeft + "px";
```

> Observação: como estamos dentro do `forEach`, usamos `element`, não
> `e.target`.

------------------------------------------------------------------------

### 4️⃣ Controle da classe `.active`

Antes de ativar o link clicado, removemos `.active` de todos:

``` js
links.forEach(link => {
  link.classList.remove("active");
});
```

Depois adicionamos ao elemento clicado:

``` js
element.classList.add("active");
```

Isso garante que apenas um link fique ativo por vez.

------------------------------------------------------------------------

### 5️⃣ Controle de exibição do conteúdo

Selecionamos todos os conteúdos:

``` js
const contents = document.querySelectorAll(".content_item");
```

Removemos a classe `.show` de todos:

``` js
contents.forEach(content => {
  content.classList.remove("show");
});
```

E então ativamos apenas o conteúdo correspondente ao índice do link
clicado:

``` js
contents[index].classList.add("show");
```

A correspondência funciona porque:

-   A ordem dos `.link`
-   É a mesma ordem dos `.content_item`

------------------------------------------------------------------------

## 🧠 Código Final Consolidado

``` js
const links = document.querySelectorAll(".link");
const contents = document.querySelectorAll(".content_item");
const line = document.querySelector(".line");

links.forEach((element, index) => {
  element.addEventListener("click", () => {

    // Atualiza underline
    line.style.width = element.offsetWidth + "px";
    line.style.left = element.offsetLeft + "px";

    // Remove active de todos
    links.forEach(link => link.classList.remove("active"));

    // Ativa link atual
    element.classList.add("active");

    // Esconde todos os conteúdos
    contents.forEach(content => content.classList.remove("show"));

    // Mostra conteúdo correspondente
    contents[index].classList.add("show");
  });
});
```

------------------------------------------------------------------------

## 🎯 Conceitos Trabalhados

-   `querySelectorAll`
-   `forEach`
-   `addEventListener`
-   Manipulação de classes com `classList`
-   Manipulação de estilo inline
-   Propriedades `offsetWidth` e `offsetLeft`
-   Sincronização entre elementos via `index`
