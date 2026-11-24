import { ClearWithState, ClearWithRef } from "./Task1";
import { ShowValueParent } from "./Task2";
import { CounterHistory } from "./Task3";
import { TimerWithState, TimerWithRef } from "./Task4";
import { ClickCounter } from "./Task5";
function App() {
  return (
    <div>
      <h1>useRef Exercises</h1>
      <ClearWithState />
      <ClearWithRef />
      <ShowValueParent />
      <CounterHistory />
      <TimerWithState />
      <TimerWithRef />
      <ClickCounter />
    </div>
  );
}

export default App;