{
  /**
   * Intersection Types: &
   * 다양한 타입들을 하나로 묶어서 사용할 수 있음
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name);
    console.log(person.score);
    console.log(person.employeeId);
    console.log(person.work);
  }

  internWork({
    name: "bae",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
