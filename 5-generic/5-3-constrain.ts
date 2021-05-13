{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!!");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("Part time!!");
    }
    workPartTime() {}
  }

  // Bad: 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴함
  function payBad(employee: Employee): Employee {
    employee.pay;
    return employee;
  }

  // Good: Constrain(조건) - Employee를 확장한 Generic
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const bae = new FullTimeEmployee();
  const kd = new PartTimeEmployee();
  bae.workFullTime(); // FullTimeEmployee
  kd.workPartTime(); // PartTimeEmployee

  const baeAfterPay = payBad(bae); // Employee
  const kdAfterPay = payBad(kd); // Employee
  baeAfterPay.workFullTime(); // Employee: FullTimeEmployee의 정보를 잃어버림
  kdAfterPay.workPartTime(); // Employee: PartTimeEmployee의 정보를 잃어버림

  const baeAfterPay2 = pay(bae); // FullTimeEmployee
  const kdAfterPay2 = pay(kd); // PartTimeEmployee
  baeAfterPay2.workFullTime(); // FullTimeEmployee
  kdAfterPay2.workPartTime(); // PartTimeEmployee

  // ---------------------------------------------------------------------

  const obj = {
    name: "bae",
    age: 10,
  };
  const obj2 = {
    animal: "🐕",
  };

  // Constrain
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name")); // bae
  console.log(getValue(obj, "age")); // 10
  console.log(getValue(obj2, "animal")); // 🐕
}
