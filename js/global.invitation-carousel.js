const slides = [
    `<div class="photo-carousel__slide">
        <img
        src="img/invitation-carousel/slide1.png" class="photo-carousel__picture"
        alt="Microphone in the light-pink background"
    />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/invitation-carousel/slide2.png" class="photo-carousel__picture"
        alt="One blue chair around gray"
        />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/invitation-carousel/slide3.png" class="photo-carousel__picture"
        alt="The lecturer speaks to the audience"
        />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/invitation-carousel/slide4.png" class="photo-carousel__picture"
        alt="Yellow paper cups for coffee"
        />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/invitation-carousel/slide5.png" class="photo-carousel__picture"
        alt="The book flies in the air"
        />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/invitation-carousel/slide6.png" class="photo-carousel__picture"
        alt="Man while working on a laptop"
        />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/invitation-carousel/slide7.png" class="photo-carousel__picture"
        alt="Backlit computer keyboard"
        />
    </div>`,
    ]

    let currIdx = 0;

    function renderCarousel() {
        const slidesContainer = document.querySelector('.photo-carousel__slides');
        slidesContainer.innerHTML = slides[currIdx];
    
        if (window.matchMedia('(min-width: 480px)').matches) {
            const secondSlideIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
            slidesContainer.innerHTML += slides[secondSlideIdx];
            if (window.matchMedia('(min-width: 650px)').matches) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slidesContainer.innerHTML += slides[thirdSlideIdx];
                if (window.matchMedia('(min-width: 775px)').matches) {
                    const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                    slidesContainer.innerHTML += slides[fourthSlideIdx];
                    if (window.matchMedia('(min-width: 890px)').matches) {
                        const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
                        slidesContainer.innerHTML += slides[fifthSlideIdx];
                            if (window.matchMedia('(min-width: 1020px)').matches) {
                            const sixthSlideIdx = fifthSlideIdx + 1 >= slides.length ? 0 : fifthSlideIdx + 1;
                            slidesContainer.innerHTML += slides[sixthSlideIdx];
                        }
                    }
                }
            }
        }
        
    }
    
    function nextSlide() {
        currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
        renderCarousel();
    }
    
    function prevSlide() {
        currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
        renderCarousel();
    }
        
    renderCarousel();
    
    const btnNext = document.querySelector('.photo-carousel__arrow-control--next');
    btnNext.addEventListener('click', nextSlide);
    
    const btnPrev = document.querySelector('.photo-carousel__arrow-control--prev');
    btnPrev.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);