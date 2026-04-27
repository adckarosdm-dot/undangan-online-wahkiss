function bukaUndangan() {
  document.querySelector(".hero").style.display = "none";
  document.querySelector("#isi").classList.remove("hidden");
}
var countDownDate = new Date("June 22, 2026 10:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML =
    days + " hari lagi";

}, 1000);
