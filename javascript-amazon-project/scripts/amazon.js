import { loadProducts, products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { card } from "../data/card-class.js";

// Ensure this function is defined before you call loadProducts
function loadProductsGrid() {
    let productsHTML = '';

    products.forEach((product) => {
        productsHTML += `
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image" src="${product.image}">
                </div>
                <div class="product-name limit-text-to-2-lines">${product.name}</div>
                <div class="product-rating-container">
                    <img class="product-rating-stars" src="${product.getImageURL()}">
                    <div class="product-rating-count link-primary">${product.rating.count}</div>
                </div>
                <div class="product-price">$${product.getProductPrice()}</div>
                <div class="product-quantity-container">
                    <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <!-- More options... -->
                    </select>
                </div>
                ${product.extraInfoHTML()}
                <div class="product-spacer"></div>
                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png"> Added
                </div>
                <button class="add-to-cart-button button-primary js-add-to-card" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;
    });

    document.querySelector('.js-products-grid').innerHTML = productsHTML;
    document.querySelectorAll('.js-add-to-card').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const quantitySelect = button.parentElement.querySelector('.product-quantity-container select');
            const quantity = parseInt(quantitySelect.value, 10);

            card.addToCard(productId, quantity);
            card.updateCardQuantity();
        });
    });
}

// Ensure you call loadProducts with loadProductsHTML
loadProducts(loadProductsGrid);
