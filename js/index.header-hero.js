const originalImage = "../img/index/cover-hero.png";


const repoName = "1299-team-01"; // Имя репозитория на GitHub Pages
const isGitHubPages = window.location.pathname.includes(`/${repoName}/`); // Проверяем, есть ли папка репозитория в пути

const basePath = isGitHubPages
  ? `${window.location.origin}/${repoName}/` // GitHub Pages
  : `${window.location.origin}/`; // Локальный сервер

const replacingImage = `${basePath}img/index/cover-hero-rr.png`;
new Image().src = replacingImage;


// Preloading a replacing image for avoiding blinking after calling it while it is not in cache

function goWildRR() {
  const button = document.querySelector(".hero__buy-ticket-button");
  const audio = document.getElementById("rr");
  const element = document.querySelector(".hero");

  const replacingBackground = `url(${replacingImage})`;  // a variable for storing value for CSS's 'background-image' property
  const originalBackground = `url(${originalImage})`;  // a variable for storing value for CSS's 'background-image' property

  button.addEventListener("click", () => {  // after clicking
    element.style.backgroundImage = replacingBackground;  // replaces 'backgroung-image' in CSS

    button.classList.add("active");  // add class 'active' to the button to use CSS styles fo active-element (button after clicking) as non-transparency

    audio.play();

    audio.addEventListener("ended", () => {  // when audio is ended
      element.style.backgroundImage = originalBackground;  // replaces new 'backgroung-image' with the previous one in CSS

      button.classList.remove("active");  // deleting newly created active class so that its styles as non-transparant get deleted
    });
  });
}

goWildRR();
