function initializeCarousel() {
  // localizing the whole carousel logic with its variables inside the single function

  // Carousel rendering logic
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
          stupid-joke="Clippy AI Fact | You’re a sweet cupcake, but let’s be honest — you have no chance with her"/>
        <h3 class="members-carousel__member-name">Lucy Smith</h3>
        <p class="members-carousel__member-role">Human relations expert</p>
    </div>`,
    `<div class="members-carousel__additional-member members-carousel__additional-member-green">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-prost-lol.png"
          alt="Dean. Prosto Dean"
          stupid-joke="Clippy AI Fact | This guy is so cool, he doesn’t even need a surname. He’s just Dean. Prosto Dean"/>
        <h3 class="members-carousel__member-name">Dean Prost</h3>
        <p class="members-carousel__member-role">AI engineer</p>
    </div>`,
    `<div class="members-carousel__additional-member members-carousel__additional-member-yellow">
        <img
          class="members-carousel__member-photo-from-onlyfans"
          src="img/index/additional-speaker-not-so-well.png"
          alt="Samantha not-so-WELL-as-she-thinks"
          stupid-joke="Clippy AI Fact | Samantha Well isn’t doing so well, at least because of her glasses — her eyes work poorly"/>
        <h3 class="members-carousel__member-name">Samantha Well</h3>
        <p class="members-carousel__member-role">Data analyst</p>
    </div>`,
  ];

  let currIdx = 0;

  const slidesContainer = document.querySelector(
    ".members-carousel__additional-members"
  );

  const customCursor = document.getElementById("customCursor");
  const importantFact = document.getElementById("importantFact");

  // Moving slides logic
  function nextSlide() {
    currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
    renderSlides();
  }

  function previousSlide() {
    currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
    renderSlides();
  }

  const btnNext = document.querySelector(".members-carousel__button--right");
  btnNext.addEventListener("click", nextSlide);

  const btnPrev = document.querySelector(".members-carousel__button--left");
  btnPrev.addEventListener("click", previousSlide);

  window.addEventListener("resize", renderSlides);

  function renderSlides() {
    slidesContainer.innerHTML = slides[currIdx];

    // Constants from CSS
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

    // Calling a handler for a custom cursor and the Clippy — we need it here to re-call it after changing the slides every time, inless JS for the Clippy doesn't work
    attachHoverHandlers();
  }

  // A single sunction that combines a custom cursor and the Clippy
  function attachHoverHandlers() {
    const hoverElements = document.querySelectorAll(
      ".members-carousel__member-photo-from-onlyfans"
    );

    hoverElements.forEach((hoverElement) => {
      hoverElement.addEventListener("mouseenter", () => {
        customCursor.style.display = "block";

        const factText = hoverElement.getAttribute("stupid-joke");
        const [line1, line2] = factText.split(" | ");

        importantFact.querySelector(".important-fact__line--one").textContent =
          line1;
        importantFact.querySelector(".important-fact__line--two").textContent =
          line2;
        importantFact.style.display = "block";

        document.addEventListener("mousemove", moveCursor);
      });

      hoverElement.addEventListener("mouseleave", () => {
        customCursor.style.display = "none";
        importantFact.style.display = "none";

        document.removeEventListener("mousemove", moveCursor);
      });
    });
  }

  function moveCursor(event) {
    customCursor.style.left = `${event.pageX}px`;
    customCursor.style.top = `${event.pageY}px`;

    const gap = 10;
    importantFact.style.left = `${
      event.pageX - importantFact.offsetWidth / 2 + customCursor.offsetWidth / 2
    }px`;
    importantFact.style.top = `${
      event.pageY - importantFact.offsetHeight - gap
    }px`;
  }

  // First launching the gallery
  renderSlides();
}

initializeCarousel();
