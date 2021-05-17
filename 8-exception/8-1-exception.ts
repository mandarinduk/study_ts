// Java: Exception
// JavaScript: Error

// const array = new Array(100000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}

function run() {
  const fileName = "not exist!";

  // error가 발생할 수 있는 로직만 try에 작성하기!
  try {
    console.log(readFile(fileName));
  } catch (e) {
    console.log("catched!!");
    return;
  } finally {
    // catch에서 return을 했음에도 불구하고 항상 실행 됨
    closeFile(fileName);
    console.log("closed!");
  }
}

run();
