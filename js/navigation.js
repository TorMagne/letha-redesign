const menuButton = document.querySelector(".hamburger");
menuButton.addEventListener("click", () => {
  slideMenu();
});

const slideMenu = () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("slide");
};
