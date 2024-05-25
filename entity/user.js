import Cart from "./cart.js"
import Transactions from "./transactions.js"
import Transaction from "./transaction.js"
import ProductQuantiyCart from "./productquantitycart.js"
function clearScreen() {
    console.clear();
  }  
class User{
    #username
    #cart
    #transactions
    #balance
    constructor(username,balance){
        this.#balance=balance
        this.#username=username
        this.#cart=new Cart
        this.#transactions= new Transactions
    }
    AddCart(productQuantityCart){
        if (this.#cart.CheckCart(productQuantityCart.ShowProduct().ShowName())) {
            return console.log("product already in cart plase update cart")
        }
        this.#cart.AddCart(productQuantityCart)
        return console.log("successfully added");
    }
    ListCart(){
        let dataCart=this.#cart.List()
        console.log(dataCart.map((p,i)=>`${i+1}.${p.ShowProduct().ShowName()} ${p.ShowProduct().ShowSize?`size : ${p.ShowProduct().ShowSize()}`:`expired : ${p.ShowProduct().ShowExpired()}`} price:${p.ShowProduct().ShowPrice()} quantity : ${p.ShowQuantity()}`).join("\n"))
        return dataCart
    }
    UpdateCart(idCart,newQuantity){
        this.#cart.UpdateCart(idCart,newQuantity)
        return console.log("successfully updated");
    }
    DeleteFromCart(idCart){
        this.#cart.DeleteProduct(idCart)
        return console.log("successfully Deleted");
    }
    ShowName(){
        return this.#username
    }
    Buy(productQuantityCart,productQuantity){
        let price = productQuantityCart.ShowProduct().ShowPrice()*parseInt(productQuantity)
        let totalPrice=price+(price*0.1)
        if (this.#balance<totalPrice) {
            console.log("insufficient balance cause you shoul pay tax");
            return false
        }
        if (productQuantityCart.ShowQuantity()>productQuantity) {
            console.log("no stock");
            return false
        }
        if(this.#cart.CheckCart(productQuantityCart.ShowProduct().ShowName())){
            let index=this.#cart.List().indexOf(productQuantityCart)
            this.DeleteFromCart(index)
        }
        this.#balance-=productQuantityCart.ShowProduct().ShowPrice()
        let transaction= new Transaction(productQuantityCart.ShowProduct().ShowName(),productQuantityCart.ShowQuantity(),productQuantityCart.ShowProduct().ShowPrice(),totalPrice)
        this.#transactions.AddTransaction(transaction)
        return true
    }
    ShowTransaction(){
        console.log(this.#transactions.ShowTransaction());
    }
    Exit(){
        return console.log(`thank you ${this.#username}`);
    }
    ShowBalance(){
        return this.#balance
    }
}
export default User