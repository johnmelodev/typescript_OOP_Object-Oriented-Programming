- `String`
- `Boolean`
- `Number`
- `Array`
- `Tuple`
- `Enum`
- `Any`
- `Void (Never)`
- `Union`
- `Object`
- `Null`
- `Undefined`
- `BigInt`

String: Armazena sequências de textos. No TypeScript, garante que a variável só aceite caracteres, frases ou símbolos entre aspas.

Boolean: Tipo lógico básico. Só aceita `true` (verdadeiro) ou `false` (falso). Essencial para controles de fluxo e condicionais.

Number: Representa qualquer valor numérico, incluindo inteiros, decimais (pontos flutuantes) e até valores hexadecimais ou binários.

Array: Uma lista de elementos do mesmo tipo (ex: `number[]`). No TS, você define o tipo de conteúdo que a lista deve carregar.

Tuple: Um tipo especial de array com tamanho fixo e tipos de dados definidos para cada posição (ex: `[string, number]`).

Enum: Conjunto de constantes nomeadas. Ajuda a dar nomes legíveis a códigos numéricos (ex: `Status.Aprovado` em vez de `1`).

Any: Remove a tipagem do TypeScript. Permite que a variável receba qualquer valor sem gerar erros. Use com cautela!

Void (Never): `void` é para funções que não retornam nada; `never` é para funções que nunca terminam (erros ou loops infinitos).

Union: Permite que uma variável aceite mais de um tipo diferente usando a barra vertical (ex: `string | number`).

Object: Representa qualquer valor que não seja um tipo primitivo (não é string, number, etc). Define estruturas de dados complexas.

Null: Ausência intencional de um objeto ou valor. Você limpa o valor de uma variável explicitamente usando `null`.

Undefined: Significa que a variável foi declarada, mas ainda não teve nenhum valor atribuído a ela (vazio automático).
