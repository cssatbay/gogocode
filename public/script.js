const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 }
];

const productContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const cart = [];

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p><button data-id="${p.id}">Add to cart</button>`;
    productContainer.appendChild(div);
  });
}

function renderCart() {
  cartContainer.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartContainer.appendChild(li);
  });
}

productContainer.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const id = parseInt(e.target.dataset.id, 10);
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
  }
});

renderProducts();
