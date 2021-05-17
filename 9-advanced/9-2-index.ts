{
  const obj = {
    name: "bae",
  };
  obj.name; // bae
  obj["name"]; // bae

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "femaile";
  };

  type Name = Animal["name"]; // string
  const text: Name = "abc";

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "bae",
    gender: "male",
  };
}
