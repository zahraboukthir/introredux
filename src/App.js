import "./App.css";
import Counter from "./Component/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addvalue, togglet } from "./JS/actions/counteractions";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show);
  const [first, setFirst] = useState(0);
  return (
    <div className="App">
      <h1>Workshop Redux</h1>
      <button onClick={() => dispatch(togglet())}>
        {" "}
        {show ? "hide" : "show"}
      </button>
      <br />
      {show ? <Counter /> : "counter"}
      <br />

      <input type="number" onChange={(e) => setFirst(e.target.value)} />
      <button onClick={() => dispatch(addvalue(first))}>add value</button>
    </div>
  );
}

export default App;
