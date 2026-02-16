document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animation d'apparition au scroll (Reveal effect)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // On observe les sections et les cartes du portfolio
    document.querySelectorAll('section, .portfolio-card, .service-item').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });

    // 2. Gestion des filtres du Portfolio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Changer le bouton actif
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');

            const filterValue = btn.textContent.toLowerCase();

            portfolioCards.forEach(card => {
                // On simule le filtrage (tu peux ajouter des classes data-category sur ton HTML plus tard)
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    // Optionnel : ajouter une logique réelle ici
                    card.style.opacity = '0.3'; 
                    setTimeout(() => card.style.opacity = '1', 300);
                }
            });
        });
    });
});