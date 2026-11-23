export class Address {
  private _address: string = "";
  private _zipCode: string = "";
  private _numberA?: number;

  // CORREÇÃO: Deve ser um número para a comparação funcionar
  private static defaultValidation: number = 75000000;

  // ... (seus getters e setters estão corretos)

  public static isCepValid(zipCode: string): boolean {
    // Agora a comparação funciona: número > número
    return parseInt(zipCode.replace(/\D/g, "")) > Address.defaultValidation;
  }
}

// Para testar o acesso ao atributo estático (se ele fosse público):
// console.log(Address.defaultValidation);
