const originalImage = "../img/index/cover-hero.png";

// Preloading a replacing image for avoiding blinking
const replacingImage = "../img/index/cover-hero-rr.png";
new Image().src = replacingImage;

function goWildRR() {
  const button = document.querySelector(".hero__buy-ticket-button");
  const audio = document.getElementById("rr");
  const element = document.querySelector(".hero");

  const replacingBackground = `url(${replacingImage})`;
  const originalBackground = `url(${originalImage})`;

  button.addEventListener("click", () => {
    element.style.backgroundImage = replacingBackground;

    // Активируем эффект выезда изображения
    button.classList.add("active");

    audio.play();

    audio.addEventListener("ended", () => {
      element.style.backgroundImage = originalBackground;

      // Убираем эффект выезда изображения
      button.classList.remove("active");
    });
  });
}

goWildRR();
