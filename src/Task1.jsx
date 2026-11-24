import { useState, useRef } from "react";

export function ClearWithState() {
  const [text, setText] = useState("");
  console.log("render: State version");

  return (
    <div>
      <h3>Task1-With useState</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setText("")}>Clear Input</button>
    </div>
  );
}

export function ClearWithRef() {
  const inputRef = useRef(null);
  console.log("render: Ref version");

  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Task1-With useRef</h3>
      <input ref={inputRef} />
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
}