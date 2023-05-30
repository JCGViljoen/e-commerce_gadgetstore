// Array of product objects
const products = [
    {
      name: "headphones",
      price: 1500,
      image: "https://i.postimg.cc/3JnLF2g9/images.jpg",
    },
    {
      name: "2500",
      price: 1700,
      image: "https://i.postimg.cc/25fBqKVt/Geek-Vape-Aegis-Legend2-Red-1600x.webp",
    },
    {
      name: "Product 3",
      price: 50000,
      image: "https://i.postimg.cc/yx7MksHN/ipad-pro-wi-fi-12-9-in-space-gray-pdp-image-position-1b-wwen-1.webp",
    },
  ];
  
  // Function to create HTML for each product
  function createProductHTML(product) {
    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price.toFixed(2)}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    `;
  }
  
  // Function to render product list on the page
  function renderProductList() {
    const productContainer = document.getElementById("product-list");
    let productHTML = "";
  
    products.forEach((product) => {
      productHTML += createProductHTML(product);
    });
  
    productContainer.innerHTML = productHTML;
  }
  
  // Call the function to render the product list
  renderProductList();
  