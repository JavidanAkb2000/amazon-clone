export let card;

loadFromStorage();

export function loadFromStorage(){
    card = JSON.parse(localStorage.getItem('card'));

if(!card){
    card = [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1'
    },
    {
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionId:'2'
    }];
}

}


function saveToStorage(){
    localStorage.setItem('card',JSON.stringify(card));
}


export function addToCard(productId){
    let matchingItem;

    card.forEach((cardItem)=>{
     if(productId===cardItem.productId){
         matchingItem=cardItem;
     }
    });

    if(matchingItem){
     matchingItem.quantity += 1;
    }else{
     card.push({
         productId,
         quantity:1,
         deliveryOptionId:'1'
        });
    }
    saveToStorage();
}


export function updateCardQuantity(){
    let cardQuantity = 0;

    card.forEach((cardItem)=>{
     cardQuantity+=cardItem.quantity;
    })

    document.querySelector('.js-card-quantity').innerHTML=cardQuantity;
}
export function deleteFromCard(productId){
    const newCart = [];
    card.forEach((item)=>{
        if(item.productId !== productId){
            newCart.push(item);
        }
    });

    card = newCart;
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
  
    card.forEach((cardItem) => {
      if (productId === cardItem.productId) {
        matchingItem = cardItem;
      }
    });
  
    // Add a check to see if matchingItem was found
    if (matchingItem) {
      matchingItem.deliveryOptionId = deliveryOptionId;
      saveToStorage();
    } else {
      console.error(`Product with ID ${productId} not found in the cart.`);
    }
  }
  
  export function loadCard(loadProductsGrid){
    const xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load',()=>{
   
    loadProductsGrid();
    });
    xhr.open('GET','https://supersimplebackend.dev/cart');
    xhr.send();
  }

 
