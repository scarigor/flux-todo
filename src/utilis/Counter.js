let counter = 1;

const Counter = {
  increment() {
    return String(counter++);
  },
};

export default Counter;
