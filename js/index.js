function init() {
  import("./index.key-speakers-members-carousel-with-clippy.js");
  import("./index.key-speakers-members.js");
  import("./index.ticket-prices-carousel.js");
  import("./index.about-conference-accordion.js");
  import("./global.invitation-carousel.js");
  import("./index.expectations-countdown.js");
  import("./index.header-hero.js");
  import("./index.header-hero-editable.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
