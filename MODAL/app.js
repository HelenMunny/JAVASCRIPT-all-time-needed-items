let modalOpenBtn = document.querySelector(".modal-btn");
let modalCloseBtn = document.querySelector(".modal-close-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let centerItem = document.querySelector('.center-item');

modalOpenBtn.addEventListener('click', function () {
 modalOverlay.classList.toggle('show');
 centerItem.style.visibility = 'hidden';

 modalCloseBtn.addEventListener('click', function () {
  modalOverlay.classList.remove('show');
  centerItem.style.visibility = 'visible';
 });
});
