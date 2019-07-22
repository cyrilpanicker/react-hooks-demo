import React, { useState, useEffect } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} clicks`;
    return () => document.title = 'Loading...';
  });
  return [count, setCount];
};

const Counter = () => {
  const [count, setCount] = useCount();
  const increment = () => {
    setCount((previousCount) => {
      console.log(previousCount, count);
      return count + 1;
    });
  };
  return (
    <div>
      <span>Count is : {count}</span>
      <button onClick={() => increment()} >+</button>
    </div>
  );
};

export default Counter;