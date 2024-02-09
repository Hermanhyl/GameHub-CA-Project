// script.js

// Your global cart variable to store items
let cart = [];

// Function to fetch products from the API and display on the homepage
async function fetchAndDisplayProducts() {
try {
    const response = await fetch('https://api.noroff.dev/gamehub/games');
    const products = await response.json();

    // Display products on the homepage
    displayProducts(products);
} catch (error) {
    // Handle errors
    console.error('Error fetching products:', error);
}
}

// Function to display products on the homepage
function displayProducts(products) {
const productListContainer = document.getElementById('productList');

  // Clear existing content
productListContainer.innerHTML = '';

  // Iterate through products and create HTML elements
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
    <img src="${product.image}" alt="${product.title}" style="max-width: 100px;">
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <p>Price: ${product.price}</p>
    <button onclick="addToCart('${product.id}')">Add to Cart</button>
    <hr>
    `;
    productListContainer.appendChild(productElement);
});
}

// Function to view product details on a separate page
async function viewProductDetails(productId) {
try {
    const response = await fetch(`https://api.noroff.dev/gamehub/games/${productId}`);
    const productDetails = await response.json();

    // Display product details on the product page
    displayProductDetails(productDetails);
} catch (error) {
    // Handle errors
    console.error('Error fetching product details:', error);
}
}

// Function to display product details on the product page
function displayProductDetails(productDetails) {
const productDetailsContainer = document.getElementById('productDetails');

  // Clear existing content
productDetailsContainer.innerHTML = '';

  // Create HTML elements for product details
const productElement = document.createElement('div');
productElement.innerHTML = `
    <img src="${productDetails.image}" alt="${productDetails.title}" style="max-width: 200px;">
    <h2>${productDetails.title}</h2>
    <p>${productDetails.description}</p>
    <p>Genre: ${productDetails.genre}</p>
    <p>Released: ${productDetails.released}</p>
    <p>Price: ${productDetails.price}</p>
    <button onclick="addToCart('${productDetails.id}')">Add to Cart</button>
`;
productDetailsContainer.appendChild(productElement);
}

// Function to add a product to the cart
function addToCart(productId) {
  // Get the product details from the products array or make another API call
const product = products.find(p => p.id === productId);

  // Your existing addToCart logic here
  // ...

  // Update the cart UI or perform any other necessary actions
updateCartUI();
}

// Function to update the cart UI (replace with your actual implementation)
function updateCartUI() {
  // Update the UI to reflect the current state of the cart
console.log('Cart updated:', cart);
  // You may want to update the display of the cart on the website
}

// Fetch and display products when the page loads
fetchAndDisplayProducts();
