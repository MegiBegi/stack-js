const Stack = require("./stack");

describe("Stack", () => {
  it("stack size", () => {
    expect(new Stack().size).toBe(0);
    expect(new Stack(1, 2).size).toBe(2);
    expect(new Stack(1, 2, 3).size).toBe(3);
  });

  it("create stack with initial values", () => {
    const stack = new Stack("abc", 123, false);
    expect(stack.size).toBe(3);
  });

  it("add element to stack", () => {
    const stack = new Stack();

    stack.push("first");
    stack.push("second");

    expect(stack.size).toBe(2);
  });

  it("isEmpty", () => {
    expect(new Stack().isEmpty()).toBe(true);
    expect(new Stack(1, 2, 3).isEmpty()).toBe(false);
  });

  it("pop value from stack", () => {
    const stack = new Stack("first", "second", "third");

    expect(stack.pop()).toBe("third");
    expect(stack.pop()).toBe("second");
    expect(stack.pop()).toBe("first");
    expect(stack.pop()).toBe(null);
  });

  it("peek value from stack", () => {
    const stack = new Stack(1, 2, 3);

    expect(stack.peek()).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  it("swap stack elements", () => {
    const stack = new Stack(1, 2, 3);

    stack.swap();

    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(1);
  });
});
