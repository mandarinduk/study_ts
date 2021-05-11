{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public: default
  // private: 접근 불가능
  // protected: 자식 class에서만 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level: 외부에서 접근 가능
    private coffeeBeans: number = 0; // instance(object) level: object마다 생성돼야 하는 것

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += coffeeBeans;
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

  /*
   * 인스턴스를 생성할 수 있는 함수를 따로 정의했을 경우에는,
   * 생성자를 private로 만들어서 생성자로 인스턴스를 생성할 수 없게 만든다!
   */
  // const coffeeMaker = new CoffeeMaker(32);
  const coffeeMaker = CoffeeMaker.makeMachine(32);
  coffeeMaker.fillCoffeeBeans(3);
  console.log(coffeeMaker);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("num should be greater than 0");
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  user.age = 7; // Setter
  console.log(user.fullName);
  console.log(user.age); // Getter
}
