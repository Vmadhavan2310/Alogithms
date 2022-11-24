Parent.js

import { createContext, useRef, useState } from "react";
import Contexts from "../Contexts";
import "./styles.css";

export const userContext=createContext()
export default function App() {
  const [input, setInput] = useState(0);
  let inputRef = useRef(0);
  inputRef.current++;
/* create context */
  return (
    <div className="App">
      <h1>Hello CodeSandbox </h1>
      <input type="text" />
      <button onClick={() => setInput((e) => e + 1)}>Click to Focus</button>
      <div>
        Times rendered-{inputRef.current} count:{input}
      </div>
      <userContext.Provider value={input}>
      <Contexts/>
      </userContext.Provider>
    </div>
  );
}


Child.js
import React, { useContext } from "react";
import { userContext } from "./src/App";
import "./src/styles.css";

export default function Contexts() {
  const count = useContext(userContext);
  return (
    <div className="App">
      <h2>Use Context value</h2>
      <h2>count-{count}</h2>
      <userContext.Consumer>{(value) => <h2>{value}</h2>}</userContext.Consumer>
    </div>
  );
}
