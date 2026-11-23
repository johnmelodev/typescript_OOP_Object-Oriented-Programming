// A classe pai é um MOLDE (Abstrata)
abstract class Pessoa {
  constructor(public nome: string) {}

  // Método COMUM: Todos herdam igual
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }

  // MÉTODO ABSTRATO: Não tem corpo.
  // Obriga o filho a decidir como calcular seu score.
  abstract calcularScore(): number;
}

class Aluno extends Pessoa {
  // O Aluno é OBRIGADO a implementar o calcularScore
  calcularScore(): number {
    return 10; // Lógica específica do aluno
  }
}

class Professor extends Pessoa {
  // O Professor também é OBRIGADO, mas a lógica é outra
  calcularScore(): number {
    return 100; // Lógica específica do professor
  }
}

// --- TESTANDO ---
// const alguem = new Pessoa("Carlos"); // ERRO! Não pode instanciar classe abstrata.

const aluno = new Aluno("João");
aluno.apresentar(); // "Olá, meu nome é João"
console.log(aluno.calcularScore()); // 10
