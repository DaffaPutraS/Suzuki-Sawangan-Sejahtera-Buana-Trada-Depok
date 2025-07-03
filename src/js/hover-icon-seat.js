document.querySelectorAll('.group').forEach(function(cardGroup) {
  const seatImg = cardGroup.querySelector('.seat-img');
  if (!seatImg) return;
  const originalSrc = seatImg.getAttribute('src');
  const hoverSrc = seatImg.getAttribute('data-hover');
  cardGroup.addEventListener('mouseenter', () => {
    seatImg.src = hoverSrc;
  });
  cardGroup.addEventListener('mouseleave', () => {
    seatImg.src = originalSrc;
  });
});