class Cart{
    #cart
    constructor(){
        this.#cart=[]
    }
    DeleteProduct(indexCart){
        this.#cart.splice(indexCart,1)
    }
    AddCart(productQuantityCart){
        this.#cart.push(productQuantityCart)
    }
    List(){
        return this.#cart
    }
    UpdateCart(idCart,newQuantity){
        this.#cart[idCart].ChangeQuantity(newQuantity)
    }
    CheckCart(name){
        let exist = false
        this.#cart.forEach(element => {
            if (element.ShowProduct().ShowName()==name) {
                exist=true
                return exist
            }
        });
        return exist
    }
}
export default Cart