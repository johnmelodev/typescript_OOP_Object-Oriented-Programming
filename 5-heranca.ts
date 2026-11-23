class Veiculo {
  constructor(protected modelo: string) {}

  public buzinar() {
    console.log("BEEEEEEEEEEEEEEEH");
  }
}

class Carro extends Veiculo {
  acelerar() {
    console.log(this.modelo + " " + "voando a 100km");
  }
}

// POLIMORFISMO

class Moto extends Veiculo {
  buzinar() {
    console.log(this.modelo + " " + "deeeendeeed");
  }
}

const meuCarro = new Carro("gol");
const minhaMoto = new Moto("suzukona");

console.log(meuCarro.buzinar());
console.log(meuCarro.acelerar());
console.log(minhaMoto.buzinar());
