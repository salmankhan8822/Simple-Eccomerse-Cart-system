let buttons = document.querySelectorAll(".add-to-cart");
let cartList = document.getElementById("cartList");
let totalText = document.getElementById("total");

let cart = [];
let total = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let name = btn.dataset.name;
    let price = parseFloat(btn.dataset.price);

    cart.push({ name, price });
    total += price;

    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      total -= item.price;

      updateCart();
    });
    li.appendChild(deleteBtn);
    cartList.appendChild(li);
  });

  totalText.textContent = `Total: ${total}`;
}
