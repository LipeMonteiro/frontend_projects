let links = document.querySelectorAll(".link");
let contents = document.querySelectorAll(".content_item")

links.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        
        //Animação do underline
        let line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        //Remove a classe active de todos os links
        links.forEach(link => {link.classList.remove("active");});

        //Adiciona a classe active ao clicar no link
        element.classList.add("active");

        //Varre o array com os contents e remove classe show
        contents.forEach(content => {content.classList.remove("show")});

        //Adiciona a classe show ao content expecífico utilizando o index do link clicado
        contents[index].classList.add("show");
    })
});

