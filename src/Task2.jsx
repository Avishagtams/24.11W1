import { useRef, useState } from "react";

function TextBox({ ref }) {
  return <input ref={ref} placeholder="Type something..." />;
}

export function ShowValueParent() {
  const inputRef = useRef(null);
  const [shown, setShown] = useState("");

  const handleShow = () => {
    setShown(inputRef.current.value);
  };

  return (
    <div>
      <h3>Task 2</h3>
      <TextBox ref={inputRef} />
      <button onClick={handleShow}>Show Value</button>
      <p>Value: {shown}</p>
    </div>
  );
}