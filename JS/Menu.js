(() => {
  const menu = document.getElementById('Menu');
  const menuBtn = document.querySelector('.icone-menu');

  // Abre e fecha o menu lateral quando clicar no botão
  function toggleMenu() {
    menu.classList.toggle('ativo');
  }

  // Fecha o menu se clicar fora dele
  function clickFora(event) {
    // Se o menu estiver aberto e o clique não for dentro do menu nem no botão
    if (menu.classList.contains('ativo') && 
        !menu.contains(event.target) && 
        !menuBtn.contains(event.target)) {
      menu.classList.remove('ativo');
    }
  }

  // Expõe a função para ser chamada no HTML (onclick)
  window.toggleMenu = toggleMenu;

  // Fecha o menu ao clicar fora
  document.addEventListener('click', clickFora);
})();
