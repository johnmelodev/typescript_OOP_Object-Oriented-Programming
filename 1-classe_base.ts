class User {
  // Propriedades da classe
  name: string;
  email: string;
  active: boolean;
  bio?: string; // O '?' torna o campo opcional (pode ser undefined)

  // No construtor, definimos o que é obrigatório e o que tem valor default
  constructor(
    name: string,
    email: string,
    active: boolean = false, // Valor default: se não for passado, vira false
    bio?: string, // Parâmetro opcional (não precisa passar nada)
  ) {
    this.name = name;
    this.email = email;
    this.active = active;
    this.bio = bio;
  }

  metodo() {
    console.log(User.name);
  }
}

// 1. Criando usuário apenas com o obrigatório (active assumirá false, bio será undefined)
const user1 = new User("Carlos", "carlos@email.com");

// 2. Criando usuário alterando o valor default (active vira true)
const user2 = new User("Ana", "ana@email.com", true);

// 3. Criando usuário preenchendo todos os campos, inclusive o opcional
const user3 = new User(
  "Pedro",
  "pedro@email.com",
  false,
  "Desenvolvedor Fullstack",
);

// Testando os resultados
console.log(user1);
// Saída: { name: 'Carlos', email: 'carlos@email.com', active: false, bio: undefined }

console.log(user2);
// Saída: { name: 'Ana', email: 'ana@email.com', active: true, bio: undefined }

console.log(user3);
// Saída: { name: 'Pedro', email: 'pedro@email.com', active: false, bio: 'Desenvolvedor Fullstack' }
