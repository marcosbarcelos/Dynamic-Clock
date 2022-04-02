const inHours = document.getElementById('inHours');
const inMinutes = document.getElementById('inMinutes');
const inSeconds = document.getElementById('inSeconds');

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hours = String(dateToday.getHours()).padStart('2', '0');;
  let minutes = String(dateToday.getMinutes()).padStart('2', '0');;
  let seconds = String(dateToday.getSeconds()).padStart('2', '0');

  inHours.textContent = hours;
  inMinutes.textContent = minutes;
  inSeconds.textContent = seconds
})