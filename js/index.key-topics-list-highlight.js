const listItems = document.querySelectorAll(".key-topics__item");

listItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.2)";
    item.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
    item.style.boxShadow = "none";
  });
});
