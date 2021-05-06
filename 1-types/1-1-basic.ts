{
  /**
   * JacaScript
   * Primitive: number, string, boolean, BigInt, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "1";

  // boolean
  const boal: boolean = true;

  // undefined: 값이 아직 결정되지 않았음을 나타냄
  let name: string | undefined; // undefined 단독으로 사용 X
  name = undefined;
  name = "bae";
  function find(): number | undefined {
    return undefined;
  }

  // null: 값이 비어져있음을 나타냄
  let person: string | null; // null 단독으로 사용 X

  // unknown - 되도록 사용 X
  let notSure: unknown = 0;
  notSure = "notSure";
  notSure = true;

  // any - 되도록 사용 X
  let anything: any;
  anything = 0;
  anything = "any";

  // void - 함수에서 아무 값도 return하지 않을 때
  function print(): void {
    console.log("print");
    return;
  }

  // never - 함수에서 절대 return되지 않는 경우에 사용
  function thorwError(message: string): never {
    // message -> server
    throw new Error(message);
    while (true) {}
  }

  // object - 추상적인 타입이므로 되도록 사용 X
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "bae" });
}
