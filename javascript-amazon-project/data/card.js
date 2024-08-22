export const card = [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
},
{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
}];

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
         quantity:1
        });
    }
    
}

export function updateCardQuantity(){
    let cardQuantity = 0;

    card.forEach((cardItem)=>{
     cardQuantity+=cardItem.quantity;
    })

    document.querySelector('.js-card-quantity').innerHTML=cardQuantity;
}
