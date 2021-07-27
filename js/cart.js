import { shoeArray } from "./salesList.js";

let cartButtons = document.querySelectorAll("#add-cart");

const totalPrice = (product) => {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
};

const loadCartNumber = () => {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart-number").textContent = productNumbers;
  }
};

const setItems = (product) => {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
};

const cartNumbers = (product) => {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart-number").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-number").textContent = 1;
  }
  setItems(product);
};

for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    cartNumbers(shoeArray[i]);
    totalPrice(shoeArray[i]);
  });
}

const displayCart = () => {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  const productContainer = document.querySelector(".products");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="product">
        <i class="bi bi-x-circle-fill"></i>
        <img class="product-image" src="./images/${item.image}.png" alt="">
        <span>${item.name}</span>
        <div class="quantity">
        <i class="bi bi-arrow-left-circle-fill"></i>
        <span class="cart-number">${item.inCart}</span>
        <i class="bi bi-arrow-right-circle-fill"></i>
        </div>
        <div class="total">
        $${item.inCart * item.price},00
        </div>
      </div>
      `;
    });
  }
};

loadCartNumber();
displayCart();
