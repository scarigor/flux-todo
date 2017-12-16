let _counter = 1;

const Counter = {
  increment() {
    return String(_counter++);
  },
};

export default Counter;
