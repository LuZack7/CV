// Pobieramy elementy
const galleryWrapper = document.querySelector('.gallery-wrapper');
const galleryImages = document.querySelectorAll('.gallery-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

// Funkcja do przewijania galerii
leftArrow.addEventListener('click', () => {
    galleryWrapper.scrollBy({
        left: -200, // przesuwa o 200px w lewo
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    galleryWrapper.scrollBy({
        left: 200, // przesuwa o 200px w prawo
        behavior: 'smooth'
    });
});

// Funkcja do otwierania modalu po kliknięciu na obrazek
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src; // ustawiamy powiększony obraz
    });
});

// Funkcja do zamykania modalu
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
