// VALIDACAO E RECICLAGEM DE OBJETOS

interface Casa {
  tijolos: number;
  materialPorta: string;
  varanda?: boolean;

  pintar?(): void;
}

const construir = (casa: Casa) => {
  if (casa.varanda) {
    const varanda = "varandona";
    console.log(
      `casa bonitona com ${varanda} e ${casa.tijolos} tijolos, com porta de ${casa.materialPorta}`,
    );
  } else {
    console.log(
      `casa simples com ${casa.tijolos} tijolos, com porta de ${casa.materialPorta}`,
    );
  }
};

let casona = {
  tijolos: 4000,
  materialPorta: "madeira mogno",
  varanda: true,
};

let casinha = {
  tijolos: 200,
  materialPorta: "madeira reciclada",
};

construir(casona);
construir(casinha);
