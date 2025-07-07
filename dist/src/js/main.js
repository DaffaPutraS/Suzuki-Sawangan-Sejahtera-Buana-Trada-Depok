// =====================
// Carousel Otomatis Atas
// =====================
const totalSlides = 4;
let currentSlide = 0;
let autoSlideInterval;
let startX = 0;
let endX = 0;

function showSlide(idx) {
  currentSlide = idx;
  const track = document.getElementById('carousel-track');
  if (track) {
    track.style.transform = `translateX(-${idx * 100}%)`;
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.getElementById('dot-' + i);
      if (dot) {
        dot.classList.remove('bg-blue-600');
        dot.classList.add('bg-blue-200');
      }
    }
    const activeDot = document.getElementById('dot-' + idx);
    if (activeDot) {
      activeDot.classList.remove('bg-blue-200');
      activeDot.classList.add('bg-blue-600');
    }
  }
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

// =====================
// Card Slider Manual
// =====================
function initCardSlider() {
  const cardSlider = document.getElementById('card-slider');
  const prevBtn = document.getElementById('card-prev');
  const nextBtn = document.getElementById('card-next');
  if (!cardSlider || !prevBtn || !nextBtn) return;

  let cardIndex = 0;

  function getVisibleCards() {
    const w = window.innerWidth;
    if (w >= 1024) return 4;
    if (w >= 768) return 3;
    if (w >= 640) return 2;
    return 1;
  }

  function updateCardSlider() {
    const cardCount = cardSlider.children.length;
    const visibleCards = getVisibleCards();
    const cardWidth = cardSlider.children[0].offsetWidth + 32; // 32 = gap-8
    cardSlider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
    prevBtn.style.display = cardIndex === 0 ? 'none' : 'flex';
    nextBtn.style.display = cardIndex >= cardCount - visibleCards ? 'none' : 'flex';
  }

  prevBtn.addEventListener('click', () => {
    if (cardIndex > 0) {
      cardIndex--;
      updateCardSlider();
    }
  });
  nextBtn.addEventListener('click', () => {
    const cardCount = cardSlider.children.length;
    const visibleCards = getVisibleCards();
    if (cardIndex < cardCount - visibleCards) {
      cardIndex++;
      updateCardSlider();
    }
  });

  // Responsive: update visibleCards saat resize
  window.addEventListener('resize', () => {
    cardIndex = 0;
    updateCardSlider();
  });

  // Inisialisasi tombol
  updateCardSlider();
}

// =====================
// Inisialisasi Semua
// =====================
document.addEventListener('DOMContentLoaded', function() {
  // Carousel utama
  showSlide(0);
  startAutoSlide();

  // Card slider
  initCardSlider();

  // Touch event untuk carousel utama
  const track = document.getElementById('carousel-track');
  if (track) {
    track.ontouchstart = startTouch;
    track.ontouchmove = moveTouch;
    track.ontouchend = endTouch;
  }
});