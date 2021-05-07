{
  /**
   * Type Assertions
   * 특정 Type을 강요하는 것. 좋지 않음!
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // result가 any type이기 때문에 String 메서드 사용불가
  result.length;
  // string type으로 assertion하여 String 메서드 사용
  (result as string).length;
  (<string>result).length;

  const wrong: any = 5;
  (wrong as Array<number>).push(1); // Error 발생

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // undefined일수도 있기 때문에 Error 발생
  numbers.push(2);
  numbers!.push(2); // Array라고 확신할 때 '!' 사용

  const btn = document.querySelector("class")!; // 뒤에도 '!' 사용 가능
}
