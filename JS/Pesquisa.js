// Seleciona elementos
const inputPesquisa = document.getElementById('pesquisa');
const placeholderAnimado = document.getElementById('placeholder-animado');
const cards = document.querySelectorAll('.cards .card');

// Função para filtrar cards
function pesquisar() {
    const termo = inputPesquisa.value.trim().toLowerCase();

    cards.forEach(card => {
        const titulo = card.querySelector('h2')?.textContent.toLowerCase() || '';
        const resumo = card.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (titulo.includes(termo) || resumo.includes(termo)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Atualiza placeholder animado
inputPesquisa.addEventListener('input', () => {
    if (inputPesquisa.value.length > 0) {
        placeholderAnimado.style.opacity = 0;
    } else {
        placeholderAnimado.style.opacity = 1;
    }
});

// Pesquisar ao pressionar Enter
inputPesquisa.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        pesquisar();
    }
});

// Pesquisa ao clicar no botão da lupa
document.querySelector('.barra-pesquisa button').addEventListener('click', pesquisar);
