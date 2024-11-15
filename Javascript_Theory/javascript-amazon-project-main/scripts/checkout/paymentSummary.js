import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOption.js';
import { formartCurrency } from '../utils/money.js';

// Ham tinh tien sp 
export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {
        // price get in Products list / quantity get in Cart list 
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        //   lay phuong thuc giao hang ma user da chon 
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        //   thanh toan tien ship 
        shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML = `
<div class="payment-summary-title">
Order Summary
</div>

<div class="payment-summary-row">
<div>Items (3):</div>
<div class="payment-summary-money">$${formartCurrency(productPriceCents)}</div>
</div>

<div class="payment-summary-row">
<div>Shipping &amp; handling:</div>
<div class="payment-summary-money">$${formartCurrency(shippingPriceCents)}</div>
</div>

<div class="payment-summary-row subtotal-row">
<div>Total before tax:</div>
<div class="payment-summary-money">$${formartCurrency(totalBeforeTaxCents)}</div>
</div>

<div class="payment-summary-row">
<div>Estimated tax (10%):</div>
<div class="payment-summary-money">$${formartCurrency(taxCents)}</div>
</div>

<div class="payment-summary-row total-row">
<div>Order total:</div>
<div class="payment-summary-money">$${formartCurrency(totalCents)}</div>
</div>

<button class="place-order-button button-primary">
Place your order
</button>`;
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}

