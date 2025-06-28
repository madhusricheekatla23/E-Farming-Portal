// cart.js

// Get cart container and total price display
const cartContainer = document.getElementById('cart-container');
const totalPriceElement = document.getElementById('total-price');

// Temporary cart array (this should be replaced with localStorage or a backend for a real app)
let cartItems = [];

// Function to update the cart display
function updateCart() {
  cartContainer.innerHTML = '';
  let totalPrice = 0;

  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <div class="details">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="price">₹${item.price}</div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
    `;

    cartContainer.appendChild(cartItem);
    totalPrice += item.price;
  });

  totalPriceElement.innerHTML = `Total: ₹${totalPrice}`;
}

// Function to add an item to the cart
function addToCart(product) {
  cartItems.push(product);
  updateCart();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  updateCart();
}

// Sample products added to cart (replace with actual user actions)
addToCart(products[0]);
addToCart(products[1]);

// Proceed to checkout (this could be expanded with payment integration)
document.getElementById('checkout-btn').addEventListener('click', function() {
  alert("Proceeding to checkout...");
});

