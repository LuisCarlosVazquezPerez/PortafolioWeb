const now = new Date().getTime();
const lastShown = localStorage.getItem("welcomeLastShown");
const oneMinute = 11 * 60 * 1000;

const shouldShowModal =
  !lastShown || now - parseInt(lastShown) > oneMinute;

if (shouldShowModal) {
  document.getElementById("welcomeModal").style.display = "flex";
} else {
  document.getElementById("welcomeModal").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

document
  .getElementById("acceptBtn")
  .addEventListener("click", function () {
    localStorage.setItem("welcomeLastShown", new Date().getTime());
    document.getElementById("welcomeModal").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  });