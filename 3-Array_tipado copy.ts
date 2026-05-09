class Car {
  constructor(
    public name: string,
    public year: number,
  ) {}
}

class Montadora {
  constructor(public items: Car[] = []) {}

  addItem(car: Car): void {
    this.items.push(car);
  }

  getItem() {
    console.log(this.items);
  }
}

const car1 = new Car("gol", 1990);
const car2 = new Car("celta", 1995);

const montadora = new Montadora();

montadora.addItem(car1);
montadora.addItem(car2);

montadora.getItem;
