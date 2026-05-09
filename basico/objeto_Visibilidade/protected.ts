// O protected só pode ser acessado por outra classe que extende ela

class Conta {
  // PROTECTED: O saldo é segredo para quem está fora,
  // mas os "filhos" (outras contas) podem acessar para fazer cálculos.
  constructor(
    public titular: string,
    protected saldo: number,
  ) {}

  public verSaldo(): void {
    console.log(`Titular: ${this.titular} | Saldo: R$${this.saldo}`);
  }
}

// classe filha, que faz contas com os atributos da classe pai

class Poupanca extends Conta {
  private rendimento: number = 0.05; // 5% de juros

  public aplicarJuros(): void {
    // Se 'saldo' fosse PRIVATE, a linha abaixo daria ERRO.
    // Como é PROTECTED, a Poupanca consegue acessar o saldo do pai.
    this.saldo += this.saldo * this.rendimento;
    console.log("Juros aplicados com sucesso! " + this.saldo);
  }
}

const verRendimentos = new Poupanca("joao", 100000);

verRendimentos.aplicarJuros();
