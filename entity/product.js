class Product{
    #name
    #price
    constructor(name,price){
        this.#name=name
        this.#price=price
    }
    ShowPrice(){
        return this.#price
    }
    ShowName(){
        return this.#name
    }
}
class Cloths extends Product{
    #size
    constructor(name,price,size){
        super(name,price)
        this.#size=size
    }
    ShowPrice(){
        return super.ShowPrice()
    }
    ShowName(){
        return super.ShowName()
    }
    ShowSize(){
        return this.#size
    }
}
class Food extends Product{
    #expired
    constructor(name,price,expired){
        super(name,price)
        this.#expired=expired
    }
    ShowPrice(){
        return super.ShowPrice()
    }
    ShowName(){
        return super.ShowName()
    }
    ShowExpired(){
        return this.#expired
    }
}
export {Cloths,Food}