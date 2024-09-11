import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Counter = () => {
  // Step 1: Initialize the counter state with an initial value of 0
  const [count, setCount] = useState(0);

  // Step 2: Create arrow functions to handle increment and decrement
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Step 3: Attach the increment and decrement functions to the buttons */}
      <Button onClick={decrement} className='m-2'>Decrement</Button>
      <Button onClick={increment} className='m-2'>Increment</Button>
    </div>
  );
};

export default Counter;

//You are building a simple counter component in React. The counter has two buttons: one to increment the counter and another to decrement it. The initial count should be 0. Write a functional component using the useState hook and ES6 arrow functions to handle the button click events.
