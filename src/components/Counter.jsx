import React, { useState } from 'react';
import Button from './UI/button/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className='counter'>
      <Button onClick={increment} >Increment</Button>
      <h2>{count}</h2>
      <Button onClick={decrement} >Decrement</Button>
    </div>
  );
}
 
export default Counter;
