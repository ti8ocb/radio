function toggleTexto() {
  var texto = document.getElementById("texto");
  if (texto.classList.contains("oculto")) {
    texto.classList.remove("oculto");
    texto.classList.add("visible");
    document.addEventListener('click', handleClickOutside);
  } else {
    texto.classList.remove("visible");
    texto.classList.add("oculto");
    document.removeEventListener('click', handleClickOutside);
  }
}

function handleClickOutside(event) {
  var texto = document.getElementById("texto");
  if (!texto.contains(event.target) && !event.target.matches('button')) {
    texto.classList.remove("visible");
    texto.classList.add("oculto");
    document.removeEventListener('click', handleClickOutside);
  }
}
