document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const images = document.querySelectorAll('.gallery-image');

    // Scroll gallery left/right by width of one image + gap
    const scrollAmount = 150; // image width(140) + gap(10)

    leftArrow.addEventListener('click', () => {
        galleryWrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        galleryWrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Modal image viewer
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.src = '';
        modalImg.alt = '';
    });

    // Close modal when clicking outside image
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
            modalImg.alt = '';
        }
    });
});
