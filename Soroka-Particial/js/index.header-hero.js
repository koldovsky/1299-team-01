// GitHub Pages breaks the fuck up my relative paths so my code used to work on my computer but used to not work on GitHub Pages.
// So I have to dynamically find a root folder in order to use absolute paths

const repoName = "1299-team-01"; // our folder name on GitHub Pages
const isGitHubPages = window.location.pathname.includes(`/${repoName}/`); // TRUE if the folder exists in the location path (when I run it on my computer there is no this folder on the URL)

const basePath = isGitHubPages
  ? `${window.location.origin}/${repoName}/` // if it is GitHub Pages —— uses the whole 'https://XXX.github.io' and adds '/1299-team-01/'
  : `${window.location.origin}/`; // if it is not — use just the base root adress that it detects

const replacingImage = `${basePath}img/index/cover-hero-rr.png`;
const originalImage = `${basePath}img/index/cover-hero.png`;

// Preloading a replacing image for avoiding blinking after calling it while it is not in cache
new Image().src = replacingImage;

function goWildRR() {
  const button = document.querySelector(".hero__buy-ticket-button");
  const audio = document.getElementById("rr");
  const element = document.querySelector(".hero");

  const replacingBackground = `url(${replacingImage})`; // a variable for storing value for CSS's 'background-image' property
  const originalBackground = `url(${originalImage})`; // a variable for storing value for CSS's 'background-image' property

  button.addEventListener("click", () => {
    // after clicking
    element.style.backgroundImage = replacingBackground; // replaces 'backgroung-image' in CSS

    button.classList.add("active"); // add class 'active' to the button to use CSS styles fo active-element (button after clicking) as non-transparency

    audio.play();

    audio.addEventListener("ended", () => {
      // when audio is ended
      element.style.backgroundImage = originalBackground; // replaces new 'backgroung-image' with the previous one in CSS

      button.classList.remove("active"); // deleting newly created active class so that its styles as non-transparant get deleted
    });
  });
}

goWildRR();
