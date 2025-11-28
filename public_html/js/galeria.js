document.addEventListener('DOMContentLoaded', () => {
    const miniatures = document.querySelectorAll('.miniatura');

    miniatures.forEach(img => {
        img.addEventListener('click', (event) => {
            console.log('Imatge clicada:', event.target.id);
            event.target.classList.toggle('engrandida');
            
        });
    });
});