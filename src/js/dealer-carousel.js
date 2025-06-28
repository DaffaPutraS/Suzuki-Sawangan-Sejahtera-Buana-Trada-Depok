document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('#dealer-carousel .carousel-img');
  const dots = document.querySelectorAll('.carousel-dot');
  let idx = 0;
  let interval = null;

  function show(i) {
    images.forEach((img, n) => img.style.opacity = n === i ? '1' : '0');
    dots.forEach((dot, n) => {
      dot.classList.toggle('bg-[#669cf6]', n === i); // warna aktif
      dot.classList.toggle('bg-[#bcd2f7]', n !== i); // warna non-aktif
    });
    idx = i;
  }

  function next() {
    show((idx + 1) % images.length);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      show(i);
      reset();
    });
  });

  function reset() {
    clearInterval(interval);
    interval = setInterval(next, 4000);
  }

  if (images.length > 0) {
    show(0);
    interval = setInterval(next, 4000);
  }
});