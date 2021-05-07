{
  /**
   * Type Aliases: 내가 새로운 타입을 만들 수 있다!
   */
  type Text = string;
  const name: Text = "bae";
  const address: Text = "korea";

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "bae",
    age: 123,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let myName: Name;
  myName = "d"; // 'name' 외에는 할당 불가능

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
