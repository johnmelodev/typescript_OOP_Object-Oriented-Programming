// ele implementa como se fosse um constructor ambulante

interface Lanche {
  ingredientes: string[];
  preparar(): void;
}

class Hamburguer implements Lanche {
  constructor(public ingredientes: string[]) {}

  preparar() {
    console.log("Grelhando a carne na chapa...");
  }
}

class CachorroQuente implements Lanche {
  constructor(public ingredientes: string[]) {}

  preparar() {
    console.log("Fervendo a salsicha na água...");
  }
}
