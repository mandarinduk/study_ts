{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract: 추상적인 class다 => 자체적으로 instance 생성 불가능
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // abstract class의 instance는 생성 불가능
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += coffeeBeans;
    }

    clean() {
      console.log("cleaning the machine...🧹");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...🔥");
    }

    // 자식 class에서 공통적으로 쓰이는 기능들은 abstract 선언 후 자식 class에서 구현
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 자식 class
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // 자식 class에서 생성자를 만들 때는 super()로 부모의 생성자를 불러와야 함
    }

    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }

    // 부모 class에 있는 abstract 구현
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  // 자식 class
  class SweetCoffeeMaker extends CoffeeMachine {
    // 부모 class에 있는 abstract 구현
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "ABCD"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("--------------------------");
    machine.makeCoffee(1);
  });
}
