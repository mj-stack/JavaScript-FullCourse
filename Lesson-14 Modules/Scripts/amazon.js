import { cart, addToCart } from './cart.js';
import { products } from './products.js';
// import { totalQuantityInCart } from './cart.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}" alt="">
      </div>
      <div class="product-info-container">
        <div class="product-name">
          <p class="product-name-text">${product.name}</p>
        </div>
        <div class="product-ratings">
          <img class="product-stars-icon" src="${product.ratings.stars}" alt="">
          <span class="product-ratings-count">${product.ratings.count}</span>
        </div>
        <div class="product-price">
          <span>$${(product.priceCents / 100).toFixed(2)}</span>
        </div>
        <div class="product-quantity">
          <select class="quantity-selector js-quantity-selector-${product.id}" name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="add-to-cart">
          <div class="img-popup-div" data-product-id="${product.id}">
            <img class="checkmark" src="../Images/Icons/checkmark.png" />
            <p class="js-added-popup">Added</p>
          </div>
          <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
})

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })

  document.querySelector('.js-cart-quantity-count').innerHTML = cartQuantity;
}

updateCartQuantity();

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const selectedQuantity = parseInt(quantitySelector.value, 10);

    addToCart(productId, selectedQuantity);
    updateCartQuantity();

    // const popupInput = document.querySelectorAll('.img-popup-div').forEach((popup) => {
    //   popup.classList.add(`img-popup-div2-${productId}`);
    // })

    const popup = document.querySelector(`.img-popup-div[data-product-id="${productId}"]`);

    if (popup) {
      popup.classList.add('img-popup-div2');
      setTimeout(() => {
        popup.classList.remove('img-popup-div2');
      }, 2000);
    }
  });
});