const inHours = document.getElementById('inHours');
const inMinutes = document.getElementById('inMinutes');
const inSeconds = document.getElementById('inSeconds');

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hours = dateToday.toLocaleTimeString('pt-BR', {hour: '2-digit'});
  let minutes = dateToday.toLocaleTimeString('pt-BR', {minute: '2-digit'});
  let seconds = String(dateToday.getSeconds()).padStart('2', '0');

  inHours.textContent = hours;
  inMinutes.textContent = minutes;
  inSeconds.textContent = seconds
})