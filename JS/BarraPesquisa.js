// BarraPesquisa.js — versão ajustada
(function () {
  function initBarraPesquisa() {
    const input = document.getElementById('pesquisa');
    const placeholder = document.getElementById('placeholder-animado');
    const btn = document.getElementById('btn-pesquisar');

    if (!input || !placeholder) {
      console.warn('[BarraPesquisa] Elementos não encontrados nesta página.');
      return;
    }

    console.log('[BarraPesquisa] iniciada com sucesso ✅');

    const palavras = [
      'Pesca',
      'Cultura',
      'Informação',
      'Aquicultura',
      'PesqBrasil',
      'Defeso',
      'Pescador'
    ];
    let indice = 0;

    // Mostra a primeira palavra logo de cara
    placeholder.textContent = palavras[indice];

    function trocarPlaceholder() {
      // só troca se o input estiver vazio
      if (!input.value) {
        placeholder.style.opacity = '0';
        setTimeout(() => {
          indice = (indice + 1) % palavras.length;
          placeholder.textContent = palavras[indice];
          placeholder.style.opacity = '1';
        }, 300);
      }
    }

    // Eventos
    input.addEventListener('focus', () => {
      placeholder.style.opacity = '0';
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        placeholder.style.opacity = '1';
      }
    });

    // Esconde o placeholder enquanto o usuário digita
    input.addEventListener('input', () => {
      if (input.value) {
        placeholder.style.opacity = '0';
      } else {
        placeholder.style.opacity = '1';
      }
    });

    if (btn) {
      btn.addEventListener('click', () => {
        console.log('Pesquisando:', input.value);
      });
    }

    // Troca automática a cada 3s
    setInterval(trocarPlaceholder, 3000);
  }

  // Garante que roda depois do DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBarraPesquisa);
  } else {
    initBarraPesquisa();
  }
})();
