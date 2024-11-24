const slides = [
  `<div class="members-carousel__additional-member members-carousel__additional-member-cyan">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-my-ex.png"
          alt="My ex"/>
        <h3 class="members-carousel__member-name">Jane Twine</h3>
        <p class="members-carousel__member-role">Marketing Director</p>
    </div>`,

  `<div class="members-carousel__additional-member members-carousel__additional-member-purple">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-washing-powder.png"
          alt="Paul washing powder"/>
        <h3 class="members-carousel__member-name">Paul Tide</h3>
        <p class="members-carousel__member-role">Chief technology officer</p>
    </div>`,
  `<div class="members-carousel__additional-member members-carousel__additional-member-yellow">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-i-have-no-chances-with.png"
          alt="Blonde that I have no chances with"/>
        <h3 class="members-carousel__member-name">Lucy Smith</h3>
        <p class="members-carousel__member-role">Human relations expert</p>
    </div>`,
  `<div class="members-carousel__additional-member members-carousel__additional-member-green">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-prost-lol.png"
          alt="Dean. Prosto Dean"/>
        <h3 class="members-carousel__member-name">Dean Prost</h3>
        <p class="members-carousel__member-role">AI engineer</p>
    </div>`,
  `<div class="members-carousel__additional-member members-carousel__additional-member-yellow">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-not-so-well.png"
          alt="Samantha not-so-WELL-as-she-thinks"/>
        <h3 class="members-carousel__member-name">Samantha Well</h3>
        <p class="members-carousel__member-role">Data analyst</p>
    </div>`,
];

let currIdx = 0;

function renderSlides() {
  const slidesContainer = document.querySelector(
    ".members-carousel__additional-members"
  );
  slidesContainer.innerHTML = slides[currIdx];

  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
    slidesContainer.innerHTML += slides[secondSlideIdx];

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slidesContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

renderSlides();

function nextSlide() {
  currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
  renderSlides();
}

const btnNext = document.querySelector(".members-carousel__button--right");
btnNext.addEventListener("click", nextSlide);

function previousSlide() {
  currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
  renderSlides();
}

const btnPrev = document.querySelector(".members-carousel__button--left");
btnPrev.addEventListener("click", previousSlide);

window.addEventListener("resize", renderSlides);
