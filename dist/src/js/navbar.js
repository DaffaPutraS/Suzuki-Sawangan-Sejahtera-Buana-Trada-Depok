// Hamburger open/close logic
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navClose = document.getElementById('nav-close');

  navToggle.addEventListener('click', function () {
    navMenu.classList.remove('opacity-0', 'invisible');
    navMenu.classList.add('opacity-100', 'visible');
  });

  navClose.addEventListener('click', function () {
    navMenu.classList.add('opacity-0', 'invisible');
    navMenu.classList.remove('opacity-100', 'visible');
  });

  // Optional: close menu on link click (mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth < 768) {
        navMenu.classList.add('opacity-0','invisible');
        navMenu.classList.remove('opacity-100','visible');
      }
    });
  });