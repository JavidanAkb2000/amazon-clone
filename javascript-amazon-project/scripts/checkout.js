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
   
   try {
    await loadProductsFetch();

   await new Promise((resolve,reject)=>{
    loadCard(()=>{
        //reject();
        resolve();
    });
});
   } catch (error) {
    console.log('Unexpected error please try again later',error);
   }

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