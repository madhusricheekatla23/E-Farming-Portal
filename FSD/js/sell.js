// sell.js

// Get form and product list container
const sellForm = document.getElementById('sell-form');
const productList = document.getElementById('product-list');

// Event listener for form submission
sellForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get product details from the form
  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;
  const productDescription = document.getElementById('product-description').value;
  const productImage = document.getElementById('product-image').value;

  // Create a new product card
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  productCard.innerHTML = `
    <img src="${productImage}" alt="${productName}">
    <h3>${productName}</h3>
    <p>${productDescription}</p>
    <div class="price">₹${productPrice}</div>
  `;

  // Append the product card to the product list
  productList.appendChild(productCard);

  // Clear the form after submission
  sellForm.reset();
});
