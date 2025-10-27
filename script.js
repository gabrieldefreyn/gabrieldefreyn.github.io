// Adiciona rolagem suave aos links da navegação
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão de "pular" para a âncora
            e.preventDefault();

            // Pega o ID da seção (ex: "#jogos")
            const targetId = link.getAttribute('href');
            
            // Encontra o elemento no DOM
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});