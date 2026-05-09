// é o CPF, é criado e mais nada pode o mudar

//Onde o readonly brilha?
//Segurança de Configuração: Chaves de API, URLs de servidores ou IDs de banco de dados.
// Coisas que, se mudarem com o sistema rodando, quebram tudo.

class Cidadao {
  // READONLY: Pode ser público ou privado, mas NUNCA muda após o constructor.
  constructor(
    public readonly cpf: string,
    public nome: string,
  ) {}

  public alterarNome(novoNome: string) {
    this.nome = novoNome; // ✅ FUNCIONA: 'nome' é comum.
  }

  public tentarMudarCPF(novoCpf: string) {
    // this.cpf = novoCpf;
    // ❌ ERRO: "Cannot assign to 'cpf' because it is a read-only property."
  }
}

const joao = new Cidadao("123.456.789-00", "Joao Melo");

console.log(joao.nome);
joao.alterarNome("john");
joao.tentarMudarCPF("12321321");
console.log(joao.nome);
console.log(joao.cpf);
// Tentando mudar "da rua":
// joao.cpf = "000.000.000-99";
// ❌ ERRO: O TypeScript trava na hora.
