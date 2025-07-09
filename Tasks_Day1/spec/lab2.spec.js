const User=require('../lab2');

describe('Test user class',()=>{
    let user1;
    beforeEach(()=>{
     user1 =new User('Amira', "123" )
     user1.addToCart({'name':"pen" , 'price':10})
    })
    it('Test addToCart',()=>{
        expect(user1.cart).toEqual([{ 'name': "pen", 'price': 10 }])
})
    it('test the cart array total price.',()=>{
        user1.calculateTotalCartPrice();
        expect(user1.cart[0].price).toBe(10)
    })

    it('test checkout: paymentModel methods should be called',()=>{
        let obj = jasmine.createSpyObj(["goToVerifyPage", "returnBack","isVerify"])
        obj.goToVerifyPage.and.returnValue()
        obj.returnBack.and.returnValue()
        obj.isVerify.and.returnValue()

        user1.checkout(obj);

        expect(obj.goToVerifyPage).toHaveBeenCalled();
        expect(obj.returnBack).toHaveBeenCalled();
        expect(obj.isVerify).toHaveBeenCalled();
    })
    it('checkout should return true if payment is verified', () => {
        let obj = jasmine.createSpyObj(["goToVerifyPage", "returnBack", "isVerify"]);
        obj.goToVerifyPage.and.returnValue();
        obj.returnBack.and.returnValue();
        obj.isVerify.and.returnValue(true);

        const result = user1.checkout(obj);
        expect(result).toBeTrue();
    });
})


