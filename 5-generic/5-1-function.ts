{
  // Bad: string 등 타입마다 함수를 만들어줘야 함
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // Bad: any 타입을 써서 타입이 보장되지 않음
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // Good!
  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result = checkNotNull(123);
  const result2 = checkNotNull("abc");
  const result3: boolean = checkNotNull(true);
}
