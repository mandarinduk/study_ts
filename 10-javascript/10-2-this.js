console.log(this); // window

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // window: global에서 this를 부르는 것은 window에서 this를 부르는 것과 같음

console.clear();

class Counter {
  count = 0;

  // 따로 binding 해줘야 함
  //   increase = function () {
  //     console.log(this);
  //   };

  // arrow function을 사용하면 따로 bind 해주지 않아도 됨
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // Counter
const caller = counter.increase;
// const caller = counter.increase.bind(counter); // Counter
// caller(); // undefined
caller(); // Counter

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
