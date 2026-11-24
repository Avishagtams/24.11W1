import { useState, useRef } from "react";

export function ClickCounter() {
  const clicksRef = useRef(0);
  const [total, setTotal] = useState(null);
//   console.log("render: ClickCounter");

  const handleClick = () => {
    clicksRef.current += 1;
    console.log("clicks so far:", clicksRef.current);
  };

  const handleShow = () => {
    setTotal(clicksRef.current);
  };

  return (
    <div>
      <h3>Task5-Click Counter</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleShow}>Show Total Clicks</button>
      {total !== null && <p>Total clicks: {total}</p>}
    </div>
  );
}