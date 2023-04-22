const navLinks = document.querySelector(".nav-link");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("right-[0]");
}

let videoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
  myVideo.pause();
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}
