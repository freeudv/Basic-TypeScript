interface Product {
    name: string,
    price: number,
    qty: number
}

interface Cart {
    length: number,
    total: number,

    addProduct: (item: Product) => Cart,
    add: (name:string, price:number, qty:number) => Cart;
}

function  createCart():Cart {
    const products: Product[] = [];

    return {
        get length() {
            return products.reduce((acc, i) => acc + i.qty, 0);
        },
        get total() {
            return products.reduce((acc, i) => acc + i.price, 0);
        },
        addProduct(product) {
            products.push(product);
            return this;
        },
        add(name, price, qty) {
            products.push({name, price, qty});
            return this;
        }
    };
};

const cart = createCart();

const iphone:Product = {
    name: 'iPhone',
    price: 700,
    qty: 3
}
const samsung:Product = {
    name: 'Sumsung',
    price: 600,
    qty: 7
}

cart.addProduct(iphone).addProduct(samsung).add('Nokia', 300, 2)

console.log(cart.length);
console.log(cart.total);