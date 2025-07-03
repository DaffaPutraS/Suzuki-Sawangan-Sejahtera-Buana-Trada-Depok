// filepath: d:\Freelance\Website\suzuki-sawangan\dist\index.html
let card2Index = 0;
const card2Images = document.querySelectorAll('#card2-carousel .card2-img');
function showCard2Image(idx) {
  card2Images.forEach((img, i) => {
    img.style.opacity = (i === idx) ? '1' : '0';
    img.style.zIndex = (i === idx) ? '1' : '0';
  });
}
function nextCard2Image() {
  card2Index = (card2Index + 1) % card2Images.length;
  showCard2Image(card2Index);
}
showCard2Image(card2Index);
setInterval(nextCard2Image, 2500);