import { loadCard } from "../data/card.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve();
//     });
// }).then(()=>{
   
// })



Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCard(()=>{
            resolve();
        });
    })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})