# Simple-Eccomerse-Cart-system

A beginner-friendly **Cart System** built using **HTML**, **CSS**, and **pure JavaScript** — without any frameworks or libraries.  
This project demonstrates the core logic behind adding, removing, and managing items in a shopping cart dynamically.

---

## 📋 Features

✅ Add multiple products to the cart  
✅ Remove products individually  
✅ Display total price dynamically  
✅ Data stored in **Local Storage** (cart persists on page reload)  
✅ Clean and responsive design  
✅ 100% pure **HTML**, **CSS**, and **JavaScript** (no frameworks)

---

## 💻 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the page |
| **CSS3** | Styling and layout |
| **JavaScript (ES6)** | Functionality and interactivity |
| **Local Storage** | Save and restore cart data |

---

## ⚙️ How It Works

1. Each product has a button with `data-name` and `data-price` attributes.  
2. When you click **Add to Cart**, the product info is stored in an array and displayed in the cart list.  
3. Clicking **Delete** removes that specific product from both the list and **Local Storage**.  
4. The **total price** updates automatically whenever a product is added or removed.  

---

**Main Functions:**

- `updateCart()` → Renders all items in the cart and updates the total.  
- `addEventListener("click")` → Handles add/remove actions.  
- `localStorage.setItem()` → Saves cart data locally.  
- `localStorage.getItem()` → Loads saved data on page refresh.
- 
