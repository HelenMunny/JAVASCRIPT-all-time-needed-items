let video = document.querySelector(".video-container");
let switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener('click', function () {
 if (!switchBtn.classList.contains('slide')) {
  switchBtn.classList.add('slide');
  video.pause();
 } else {
  switchBtn.classList.remove('slide');
  video.play();
 }
});

// preloader load and hide
let preloader = document.querySelector(".preloader");
window.addEventListener('load', function () {
 preloader.classList.add('hide-preloader');
});