'use strict';
// ----Slider-------
const prev = document.querySelector('#btn-prev');
const next = document.querySelector('#btn-next');

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;
const update = (n) => {
  for (let slide of slides) {
    slide.classList.remove('current-slide');
  }
  for (let dot of dots) {
    dot.classList.remove('current-dot');
  }
  slides[n].classList.add('current-slide');
  dots[n].classList.add('current-dot');
};
prev.addEventListener('click', (e) => {
  if (index > 0) {
    index--;
    update(index);
  } else if (index === 0) {
    index = slides.length - 1;
    update(index);
  }

  return index;
});
next.addEventListener('click', () => {
  index++;
  if (index < slides.length) {
    update(index);
  } else if (index === slides.length) {
    index = 0;
    update(index);
  }
  return index;
});
