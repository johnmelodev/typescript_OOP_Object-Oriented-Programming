// Usar os types para criar atalhos simples que diminuem a verbosidade de uma interface union type Status = "ativo" | "inativo"

type cestaDeFrutas = {
  nomeDaFruta: string;
  estaMadura: boolean;
};

type sucoPronto = {
  idDoLote: number;
  sabor: string;
  dataDeValidade: string;
};

type Codigo = string | number;

interface maquinaDeSucos {
  fazerSuco(ingredientes: cestaDeFrutas): sucoPronto;
  buscarSucoNoEstoque(id: Codigo): sucoPronto;
}

// MÁQUINA RUIM (Sem usar types)
interface MaquinaDeSucosRuim {
  fazerSuco(ingredientes: { nomeDaFruta: string; estaMadura: boolean }): {
    idDoLote: number;
    sabor: string;
    dataDeValidade: string;
  };

  buscarSucoNoEstoque(id: string | number): {
    idDoLote: number;
    sabor: string;
    dataDeValidade: string;
  };
}
