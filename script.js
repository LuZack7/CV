// Gallery horizontal scroll with arrows
document.addEventListener("DOMContentLoaded", () => {
    const galleryWrapper = document.querySelector(".gallery-wrapper");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    leftArrow.addEventListener("click", () => {
        galleryWrapper.scrollBy({
            left: -180,
            behavior: "smooth",
        });
    });

    rightArrow.addEventListener("click", () => {
        galleryWrapper.scrollBy({
            left: 180,
            behavior: "smooth",
        });
    });

    // Modal popup for gallery images
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalClose = document.getElementById("modalClose");
    const images = document.querySelectorAll(".gallery-image");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");
            modalClose.focus();
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    });

    // Close modal on outside click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    });

    // Close modal on ESC key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    });
});
