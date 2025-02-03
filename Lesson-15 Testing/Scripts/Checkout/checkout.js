import { products } from "../products.js";
import { cart, removeItem } from "../cart.js";
// import { updateCartQuantity } from '../amazon.js';

let cartSummaryHTML = '';

// cart.forEach((cartItem) => {
//   const productId = cartItem.productId;
  
//   let matchingProduct;
//   products.forEach((product) => {
//     if (product.id === productId) {
//       matchingProduct = product;
//     }
//   });

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
  
    // Use `find` to get the matching product
    const matchingProduct = products.find(product => product.id === productId);
  
    // Handle case where no matching product is found
    if (!matchingProduct) {
      // console.log(`Product with ID ${productId} not found in the products array.`);
      return; // Skip this iteration
    }

  cartSummaryHTML += 
  `
    <div class="item-in-cart js-item-in-cart-${matchingProduct.id}">
      <div class="delivery-date-text">
        <p>Delivery date: Tuesday, February 4</p>
      </div>
      <div class="item-info-div">
        <div class="item-img-div">
          <img src="${matchingProduct.image}" alt="">
        </div>
        <div class="item-description-div">
          <p class="item-name">${matchingProduct.name}</p>
          <p class="item-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</p>
          <p class="quantity-shifter">Quantity: ${cartItem.quantity} <span class="update-quantity">Update</span> <span class="delete-quantity js-delete-item" data-product-id="${matchingProduct.id}">Delete</span></p>
        </div>

        <div class="item-delivery-div">

          <div class="choose-delivery-text-div">
            <p class="choose-delivery-text">Choose a delivery option:</p>
          </div>

          <div class="item-delivery-date1">
            <div class="radio-button-div">
              <input class="radio-button" type="radio" id="free-shipping" name="delivery-date-${matchingProduct.id}" checked>
            </div>
            <div>
              <div class="delivery-date-div">
                <label class="delivery-date" for="free-shipping">Tuesday, February 4</label>
              </div>
              <div class="delivery-charge-div">
                <span class="delivery-charge">FREE Shipping</span>
              </div>
            </div>
          </div>

          <div class="item-delivery-date2">
            <div class="radio-button-div">
              <input class="radio-button" type="radio" id="499-shipping" name="delivery-date-${matchingProduct.id}">
            </div>
            <div>
              <div class="delivery-date-div">
                <label class="delivery-date" for="499-shipping">Wednesday, January 29</label>
              </div>
              <div class="delivery-charge-div">
                <span class="delivery-charge">$4.99 - Shipping</span>
              </div>
            </div>
          </div>

          <div class="item-delivery-date3">
            <div class="radio-button-div">
              <input class="radio-button" type="radio" id="999-shipping" name="delivery-date-${matchingProduct.id}">
            </div>
            <div class="delivery-date-text-div">
              <div class="delivery-date-div">
                <label class="delivery-date" for="999-shipping">Monday, January 27</label>
              </div>
              <div class="delivery-charge-div">
                <span class="delivery-charge">$9.99 - Shipping</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
});
document.querySelector('.checkout-items-div').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-item').forEach((item) => {
  item.addEventListener('click', () => {
    const productId = item.dataset.productId;
    removeItem(productId)

    const container = document.querySelector(`.js-item-in-cart-${productId}`);
    container.remove();
  });
});

// hello();
// const today = dayjs();
// console.log(today);

// const deliveryDate = today.add('7', 'days');
// console.log(deliveryDate.format('dddd, MMMM d'));
