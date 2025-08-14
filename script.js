const dropdownBtns = document.querySelectorAll('.dropdown-button');


dropdownBtns.forEach(button => {
    button.addEventListener('click', (event) =>{
        const parent = button.parentElement;
        const dropContent = parent.querySelector('.drop-content');

        dropContent.classList.toggle('visible');
    });
});

window.addEventListener('click', (event) => {
    if(!event.target.classList.contains('dropdown-button')) {
        const dropRemove = document.querySelectorAll('.drop-content');

        dropRemove.forEach(content => {
            content.classList.remove('visible');
        });
    };
});

//carrousel part
const carrouselContainer = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const previusBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const navigationDot = document.querySelectorAll('.dot')
let currentSlide = 0;


function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length){
        currentSlide = 0;
    }
    showSlide(); 
}

function prevSlide(){
    currentSlide--;
    if (currentSlide < 0){
        currentSlide = images.length - 1;
    }
    showSlide(); 
}

function showSlide(){
    const moveAmount = -currentSlide * 600;
    carrouselContainer.style.transform = `translateX(${moveAmount}px)`;

    navigationDot.forEach(dot => {
        dot.classList.remove('active');
    });

    navigationDot[currentSlide].classList.add('active');
}

navigationDot.forEach((dot, index) => {
    dot.addEventListener('click', (event) => {
        currentSlide = index;
        showSlide();
    });
});

nextBtn.addEventListener('click', (event) => {
    nextSlide();
});

previusBtn.addEventListener('click', (event) => {
    prevSlide();
});

setInterval(nextSlide, 5000);