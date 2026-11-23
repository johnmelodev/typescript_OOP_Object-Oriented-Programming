// 1. O Contrato (A regra)
interface IFruta {
  nome: string;
  preco: number;
}

// 2. A Função (O fiscal que só exige o contrato)
function vender(item: IFruta) {
  console.log(`Vendendo ${item.nome} por R$ ${item.preco}`);
}

// --- FORMAS DE USAR ---

// A) Objeto Simples (Se tem o que eu pedi, eu aceito)
vender({ nome: "Maçã", preco: 5 });

// B) Via Classe (A classe se obriga a seguir a regra)
class Banana implements IFruta {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

vender(new Banana("Banana Nanica", 3));
