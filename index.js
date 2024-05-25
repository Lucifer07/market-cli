import Products from "./entity/products.js";
import User from "./entity/user.js";
import readline from 'readline';
import ProductQuantiyCart from "./entity/productquantitycart.js";

function clearScreen() {
    console.clear();
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

let products = new Products();
products.CreateProduct("hoddie", 1000, 1, 25, null);
products.CreateProduct("jersey", 10000, 10, 25, null);
products.CreateProduct("mie", 10000, 10, null, "2023");
products.CreateProduct("bakso", 10000, 10, null, "2023");
products.CreateProduct("pangsit", 10000, 10, null, "2023");

let name = await askQuestion("what is your name : ");
let user = new User(name, 100000);
let start = true;

let question = `
  Hi ${user.ShowName()}
  Please choose an activity :
  1. Products List
  2. My Cart
  3. My Transaction
  4. My balance
  5. Exit
  `;

let question2 = `
  1. Buy
  2. Add to Cart
  3. Back
  `;



while (start) {
    console.log(question);
    let opt1 = parseInt(await askQuestion("select : "));
    switch (opt1) {
        case 1:
            clearScreen()
            products.ShowProducts()
            let opt2 = parseInt(await askQuestion("select :"))
            if (opt2 < 1 || opt2 > products.ListPoduct().length || isNaN(opt2)) {
                console.log("invalid answer");
                clearScreen()
                break
            }
            let pickedProduct = products.ListPoduct()[opt2 - 1]
            clearScreen()
            console.log(question2);
            let opt3 = parseInt(await askQuestion("select : "))
            switch (opt3) {
                case 1:
                    clearScreen()
                    let opt4 = parseInt(await askQuestion("insert quantity : "))
                    if (opt4 != NaN) {
                        let prodQuantity = new ProductQuantiyCart(pickedProduct.ShowProduct(), opt4)
                        let res = user.Buy(prodQuantity, pickedProduct.ShowQuantity())
                        if (res) {
                            pickedProduct.ChangeQuantity(pickedProduct.ShowQuantity() - opt4)
                        }
                        break
                    }
                    console.log("invalid input");
                    clearScreen()
                    break;
                case 2:
                    clearScreen()
                    let opt = await askQuestion("insert quantity : ")
                    if (parseInt(opt) != NaN) {
                        let prodQuantity = new ProductQuantiyCart(pickedProduct.ShowProduct(), opt)
                        user.AddCart(prodQuantity)
                        break
                    }
                    console.log("invalid input");
                    clearScreen()
                    break;
                case 3:
                    break
                default:
                    console.log("invalid answer");
                    break;
            }
            break;
        case 2:
            clearScreen()
            let cart = user.ListCart()
            let opt4 = parseInt(await askQuestion("pick cart : "))
            if (opt4 < 1 || opt4 > cart.length || isNaN(opt4)) {
                console.log("invalid answer");
                await askQuestion("press anything to back")
                break
            }
            console.log(`
            1.update cart
            2.delete cart
            3.checkout
            `);
            let opt5 = parseInt(await askQuestion("select : "))
            switch (opt5) {
                case 1:
                    let opt6 = parseInt(await askQuestion("insert new quantity : "))
                    if (!isNaN(opt6)) {
                        user.UpdateCart(opt4 - 1, opt6)
                    }
                    break;
                case 2:
                    user.DeleteFromCart(opt4 - 1)
                    break
                case 3:
                    let product = cart[opt4 - 1].ShowProduct()
                    let reqQuantity = cart[opt4 - 1].ShowQuantity()
                    let idProduct = products.CheckProduct(product)
                    let res = user.Buy(cart[opt4 - 1], products.ListPoduct()[idProduct].ShowQuantity())
                    if (res) {
                        products.ListPoduct()[idProduct].ChangeQuantity(products.ListPoduct()[idProduct].ShowQuantity() - reqQuantity)
                    }
                    break
                default:
                    console.log("invalid answer");
                    await askQuestion("press anything to back")
                    break;
            }
            await askQuestion("press anything to back")
            clearScreen()
            break
        case 3:
            clearScreen()
            user.ShowTransaction()
            await askQuestion("press anything to back")
            clearScreen()
            break
        case 4:
            console.log(user.ShowBalance());
            await askQuestion("press anything to back")
            clearScreen()
            break
        case 5:
            clearScreen()
            user.Exit()
            start = false
            break
        default:
            console.log("Invalid input. Please choose a valid option.");
            clearScreen()
            break;
    }
}