{
  // Array
  const fruits: string[] = ["🍎", "🍌"];
  const scores: Array<number> = [1, 3, 4];
  // readonly를 붙이면 데이터 변경 불가
  // readonly는 Array<string>과 같은 문법에서는 사용 불가
  function printArray(fruits: readonly string[]) {
    // fruits.push() => readonly이기 때문에 변경 불가
  }

  // Tuple: 서로 다른 타입을 함께 가지고 있는 배열(ex. useState)
  // 사용 권장 X => interface, type alias, class 형태로 사용하는게 가독성에 더 좋다
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name => 가독성 좋지 않음
  student[1]; // 123 => 가독성 좋지 않음
  const [name, age] = student; // 구조분해할당 해서 가독성 up!
}
