class Transactions{
    #listTransaction
    constructor(){
        this.#listTransaction=[];
    }
    AddTransaction(transaction){
        this.#listTransaction.push(transaction)
    }
    ShowTransaction(){
        return this.#listTransaction.map((p,i)=>`${i+1}.${p.ShowProduct()} ${p.ShowTotalQuantity()} Rp.${p.ShowPrice()} Rp.${p.ShowTotalPrice()}`).join("\n")
    }
}
export default Transactions