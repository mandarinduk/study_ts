{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level: 외부에서 접근 가능
    coffeeBeans: number = 0; // instance(object) level: object마다 생성돼야 하는 것

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMaker = new CoffeeMaker(32);
  console.log(coffeeMaker);
  const coffeeMaker2 = new CoffeeMaker(40);
  console.log(coffeeMaker2);
  const coffeeMaker3 = CoffeeMaker.makeMachine(50);
  console.log(coffeeMaker3);
}
