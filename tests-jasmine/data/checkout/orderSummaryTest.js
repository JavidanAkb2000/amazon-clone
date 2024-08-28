import { card } from "../../../javascript-amazon-project/data/card-class.js";
import { loadFromStorage } from "../../../javascript-amazon-project/data/card.js";
import { renderOrderSummary } from "../../../javascript-amazon-project/scripts/checkout/orderSummary.js";

describe('test suite: renderOrderSummary', () => {
    let firstProduct;

    it('displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
        `;

        firstProduct = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productId: firstProduct,
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId: '2'
                }
            ]);
        });

        card.loadFromStorage();
        card.renderOrderSummary();

        expect(document.querySelectorAll('.js-cart-item-container-test').length).toEqual(2);
        
        // Correct the selector to ensure it targets the correct element
        const quantityElement = document.querySelector(`.js-cart-item-container-${firstProduct} .product-quantity .quantity-label`);
        expect(quantityElement.innerText).toContain('2');
    });
});
