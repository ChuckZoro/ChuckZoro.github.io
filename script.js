const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

function setMenu(isOpen) {
  navLinks.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  menuButton.textContent = isOpen ? "✕" : "☰";
}

menuButton.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("is-open"));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Escape closes the mobile menu and returns focus to the button
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
    setMenu(false);
    menuButton.focus();
  }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
