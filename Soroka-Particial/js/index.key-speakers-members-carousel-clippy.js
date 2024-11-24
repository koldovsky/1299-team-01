const customCursor = document.getElementById("customCursor"); // getElementByID works faster than querySelector
const hoverElements = document.querySelectorAll(
  ".members-carousel__member-photo-from-onlyfans"
);
const importantFact = document.getElementById("importantFact");

hoverElements.forEach((hoverElement) => {
  // Show custom cursor when it hovers the elements
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

    document.removeEventListener("mousemove", moveCursor); // delete already activated listener
  });
});

function moveCursor(event) {
    customCursor.style.left = `${event.pageX}px`;
    customCursor.style.top = `${event.pageY}px`;
  
    const gap = 10;
    importantFact.style.left = `${
      event.pageX - importantFact.offsetWidth / 2 + customCursor.offsetWidth / 2
    }px`;
    importantFact.style.top = `${event.pageY - importantFact.offsetHeight - gap}px`;
  }
