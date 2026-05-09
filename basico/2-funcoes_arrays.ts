// nessa parte depois do parametro, significa o retorno que a funcao vai dar

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(1, 2));

const applyDiscount = (a: number, b: number, tax: number): number => {
  return 13;
};

// usando tipo

const addWithOptionalTax = function (
  cost1: number,
  cost2: number,
  tax?: number,
): number {
  if (typeof tax != "undefined") {
    return (cost1 + cost2) * tax;
  } else {
    return cost1 + cost2;
  }
};

const somaFrutasId = (frutas: number[]): number => {
  let inicial: number = 0;

  frutas.forEach((fruta) => {
    inicial += fruta;
  });

  return inicial;
};

const minhasfrutas = [1, 4, 5, 6];
const resultadoFrutas = somaFrutasId(minhasfrutas);

console.log(resultadoFrutas);
