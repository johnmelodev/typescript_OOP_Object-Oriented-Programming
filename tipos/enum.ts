enum Padaria {
  pao = "pao",
  batata = "batata",
  bolo = "bolo",
  salgados = "salgados",
}

const compra = (produtos: Padaria) => {
  console.log(`fui na padaria precisava comprar ${produtos}`);
};

compra(Padaria.pao);
