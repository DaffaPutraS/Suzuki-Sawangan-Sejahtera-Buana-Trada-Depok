// dragscroll: bikin slider bisa di-drag di desktop
const slider = document.querySelector('.mobil-slider');
let isDown = false;
let startX, scrollLeft;
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('cursor-grabbing');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('cursor-grabbing');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('cursor-grabbing');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});