{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }

      // 추론 활용
      const node = { value, next: this.head };

      this.head = node;
      this._size++;
    }
    pop(): T {
      // null == undefined, null !== undefined
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }

      // 추론 활용
      const node = this.head;

      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<number>(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<string>(3);
  stack2.push("a 1");
  stack2.push("b 2");
  stack2.push("c 3");
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
