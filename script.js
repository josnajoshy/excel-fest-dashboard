
const targetDate = new Date("2025-08-01T09:00:00"); // update to fest date
const timerEl = document.getElementById("timer");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    timerEl.textContent = "🎉 It's Excel Fest time!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  timerEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Theme toggle logic
const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Optional: Save theme preference
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("preferredTheme", isDark ? "dark" : "light");
});

// Optional: Load saved theme on startup
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
document.getElementById('registration-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for registering! 🎉');
});
