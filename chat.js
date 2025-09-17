const btn = document.getElementById('menu-btn');
const icon = document.getElementById('cancel-icon');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
menu.classList.toggle('hidden');
  });
icon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
      });