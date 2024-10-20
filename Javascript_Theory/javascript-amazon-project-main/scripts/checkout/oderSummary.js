
import {cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';

import {products, getProduct} from '../../data/products.js';

import {formartCurrency} from '../utils/money.js';

import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOption.js';

import {renderPaymentSummary} from './paymentSummary.js';


// ESM = EcmaScript Module (import code tu ben ngoai =  URL )

export function renderOrderSummary() {

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    // lay id sp 
    const productId = cartItem.productId;
    // tim sp trong list user chon -> luu vao matchingProduct
    const matchingProduct = getProduct(productId);
    console.log(matchingProduct);
    // lay id delivery 
    const deliveryOptionId = cartItem.deliveryOptionId;

    // lay id delivery user(deliveryOptionId) -> tim id delivery tuong ung trong list(deliveryOptions) 
    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );


    cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            ${matchingProduct.getPrice()}
          </div>
          <div class="product-quantity
            js-product-quantity-${matchingProduct.id}">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link
              js-delete-link-${matchingProduct.id}"
              data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
  `;
});

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    // duyet tung phuong thuc thanh toan phi van chuyen 
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        // 7 or 3 or 1 
        deliveryOption.deliveryDays,
        'days'
      );
      // dinh dang lai ngay giao 
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );

      // cost of ship 
      const priceString = deliveryOption.priceCents
        === 0
        ?
        'FREE' : `$${formartCurrency(deliveryOption.priceCents)} - `;

      const isChecked = deliveryOption.id ===
        cartItem.deliveryOptionId;

        // edit html delivery option 
      html += `       
  <div class="delivery-option js-delivery-option" 
  data-product-id="${matchingProduct.id}"
  data-delivery-option-id="${deliveryOption.id}"
  >
  <input type="radio" 
  ${isChecked ? 'checked' : ''}
  class="delivery-option-input"
    name="delivery-option-${matchingProduct.id}">
  <div>
    <div class="delivery-option-date">
      ${dateString}
    </div>
    <div class="delivery-option-price">
      $${priceString} Shipping
    </div>
  </div>
</div>`;
    });

    return html;
  }

  // render code html 3 option delivery vao div oder 
  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
  // ds sp trong cart : duyet tung sp nghe event click delete vao sp cart -> remove 
  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      // ham luu lai sp != productId vao cart (delete productId) 
      removeFromCart(productId);
      // lay element chua product can delete 
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      // delete element 
      container.remove();

      renderPaymentSummary();
    });
  });

  // duyet qua tung(nut) lua chon delivery , click vao option -> updateId
  document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
      // const productId = element.dataset.productId;
      // const deliveryOptionId = element.dataset.deliveryOptionId;
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
