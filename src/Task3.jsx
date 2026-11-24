import { useState, useRef } from "react";

export function CounterHistory() {
  const [count, setCount] = useState(0);
  const prevRef = useRef(null);

  const increase = () => {
    prevRef.current = count;
    setCount(count + 1);
  };

  const decrease = () => {
    prevRef.current = count;
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Task3-Counter History</h3>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
      <p>
        Current: {count}
        {prevRef.current !== null && ` (Previous: ${prevRef.current})`}
      </p>
    </div>
  );
}