{
  /**
   * Type Inference
   * 하지만 정확하게 Type을 명시해 주는 것이 좋음
   */

  // 타입 추론에 의해 String Type이 결정 됨
  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }

  // 타입 추론에 의해 return이 Number Type으로 결정 됨
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
