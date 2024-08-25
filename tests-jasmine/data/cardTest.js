import { addToCard, card , loadFromStorage } from "../../javascript-amazon-project/data/card.js";

describe('test suite: addToCart',()=>{
    it('adds an existing product to the card',()=>{
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([
                {
                    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity:1,
                    deliveryOptionId:'1'
                }
            ])
        });
        loadFromStorage();
        addToCard('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(card.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(card[0].quantity).toEqual(2);
    });


    it('adds a new product to the card',()=>{

        spyOn(localStorage,'setItem')

        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
       
        loadFromStorage();

        addToCard('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(card.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    }); 
})