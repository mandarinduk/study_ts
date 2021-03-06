{
  // Array
  const fruits: string[] = ["๐", "๐"];
  const scores: Array<number> = [1, 3, 4];
  // readonly๋ฅผ ๋ถ์ด๋ฉด ๋ฐ์ดํฐ ๋ณ๊ฒฝ ๋ถ๊ฐ
  // readonly๋ Array<string>๊ณผ ๊ฐ์ ๋ฌธ๋ฒ์์๋ ์ฌ์ฉ ๋ถ๊ฐ
  function printArray(fruits: readonly string[]) {
    // fruits.push() => readonly์ด๊ธฐ ๋๋ฌธ์ ๋ณ๊ฒฝ ๋ถ๊ฐ
  }

  // Tuple: ์๋ก ๋ค๋ฅธ ํ์์ ํจ๊ป ๊ฐ์ง๊ณ  ์๋ ๋ฐฐ์ด(ex. useState)
  // ์ฌ์ฉ ๊ถ์ฅ X => interface, type alias, class ํํ๋ก ์ฌ์ฉํ๋๊ฒ ๊ฐ๋์ฑ์ ๋ ์ข๋ค
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name => ๊ฐ๋์ฑ ์ข์ง ์์
  student[1]; // 123 => ๊ฐ๋์ฑ ์ข์ง ์์
  const [name, age] = student; // ๊ตฌ์กฐ๋ถํดํ ๋น ํด์ ๊ฐ๋์ฑ up!
}
