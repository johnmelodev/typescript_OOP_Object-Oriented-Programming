class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

class Cart {
  constructor(public items: Product[] = []) {}

  addItem(product: Product): void {
    this.items.push(product);
  }

  getItem() {
    console.log(this.items);
  }
}

const produto1 = new Product("pente", 12.0);
const produto2 = new Product("escova", 4.0);

const carrinho = new Cart();

carrinho.addItem(produto1);
carrinho.addItem(produto2);

carrinho.getItem();

console.log(carrinho.items[0].name);
