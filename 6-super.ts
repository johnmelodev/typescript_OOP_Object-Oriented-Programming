class Animal {
  constructor(protected nome: string) {}

  fazerSom() {
    return "Som genérico";
  }
}

class Cachorro extends Animal {
  constructor(
    nome: string,
    public raca: string,
  ) {
    // 1. super() aqui 'nasce' o Animal dentro do Cachorro
    super(nome);
  }

  fazerSom() {
    // 2. super.fazerSom() pega o texto do pai e adiciona o 'Au Au'
    return (
      super.fazerSom() +
      " -> Au Au! " +
      "aqui é só o this " +
      this.nome +
      " aqui é o super " +
      this.raca
    );
  }
}

const meuPet = new Cachorro("Rex", "Poodle");
console.log(meuPet.fazerSom()); // "Som genérico -> Au Au!"
