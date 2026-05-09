// 1. Criando o Type Alias 'ID'
// Este apelido diz que qualquer coisa do tipo ID pode ser string OU number
type ID = string | number;

// 2. Usando o Type Alias em uma variável
// A variável 'id' só aceitará valores que respeitem a regra definida no tipo ID
let id: ID = "dfsd";
console.log(typeof id);

// 3. Usando o Type Alias em uma função
// A função 'findById' recebe um parâmetro 'id' do tipo ID
// e também especifica que o retorno da função será do tipo ID
function findById(id: ID): ID {
  return id;
}

// Exemplos de uso da função:
// Aceita número (porque ID permite number)
console.log(findById(1));

// Aceitaria string também (porque ID permite string)
// console.log(findById("abc-123"));

export {};
