// podemos criar uma variavel que pode receber os tipos filtrados que colocamos apenas

let codigoUser: number | string;

codigoUser = 121331;
codigoUser = "121331asdasdadadnvi";

function findUser(codigoUser: number | string): number | string {
  return codigoUser;
}
