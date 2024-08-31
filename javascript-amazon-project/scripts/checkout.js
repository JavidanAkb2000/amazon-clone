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

async function loadPage(){
   
   await loadProductsFetch();

   await new Promise((resolve)=>{
    loadCard(()=>{
        resolve();
    });
});

renderOrderSummary();
renderPaymentSummary();

}

loadPage();


/*
Promise.all([
    new Promise((resolve)=>{
      loadProducts(()=>{
        resolve();
        })    
    }),
    new Promise((resolve)=>{
        loadCard(()=>{
            resolve();
        });
    })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

*/