// function Cart(localStorageKey){
//     const card = {
//         cardItems:undefined,
    
//         loadFromStorage(){
//             this.cardItems = JSON.parse(localStorage.getItem(localStorageKey));
    
//             if(!this.cardItems){
//                 this.cardItems = [{
//                     productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//                     quantity:2,
//                     deliveryOptionId:'1'
//                 },
//                 {
//                     productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
//                     quantity:1,
//                     deliveryOptionId:'2'
//                 }];
//             }
//         },
        
    
//         saveToStorage(){
//             localStorage.setItem(localStorageKey,JSON.stringify(this.cardItems));
//         },
    
//         addToCard(productId){
//             let matchingItem;
        
//             this.cardItems.forEach((cardItem)=>{
//              if(productId===cardItem.productId){
//                  matchingItem=cardItem;
//              }
//             });
        
//             if(matchingItem){
//              matchingItem.quantity += 1;
//             }else{
//              this.cardItems.push({
//                  productId,
//                  quantity:1,
//                  deliveryOptionId:'1'
//                 });
//             }
//             this.saveToStorage();
//         },
    
//         deleteFromCard(productId){
//             const newCart = [];
//             this.cardItems.forEach((item)=>{
//                 if(item.productId !== productId){
//                     newCart.push(item);
//                 }
//             });
        
//             this.cardItems = newCart;
//             this.saveToStorage();
//         },
    
//         updateCardQuantity(){
//             let cardQuantity = 0;
        
//             card.cardItems.forEach((cardItem)=>{
//              cardQuantity+=cardItem.quantity;
//             })
        
//             document.querySelector('.js-card-quantity').innerHTML=cardQuantity;
//         },
    
//         updateDeliveryOption(productId, deliveryOptionId) {
//             let matchingItem;
          
//             card.cardItems.forEach((cardItem) => {
//               if (productId === cardItem.productId) {
//                 matchingItem = cardItem;
//               }
//             });
          
//             // Add a check to see if matchingItem was found
//             if (matchingItem) {
//               matchingItem.deliveryOptionId = deliveryOptionId;
//               this.saveToStorage();
//             } else {
//               console.error(`Product with ID ${productId} not found in the cart.`);
//             }
//           }
//     };

//     return card;
// }

// // const card = Cart('card-oop');
// // const businessCart = Cart('card-business');

// // card.loadFromStorage();
// // businessCart.loadFromStorage();
// // businessCart.addToCard('77a845b1-16ed-4eac-bdf9-5b591882113d');


// // console.log(card);
// // console.log(businessCart);




