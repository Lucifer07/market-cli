import {Cloths,Food} from "./product.js"
import ProductQuantiy from "./productquantity.js"
class Products{
    #products
    constructor(){
    this.#products=[]
    }
    CreateProduct(name,price,quantity,size,expired){
        let product
        if (size) {
           product= new Cloths(name,price,size)
           let productQuantity= new ProductQuantiy(product,quantity)
           this.#products.push(productQuantity)
           return
        }
        product=new Food(name,price,expired)
        let productQuantity= new ProductQuantiy(product,quantity)
        this.#products.push(productQuantity)
        return
    }
    ListPoduct(){
        return this.#products
    }
    ShowProducts(){
        console.log(this.#products.map((p,i)=>`${i+1}.${p.ShowProduct().ShowName()} ${p.ShowProduct().ShowSize?`size : ${p.ShowProduct().ShowSize()}`:`expired : ${p.ShowProduct().ShowExpired()}`} price:${p.ShowProduct().ShowPrice()} stock : ${p.ShowQuantity()}`).join("\n"));
    }
    CheckProduct(product){
        for (let index = 0; index < this.#products.length; index++) {
            const element = this.#products[index];
            if (element.ShowProduct()==product) {
                return index
            }
        }
        return null
    }
}

export default Products