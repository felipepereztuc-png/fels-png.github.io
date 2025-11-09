const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let index = 0;

function showNext() {
  index++;
  if (index >= images.length) index = 0;
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

function showPrev() {
  index--;
  if (index < 0) index = images.length - 1;
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', showNext);
document.querySelector('.prev').addEventListener('click', showPrev);

// Cambio automático cada 4 segundos
setInterval(showNext, 4000);

