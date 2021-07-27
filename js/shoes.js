let indicator = document.querySelector("#indicator").children;
let shoeItems = document.querySelector(".shoe-items").children;
const shoeContainer = document.querySelector("shoe-container");

for (let buttons = 0; buttons < indicator.length; buttons++) {
  indicator[buttons].onclick = function () {
    for (let x = 0; x < indicator.length; x++) {
      indicator[x].classList.remove("active");
    }
    this.classList.add("active");
    const showItems = this.getAttribute("data-filter");
    for (let z = 0; z < shoeItems.length; z++) {
      shoeItems[z].style.transform = "scale(0)";
      setTimeout(() => {
        shoeItems[z].style.display = "none";
      }, 500);
      if (
        shoeItems[z].getAttribute("data-category") == showItems ||
        showItems == "all"
      ) {
        shoeItems[z].style.transform = "scale(1)";
        setTimeout(() => {
          shoeItems[z].style.display = "block";
        }, 500);
      }
    }
  };
}
