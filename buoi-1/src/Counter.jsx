import React, {useState} from 'react';
import './counter_css.css';

const Count = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div className='btn-center'>
          <button onClick={increment} className='btn-inc'>Increment</button>
          <button onClick={decrement} className='btn-dec'>Decrement</button>
          <button onClick={reset} className='btn-res'>Reset</button>
      </div>
    </div>
  );
};


function Counter(){
  return (
    <div>
      <Count />
    </div>
  );
};
export default Counter;
