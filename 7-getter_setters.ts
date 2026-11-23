class Banco {
  constructor(
    private contaID: number,
    private extrato: number,
    public nome: string,
  ) {}

  getConta() {
    return `${this.contaID} ID da conta com ${this.extrato} reais`;
  }

  setConta(salario: number) {
    return `Esse mes a ${this.nome} recebeu ${salario} de salario e seu saldo bancario aumento para ${(this.extrato += salario)} reais`;
  }
}

const Neuza = new Banco(12412421, 110000, "Neuza");

console.log(Neuza.getConta());
console.log(Neuza.setConta(3500));
console.log(Neuza.getConta());
