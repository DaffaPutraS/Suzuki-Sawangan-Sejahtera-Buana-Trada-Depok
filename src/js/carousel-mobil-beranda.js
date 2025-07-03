const totalSlides = 4;
  let currentSlide = 0;
  let autoSlideInterval;
  let startX = 0;
  let endX = 0;

  function showSlide(idx) {
    currentSlide = idx;
    const track = document.getElementById('carousel-track');
    track.style.transform = `translateX(-${idx * 100}%)`;
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.getElementById('dot-' + i);
      dot.classList.remove('bg-[#83A5EA]', 'w-16');
      dot.classList.add('bg-[#E0EBFF]', 'w-8');
    }
    const activeDot = document.getElementById('dot-' + idx);
    activeDot.classList.remove('bg-[#E0EBFF]', 'w-8');
    activeDot.classList.add('bg-[#83A5EA]', 'w-16');
    resetAutoSlide();
  }

  function nextSlide() {
    let next = (currentSlide + 1) % totalSlides;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prev);
  }

  // Auto slide every 3 seconds
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Touch gesture support
  function startTouch(e) {
    startX = e.touches[0].clientX;
  }
  function moveTouch(e) {
    endX = e.touches[0].clientX;
  }
  function endTouch() {
    if (startX && endX) {
      if (startX - endX > 50) {
        nextSlide();
      } else if (endX - startX > 50) {
        prevSlide();
      }
    }
    startX = 0;
    endX = 0;
  }

  showSlide(0);
  startAutoSlide();