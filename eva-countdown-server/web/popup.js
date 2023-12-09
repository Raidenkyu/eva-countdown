const MOVIE_URL = "https://eva-countdown-server.herokuapp.com/";
let countDownDate;

let daysElem = document.querySelector("#days");
let hoursElem = document.querySelector("#hours");
let minutesElem = document.querySelector("#minutes");
let secondsElem = document.querySelector("#seconds");

function update() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  daysElem.innerHTML = days.toString().padStart(2, '0');
  hoursElem.innerHTML = hours.toString().padStart(2, '0');
  minutesElem.innerHTML = minutes.toString().padStart(2, '0');
  secondsElem.innerHTML = seconds.toString().padStart(2, '0');
}


fetch(MOVIE_URL).then((response) => {
  return response.json();
}).then((data) => {
  countDownDate = new Date(`${data.date} 00:00:00`).getTime();

  // Update on startup
  update();

  // Update the count down every 1 second
  setInterval(update, 1000);
});




