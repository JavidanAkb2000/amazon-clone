export const card = [];

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
