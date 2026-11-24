import { useState, useRef } from "react";

export function TimerWithState() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  console.log("render: Timer STATE");

  const start = () => {
    if (intervalId !== null) return;
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h3>Task4-Timer With useState</h3>
      <p>Seconds: {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export function TimerWithRef() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  console.log("render: Timer REF");

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h3>Task4-Timer With useRef</h3>
      <p>Seconds: {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}