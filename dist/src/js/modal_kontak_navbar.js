const waModal = document.getElementById('wa-modal');
const waModalContent = document.getElementById('wa-modal-content');

// Semua tombol/modal trigger WA harus diberi class 'kontak-modal'
document.querySelectorAll('.kontak-modal').forEach(el => {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    waModal.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
    setTimeout(() => {
      waModalContent.classList.remove('translate-y-full');
    }, 10);
  });
});

function closeWAModal() {
  waModalContent.classList.add('translate-y-full');
  setTimeout(() => {
    waModal.classList.add('invisible', 'opacity-0', 'pointer-events-none');
  }, 300);
}

// Tutup modal jika klik di luar konten
waModal.addEventListener('click', function(e) {
  if (e.target === waModal) closeWAModal();
});