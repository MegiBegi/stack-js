# Stack - JavaScript task

## Expectations

The goal of this task is to create an implementation of stack. We would like it to be initialized as this:

```js
const stack = new Stack()
```

It should also allow to create a stack with initial values like this:

```js
const stack = new Stack('abc', 123, true)
```

The stack should implement the following methods:

* `push` – pushes a new element on top of a stack
* `pop` – removes top element from a stack; if the stack is empty it should return `null`
* `peek` – takes top element from a stack but doesn't remove it
* `swap` – swaps position of the top two elements
* `isEmpty` – returns boolean based on whether a stack is empty or not

The stack should also implement `size` property which will return an actual stack size.

## Tests

Project contains a set of simple tests. In a working solution all tests should be passing.

To run it first install dependencies:

```shell
$ yarn install
```

To run tests:
```shell
$ yarn test
```

***
Good luck! Team [Albacross](https://albacross.com)
