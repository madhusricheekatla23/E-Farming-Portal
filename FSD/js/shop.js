// Fake Product Database
const products = [
    {
      id: 1,
      name: "Organic Tomato Seeds",
      price: 10,
      image: "https://m.media-amazon.com/images/I/41KjmvqDpEL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      name: "Tractor - Model X200",
      price: 5000,
      image: "https://cdn.britannica.com/43/128643-004-17C2CD69/Tractor.jpg"
    },
    {
      id: 3,
      name: "Automatic Water Sprinkler",
      price: 200,
      image: "https://rukminim2.flixcart.com/image/850/1000/l33cia80/garden-sprayer/4/w/k/300-garden-sprinkler-adjustable-360-degree-rotation-lawn-large-original-imageae2atxh3gb3.jpeg?q=90&crop=false"
    },
    {
      id: 4,
      name: "High Yield Wheat Seeds",
      price: 15,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrbpGjzaxfzy0QC7J-LxcfxfGTaTpQzIVmzXPqM07kqTlV_McoQ&s=10&ec=72940545"
    },
    {
      id: 5,
      name: "Portable Soil Tester",
      price: 99,
      image: "https://m.media-amazon.com/images/I/710yx54x0PL._AC_SL1500_.jpg"
    },
    {
      id: 6,
      name: "Crop Protection Net",
      price: 35,
      image: "https://images-cdn.ubuy.co.in/64129b15932fbf467228e0dd-ultra-fine-garden-mesh-netting-for.jpg"
    }
  ];
  
  // Load products
  const productsContainer = document.getElementById('products');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button>Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
  });
  