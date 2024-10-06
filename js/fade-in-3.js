function toggleTexto(id) {
    var texto = document.getElementById(id);
    if (texto.classList.contains("oculto")) {
        fetch(id + '.html')
            .then(response => response.text())
            .then(data => {
                texto.innerHTML = data;
                texto.classList.remove("oculto");
                texto.classList.add("visible");
                document.addEventListener('click', handleClickOutside);
            });
    } else {
        texto.classList.remove("visible");
        texto.classList.add("oculto");
        document.removeEventListener('click', handleClickOutside);
    }
}

function handleClickOutside(event) {
    var textos = document.querySelectorAll('.texto');
    textos.forEach(function(texto) {
        if (!texto.contains(event.target) && !event.target.matches('button')) {
            texto.classList.remove("visible");
            texto.classList.add("oculto");
        }
    });
    document.removeEventListener('click', handleClickOutside);
}
