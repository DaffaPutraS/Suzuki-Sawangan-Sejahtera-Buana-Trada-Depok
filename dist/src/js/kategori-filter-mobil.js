// Kode untuk filter kategori mobil
document.querySelectorAll('.kategori-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Ganti style active
    document.querySelectorAll('.kategori-btn').forEach(b => {
      b.classList.remove('text-[#003399]', 'border-[#003399]');
      b.classList.add('text-gray-500', 'border-transparent');
    });
    btn.classList.add('text-[#003399]', 'border-[#003399]');
    btn.classList.remove('text-gray-500', 'border-transparent');

    // Filter card
    const kategori = btn.getAttribute('data-kategori');
    document.querySelectorAll('.mobil-card').forEach(card => {
      if (kategori === 'semua' || card.getAttribute('data-kategori').includes(kategori)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});