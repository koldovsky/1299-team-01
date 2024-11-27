// Установите дату окончания таймера
const targetDate = new Date("2026-01-01T00:00:00");

// Обновление таймера каждую секунду
function updateTimer() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(timerInterval);
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Запуск сразу