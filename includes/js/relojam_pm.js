// JavaScript Document
function actualizarReloj() {
  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();
  const ampm = horas >= 12 ? 'pm' : 'am';
  const hora12 = horas % 12 || 12;
  document.getElementById('reloj').textContent = `${hora12}:${minutos}:${segundos} ${ampm}`;
}
setInterval(actualizarReloj, 1000); // Actualiza cada segundo
actualizarReloj();
