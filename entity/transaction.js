class Transaction{
    #product
    #totalQuantity
    #price
    #totalPrice
    constructor(product,totalQuantity,price,totalPrice){
        this.#product=product
        this.#totalQuantity=totalQuantity
        this.#price=price
        this.#totalPrice=totalPrice
    }
    ShowProduct(){
        return this.#product
    }
    ShowTotalQuantity(){
        return this.#totalQuantity
    }
    ShowPrice(){
        return this.#price
    }
    ShowTotalPrice(){
        return this.#totalPrice
    }
}
export default Transaction