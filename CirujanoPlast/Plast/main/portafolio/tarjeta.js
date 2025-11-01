document.addEventListener('DOMContentLoaded', () => {
  const tarjeta = document.querySelector('.tarjeta');
  tarjeta.style.opacity = 0;
  tarjeta.style.transform = 'translateY(30px)';

  setTimeout(() => {
    tarjeta.style.transition = 'all 0.6s ease';
    tarjeta.style.opacity = 1;
    tarjeta.style.transform = 'translateY(0)';
  }, 150);
});