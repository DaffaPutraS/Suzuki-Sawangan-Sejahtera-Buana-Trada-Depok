// Kode untuk filter kategori mobil dengan transisi fade
document.querySelectorAll('.kategori-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Ganti style active
    document.querySelectorAll('.kategori-btn').forEach(b => {
      b.classList.remove('text-[#003399]', 'border-[#003399]');
      b.classList.add('text-gray-500', 'border-transparent');
    });
    btn.classList.add('text-[#003399]', 'border-[#003399]');
    btn.classList.remove('text-gray-500', 'border-transparent');

    // Filter card dengan animasi fade
    const kategori = btn.getAttribute('data-kategori');
    document.querySelectorAll('.mobil-card').forEach(card => {
      // Selalu mulai fade-out
      card.classList.remove('fade-in');
      card.classList.add('fade-out');
    });

    setTimeout(() => {
      document.querySelectorAll('.mobil-card').forEach(card => {
        if (kategori === 'semua' || card.getAttribute('data-kategori').includes(kategori)) {
          card.style.display = '';
          // Setelah display diubah, trigger fade-in
          setTimeout(() => {
            card.classList.remove('fade-out');
            card.classList.add('fade-in');
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    }, 200); // Waktu sama dengan transition di CSS
  });
});

// Inisialisasi semua card visible saat load
document.querySelectorAll('.mobil-card').forEach(card => {
  card.classList.add('fade-in');
});