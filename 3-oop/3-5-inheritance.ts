{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += coffeeBeans;
    }

    clean() {
      console.log("cleaning the machine...๐งน");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...๐ฅ");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...โ๏ธ`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // ์์ class์์ ์์ฑ์๋ฅผ ๋ง๋ค ๋๋ super()๋ก ๋ถ๋ชจ์ ์์ฑ์๋ฅผ ๋ถ๋ฌ์์ผ ํจ
    }

    private steamMilk(): void {
      console.log("Steaming some milk...๐ฅ");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super๋ฅผ ํตํด์ ๋ถ๋ชจ์ ์ ๊ทผ
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "ABCD");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
