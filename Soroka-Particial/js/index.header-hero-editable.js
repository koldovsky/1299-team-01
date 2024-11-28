// Look for each element that can be edited (w/ class ".hero__description-edit-container")
function editText() {
  document
    .querySelectorAll(".hero__description-edit-container")
    .forEach((container) => {
      const textElement = container.querySelector(".hero__description"); // find a text element to edit
      const editButton = container.querySelector(".edit-button"); // find a button to press
      const saveButton = container.querySelector(".save-button"); // find a hidden button to save

      editButton.addEventListener("click", () => {
        // after clicking the button
        textElement.setAttribute("contenteditable", "true"); // contenteditable — default browser option. And I have CSS fo this
        textElement.focus(); // Insert a cursor inside the text field
        saveButton.style.display = "block";

        // Сохраняем текст и отключаем редактирование
        saveButton.addEventListener("click", () => {
          textElement.setAttribute("contenteditable", "false"); // Отключаем редактирование
          saveButton.style.display = "none";
        });
      });
    });
}

editText();
