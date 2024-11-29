// Look for each element that can be edited (w/ class ".hero__description-edit-container") — I have only one this element in HTML, but whatever
function editText() {
  document
    .querySelectorAll(".hero__description-edit-container")  // 'querySelectorAll' — returns array of elements with '.hero__description-edit-container' class
    .forEach((container) => {  // takes each element of the array one by one (and call each one as 'container')
      const textElement = container.querySelector(".hero__description"); // finds a text element to edit
      const editButton = container.querySelector(".edit-button"); // finds an edit button to press
      const saveButton = container.querySelector(".save-button"); // finds a hidden button to save

      editButton.addEventListener("click", () => {  // monitoring when an edit button of each of the elements in the array is clicked
        // after clicking the button
        textElement.setAttribute("contenteditable", "true"); // contenteditable — default browser option. This code adds the attribute to the HTML-element, and we have CSS for this attribute
        textElement.focus(); // inserts a cursor inside the text field
        saveButton.style.display = "block";  // makes a save button visible via 'display: block' (it was 'display: hidden')

        saveButton.addEventListener("click", () => {  // monitoring when a saving button is clicked
          textElement.setAttribute("contenteditable", "false");  // disables CSS for editing setting the attribute to the false
          saveButton.style.display = "none";  // disable saving button making it invisible (setting 'display: none')
        });
      });
    });
}

editText();
