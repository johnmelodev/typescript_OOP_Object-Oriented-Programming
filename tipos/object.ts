/**
 * MANUAL DE OBJETOS NO TYPESCRIPT
 */

// 1. DEFINIÇÃO DA ESTRUTURA (O Contrato)
// Aqui nós dizemos ao TS exatamente quais gavetas o objeto tem e o que cabe em cada uma.
let employee: {
  firstName: string; // Só aceita texto
  lastName: string; // Só aceita texto
  score: number; // Só aceita números
  isActive: boolean; // Só aceita true ou false
};

// 2. ATRIBUIÇÃO DOS VALORES
// Agora preenchemos o objeto seguindo à risca o que foi definido acima.
employee = {
  firstName: "Carlos",
  lastName: "Ferreira",
  score: 900,
  isActive: false, // Se colocasse um número aqui (como 12), o TS daria erro.
};

// 3. ACESSANDO OS DADOS
// Como o TS já conhece a estrutura, ele nos dá auto-complete (IntelliSense) aqui.
console.log(employee.firstName); // Saída: Carlos
console.log(employee.score); // Saída: 900

// 4. MUDANDO UM VALOR
// Podemos alterar os valores, desde que respeitem o tipo original.
employee.score = 1000; // ✅ OK: 1000 é um número.
// employee.score = "Mil"; // ❌ ERRO: "Mil" é uma string e o score exige number.

console.log(employee);
