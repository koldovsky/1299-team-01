const slides = [
  `<div class="members-carousel__additional-member members-carousel__additional-member-cyan">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-my-ex.png"
          alt="My ex"
          stupid-joke="Clippy AI Fact | Today is a good day to get scared of asking her out again"/>
        <h3 class="members-carousel__member-name">Jane Twine</h3>
        <p class="members-carousel__member-role">Marketing Director</p>
    </div>`,

  `<div class="members-carousel__additional-member members-carousel__additional-member-purple">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-washing-powder.png"
          alt="Paul washing powder"
          stupid-joke="Clippy AI Fact | According to the surname he is a washing powder"/>
        <h3 class="members-carousel__member-name">Paul Tide</h3>
        <p class="members-carousel__member-role">Chief technology officer</p>
    </div>`,
  `<div class="members-carousel__additional-member members-carousel__additional-member-yellow">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-i-have-no-chances-with.png"
          alt="Blonde that I have no chances with"
          stupid-joke="Clippy AI Fact | You are a pretty cake but let's be optimistic, you have no chances with her"/>
        <h3 class="members-carousel__member-name">Lucy Smith</h3>
        <p class="members-carousel__member-role">Human relations expert</p>
    </div>`,
  `<div class="members-carousel__additional-member members-carousel__additional-member-green">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-prost-lol.png"
          alt="Dean. Prosto Dean"
          stupid-joke="Clippy AI Fact | This guy is so cool so that he doesn't need a surname. It's Dean. Prosto Dean"/>
        <h3 class="members-carousel__member-name">Dean Prost</h3>
        <p class="members-carousel__member-role">AI engineer</p>
    </div>`,
  `<div class="members-carousel__additional-member members-carousel__additional-member-yellow">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-not-so-well.png"
          alt="Samantha not-so-WELL-as-she-thinks"
          stupid-joke="Clippy AI Fact | Samantha Well is not so well, because of her glasses at least — eyes work poor"/>
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

  const imgWidth = 180;
  const innerContainerGap = 20;
  const btnGap = 20;
  const btnWidth = 50;
  const outterContainerPadding = 15;
  let gapCoef = 1;
  let minWidth =
    2 * imgWidth +
    1 * innerContainerGap * gapCoef +
    2 * (btnGap + btnWidth + outterContainerPadding);
  if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
    const secondSlideIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
    slidesContainer.innerHTML += slides[secondSlideIdx];

    gapCoef = 2;
    minWidth =
      3 * imgWidth +
      2 * innerContainerGap * gapCoef +
      2 * (btnGap + btnWidth + outterContainerPadding);
    if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slidesContainer.innerHTML += slides[thirdSlideIdx];

      minWidth =
        4 * imgWidth +
        3 * innerContainerGap * gapCoef +
        2 * (btnGap + btnWidth + outterContainerPadding);
      if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
        const fourthSlideIdx =
          thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
        slidesContainer.innerHTML += slides[fourthSlideIdx];
      }
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
