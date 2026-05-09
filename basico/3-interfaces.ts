// é um contrato do tipo. sera necessario ter os valores para funcionar

// sempre garantir que tenham todas as propriedades quando alguem utilizar essa interface, ou seja se formos mexer com um usuario precisamos declarar todos os parametros

// A interface não gera código no JavaScript. Ela só serve para validar caso tenha algum erro nas tipagens definidas do usuário

//Caso tenhamos funções no sistema que lidam com o usuário o tempo todo, se a gente criar a interface usuário, a gente sempre vai ter a tipagem correta sem ter que ficar repetindo toda hora

interface usuarioInterface {
  id: number;
  nome: string;
  email: string;
  idade?: number; // O '?' indica que este campo é opcional
}

const mostrarDadosUsuario = (usuario: usuarioInterface) => {
  console.log(`ID:${usuario.id}`);
  console.log(`Nome:${usuario.nome}`);
  console.log(`Email:${usuario.email}`);

  if (usuario.idade) {
    console.log(`idade:${usuario.idade}`);
  }
};

const novoUsuario = {
  id: 1,
  nome: "joao",
  email: "joao@mail.com",
};

mostrarDadosUsuario(novoUsuario);
