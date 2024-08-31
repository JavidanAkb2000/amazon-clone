import { card } from "../../../javascript-amazon-project/data/card-class.js";
import { loadProducts } from "../../../javascript-amazon-project/data/products.js";
import { renderOrderSummary } from "../../../javascript-amazon-project/scripts/checkout/orderSummary.js";

describe('test suite: renderOrderSummary', () => {
    let firstProduct;

    beforeEach((done) => {
        // Ensure the container is empty before each test
        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
        `;

        // Mock localStorage to return specific cart items
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

        // Load products asynchronously and then call done to signal that the async setup is complete
        loadProducts(() => {
            card.loadFromStorage();
            done();
        });
    });

    it('displays the cart', (done) => {
        renderOrderSummary();

        // Wait for the DOM to be updated with the rendered order summary
        setTimeout(() => {
            expect(document.querySelectorAll('.js-cart-item-container-test').length).toEqual(2);
            
            // Correct the selector to ensure it targets the correct element
            const quantityElement = document.querySelector(`.js-cart-item-container-${firstProduct} .product-quantity .quantity-label`);
            expect(quantityElement.innerText).toContain('2');
            
            // Signal that the test is complete
            done();
        }, 100); // Adjust timeout as needed to allow enough time for rendering
    });
});
