// --- SEÇÃO: NUMBERS ---
// No TypeScript, o tipo 'number' é versátil e engloba inteiros, decimais e hexadecimais.
let name_var: number = 321; // Tipagem explícita como número.

name_var = 123; // Aceita um novo valor inteiro.
name_var = 1.2; // Aceita números de ponto flutuante (decimais).
name_var = 0xfa; // Aceita valores hexadecimais.

console.log(name_var); // No console, imprimirá o valor final (250 em decimal).

// --- SEÇÃO: BOOLEANO ---
// Representa valores lógicos: verdadeiro ou falso.
let active: boolean = true;

// --- SEÇÃO: STRING ---
// O instrutor mostra a inferência de tipo e o uso de Template Strings.
let firstName = "Carlos"; // Aqui o TS infere automaticamente que é string.
let lastName = "Ferreira"; // O mesmo ocorre aqui.

// Uso de Template Strings (com crase e ${}) para concatenar variáveis.
let fullName: string = `${firstName} ${lastName}`;

// --- SEÇÃO: ENUMS ---
// Enums permitem criar um conjunto de constantes nomeadas, facilitando a leitura do código.
// Aqui, o instrutor define cargos (ROLES) com valores de string específicos.
enum ROLES {
  MANAGER = "manager",
  ADMIN = "Admin",
  CEO = "CEO",
  CTO = "CTO",
}

/**
 * Exemplo de uso de Enum em funções:
 * A função setRole só aceita como argumento um dos valores definidos no enum ROLES.
 * O tipo 'void' indica que a função executa uma ação mas não retorna nenhum valor.
 */
function setRole(role: ROLES): void {
  return console.log(ROLES.ADMIN);

  // Lógica da função aqui
}

// Chamada correta da função utilizando o Enum:
setRole(ROLES.CEO);

// --- SEÇÃO: ARRAYS ---
/** * Existem várias formas de declarar arrays.
 * O instrutor compara a tipagem flexível (JS) com a rígida (TS).
 */

// 1. Tipagem por Inferência (Misturada):
// O TS infere que este array pode conter strings, booleanos ou números.
let names = ["Carlos", "Eti", "EspecializaTi", true, 1];

// 2. Tipagem Rígida (Sintaxe de colchetes):
// Garante que o array contenha APENAS strings.
let names1: string[] = ["Carlos", "Eti"];

// 3. Tipagem Rígida (Sintaxe Genérica - Array<tipo>):
// Funciona exatamente como a de cima, é apenas uma questão de preferência visual.
let names2: Array<string> = ["Carlos", "Eti"];

// 4. Tipagem com 'any' (Qualquer tipo):
// Usar Array<any> faz com que o TypeScript ignore a verificação de tipo dentro da lista.
// Permite misturar tipos como no JavaScript puro, mas perde-se a segurança do TS.
let names3: Array<any> = ["Carlos", "Eti", true, 0xfa];

let arrayTeste: Array<string> = ["oi", "tchau", "tudo"];

let arrayQualquer: Array<any> = ["oi", 4, true];
