class Termometro {
  private _temperatura: number = 0;

  get temperatura() {
    return this._temperatura;
  }

  set temperatura(valor: number) {
    if (valor < 0) {
      console.log("nao aceitamos temp abaixo de zero");
    } else {
      this._temperatura = valor;
    }
  }
}

const meuTermo = new Termometro();

meuTermo.temperatura = 25;

console.log(meuTermo.temperatura); // Saída: 25

meuTermo.temperatura = -25;

console.log(meuTermo.temperatura);
