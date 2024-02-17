function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const rotationValue = scrollY / 1;

  document.getElementById(
    "rotatingImage"
  ).style.transform = `rotate(${rotationValue}deg)`;
});
