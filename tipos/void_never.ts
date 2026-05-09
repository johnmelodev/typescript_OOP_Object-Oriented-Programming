// Void, quando a funcao nao deve retornar nada, pode usar o return solitario, apenas para para a execucao

// Never nunca pode retornar absolutamente nada, pode dar console log e throw new error

const showLog = (message: string): void => {
  console.log(message);
  return; // Permitido para encerrar a função, mas não retorna valor.
};
showLog("test void");

function showLogAndException(message: string): never {
  console.log(message);
  // Lança um erro, interrompendo a execução antes de qualquer retorno.
  throw new Error("Example never");
}
