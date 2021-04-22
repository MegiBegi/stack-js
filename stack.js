class Stack {
  constructor(...args) {
    this.stack = args;
  }

  get size() {
    return this.stack.length;
  }

  push(element) {
    return this.stack.push(element);
  }

  isEmpty() {
    return !this.stack.length;
  }

  pop() {
    if (!this.stack.length) return null;
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.size - 1];
  }

  swap() {
    const lastElementIndex = this.size - 1;
    const nextToLastElementIndex = this.size - 2;

    [this.stack[nextToLastElementIndex], this.stack[lastElementIndex]] = [
      this.stack[lastElementIndex],
      this.stack[nextToLastElementIndex],
    ];

    return this.stack;
  }
}

module.exports = Stack;
