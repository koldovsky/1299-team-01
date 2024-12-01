const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  
  const submitButton = event.submitter; // Отримуємо кнопку, яка ініціювала подію
  if (submitButton && submitButton.textContent.trim() === "Leave a request") {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });
    const status = document.getElementById("contact-form-status");
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
  }
}

form.addEventListener("submit", handleSubmit);