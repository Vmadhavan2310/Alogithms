import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../StateReducer";
export default function App() {
  const dispatch = useDispatch();
  console.log(increment);
  const count = useSelector((state) => state.count.count);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>State value is {count}</h2>
      <button onClick={() => dispatch(increment(10))}> Increment</button>
      <button onClick={() => dispatch(decrement(5))}> Decrement</button>
      <button onClick={() => dispatch(reset())}> Reset</button>
    </div>
  );
}