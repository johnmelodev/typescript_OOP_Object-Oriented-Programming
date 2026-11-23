// voce vai acessar o metodo, como se ele fosse uma propriedade Neuza.contaInfo
// so que ele ja vai ter sofrido um processamento

export class Address {
  // Atributos privados: O "_" é uma convenção para indicar que são de uso interno.
  // "private" impede que sejam acessados ou alterados diretamente de fora da classe.
  private _address: string = "";
  private _zipCode: string = "";
  private _numberA?: number; // O "?" indica que este campo é opcional (pode ser undefined).

  // SETTER: Define como um valor entra na classe.
  // Importância: Permite VALIDAR o dado antes de salvá-lo.
  public set address(address: string) {
    if (address.length < 3) {
      throw new Error("invalid address"); // Garante a integridade dos dados.
    }
    this._address = address;
  }

  // GETTER: Define como o valor sai da classe.
  public get address(): string {
    return this._address;
  }

  public set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  // GETTER com Formatação:
  // Importância: Permite transformar o dado na saída sem alterar como ele está guardado.
  public get zipCode(): string {
    // Remove qualquer caractere que não seja número (\D) usando Regex.
    return this._zipCode.replace(/\D/g, "");
  }

  public set numberA(numberA: number) {
    this._numberA = numberA;
  }

  public get numberA(): number {
    // Nullish Coalescing (??): Se _numberA for null/undefined, retorna 123.
    // Importância: Garante um valor padrão (default) de segurança.
    return this._numberA ?? 123;
  }
}

// --- Uso prático (Screenshot 2026-05-13 at 13.12.39.png) ---

const address1 = new Address();
address1.zipCode = "75722-12"; // Chama o 'set zipCode'
console.log(address1.zipCode); // Chama o 'get zipCode' e imprime apenas '7572212'
