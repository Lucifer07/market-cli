class ProductQuantiyCart{
    #product
    #quantity
    constructor(product,quantity){
        this.#product=product
        this.#quantity=quantity
    }
    ShowProduct(){
        return this.#product
    }
    ShowQuantity(){
        return this.#quantity
    }
    ChangeQuantity(newQuantity){
        this.#quantity=newQuantity
        return
    }
}
export default ProductQuantiyCart