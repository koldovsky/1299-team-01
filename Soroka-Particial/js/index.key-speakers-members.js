const customCursor = document.getElementById("customCursor"); // getElementByID works faster than querySelector
const hoverElements = document.querySelectorAll(
  ".stolen-from-passport-member-photo"
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

  // Hide custom cursor when it hovers the elements
  hoverElement.addEventListener("mouseleave", () => {
    customCursor.style.display = "none";
    importantFact.style.display = "none";

    document.removeEventListener("mousemove", moveCursor); // delete already activated listener
  });
});

// Объявляем обработчик отдельно
function moveCursor(event) {
  customCursor.style.left = `${event.pageX}px`;
  customCursor.style.top = `${event.pageY}px`;

  const containerWidth = 200;
  const cursorWidth = 42;
  importantFact.style.left = `${event.pageX - containerWidth / 2 + cursorWidth / 2}px`;
  importantFact.style.top = `${event.pageY + 78}px`;
}
