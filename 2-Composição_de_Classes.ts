class Product {
  constructor(
    public title: string,
    public price: number,
    public category: Category,
  ) {}
}

class Category {
  constructor(
    public serie: number,
    public modelo: string,
  ) {
    console.log(
      "opcional e só aparece quando uma nova instancia é criada, ou seja o New",
    );
  }
}
const categoria = new Category(1, "legging");
const produto1 = new Product("calca", 12, categoria);
