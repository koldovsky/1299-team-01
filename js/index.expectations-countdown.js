 const countdownDate = new Date("April 30, 2027 23:59:59").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    
    document.querySelectorAll(".count-value")[0].textContent = days;
    document.querySelectorAll(".count-value")[1].textContent = hours;
    document.querySelectorAll(".count-value")[2].textContent = minutes;
    document.querySelectorAll(".count-value")[3].textContent = seconds;

    
    if (timeLeft < 0) {
      clearInterval(timer);
      document.querySelector(".countdown").innerHTML = "<p>Event has started!</p>";
    }
  }

  
  const timer = setInterval(updateCountdown, 1000);
  updateCountdown(); // Викличте одразу для ініціалізації
