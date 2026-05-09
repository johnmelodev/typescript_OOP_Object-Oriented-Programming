// A função 'showLog' recebe um parâmetro 'message' do tipo 'any'.
// Isso significa que ela aceita QUALQUER tipo de dado como entrada.
// O retorno é 'void', indicando que a função não devolve nenhum valor.
const showLog = (message: any): void => {
  // Como é 'any', o TypeScript não vai reclamar se você tentar
  // tratar 'message' como string, número ou objeto.
  console.log(message);
};

// Exemplos de chamadas permitidas por causa do 'any':
showLog("test"); // String
showLog(123); // Number
showLog(true); // Boolean
showLog({ id: 1 }); // Object

export {};
