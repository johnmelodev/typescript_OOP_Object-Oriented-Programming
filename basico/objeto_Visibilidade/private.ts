// Todo intuito do private, é fazer voce usar ele pelo metodo dentro

class Cofre {
  constructor(
    private conteudo: string,
    private senhaCorreta: string = "1234",
  ) {}
  // 2. FUNCIONALIDADE (Método Público): A única forma de interagir.
  public abrirCofre(senhaDigitada: string): void {
    if (senhaDigitada === this.senhaCorreta) {
      console.log(`Cofre aberto! Você encontrou: ${this.conteudo}`);
    } else {
      console.log("Senha incorreta! Alarme disparado! 🚨");
    }
  }

  // 3. FUNCIONALIDADE (Método Público): Para trocar o item lá dentro.
  public trocarConteudo(novaSenha: string, novoItem: string): void {
    if (novaSenha === this.senhaCorreta) {
      this.conteudo = novoItem;
      console.log("Conteúdo atualizado com segurança.");
    }
  }
}

// --- TESTANDO AS OPÇÕES ---

const meuCofre = new Cofre("Diamante de 100 quilates");

meuCofre.trocarConteudo("1234", "Ouro Azul");

meuCofre.abrirCofre("1234");
