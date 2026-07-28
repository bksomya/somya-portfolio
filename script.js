const galleryImages = document.querySelectorAll(".gallery-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Show Current Image
function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
}

// Close
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Click outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Next
nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage();
});

// Previous
prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
});

// Keyboard
document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") return;

    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }

    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage();
    }

    if (e.key === "ArrowLeft") {
        currentIndex =
            (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage();
    }

});