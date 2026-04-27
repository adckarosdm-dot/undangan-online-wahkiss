function openInvitation() {
  document.querySelector(".cover").style.display = "none";
  document.querySelector("#invitation").classList.remove("hidden");

  const music = document.getElementById("music");
  music.play();
}

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
  document.getElementById("guestName").innerText = guest;
}

const countDownDate = new Date("June 22, 2026 10:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML = `
    <div class="time-box"><strong>${days}</strong>Hari</div>
    <div class="time-box"><strong>${hours}</strong>Jam</div>
    <div class="time-box"><strong>${minutes}</strong>Menit</div>
    <div class="time-box"><strong>${seconds}</strong>Detik</div>
  `;
}, 1000);
