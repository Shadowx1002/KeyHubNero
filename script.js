let currentSlideIndex = 0;
showSlides(currentSlideIndex);

function nextSlide() {
    showSlides(currentSlideIndex += 1);
}

function prevSlide() {
    showSlides(currentSlideIndex -= 1);
}

function currentSlide(index) {
    showSlides(currentSlideIndex = index - 1);
}

function showSlides(index) {
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (index >= slides.length) {
        currentSlideIndex = 0;
    }
    
    if (index < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[currentSlideIndex].style.display = "flex";
    dots[currentSlideIndex].className += " active";
}

function addToCart(game) {
    alert(game + " added to cart!");
}
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });
});
let currentIndex = 0;

function nSlide() {
    const c = document.querySelector('.c');
    const items = document.querySelectorAll('.c-item');
    const itemWidth = items[0].clientWidth + 20; 

    currentIndex = Math.min(currentIndex + 1, items.length - 1);
    c.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function pSlide() {
    const c = document.querySelector('.c');
    const items = document.querySelectorAll('.c-item');
    const itemWidth = items[0].clientWidth + 20; 

    currentIndex = Math.max(currentIndex - 1, 0);
    c.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
