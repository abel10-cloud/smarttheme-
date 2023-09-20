/ Function to show only 4 products on mobile view
function showProductsOnMobile() {
  const productContainer = document.querySelector('product-container');
  const products = productContainer.querySelectorAll('product');

  // Check if the viewport width is less than 768px (adjust as needed)
  if (window.innerWidth < 768) {
    // Hide all products
    products.forEach(product => {
      product.style.display = 'none';
    });

    // Show the first 4 products
    for (let i = 0; i < 4; i++) {
      if (products[i]) {
        products[i].style.display = 'block';
      }
    }
  } else {
    // Show all products on larger screens
    products.forEach(product => {
      product.style.display = 'block';
    });
  }
}

// Initial call to show products based on viewport size
showProductsOnMobile();

// Listen for window resize events to update product display
window.addEventListener('resize', showProductsOnMobile);