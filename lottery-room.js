// the date that counting down
let countDownDate = new Date("Feb 28, 2025 21:00:00").getTime();

//update in any second;
let x = setInterval(function () {
  //Get today date and time
  let now = new Date().getTime();

  //find the distance between now and countdown time
  let distance = countDownDate - now;

  //time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Disply the result in the element for timeCountDown
  document.getElementById("countdown-timer").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;

  //if the countDown finished, write a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "Time for draw";
  }
}, 1000);

let wheel = document.querySelector(".wheel");
let inner = document.querySelector(".inner");
let spinBtn = document.querySelector(".spinBtn");

let value1 = Math.ceil(Math.random() * -3600);
let value2 = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function () {
  wheel.style.transform = "rotate(" + value1 + "deg)";
  inner.style.transform = "rotate(" + value2 + "deg)";
  value1 += Math.ceil(Math.random() * -3600);
  value2 += Math.ceil(Math.random() * 3600);
};
