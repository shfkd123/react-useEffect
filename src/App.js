import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      console.log("interval");
    }, 1000);

    //interval 해제
    return () => {
      console.log("celan up");
      clearInterval(timerID);
    };
  }, []);

  console.log("render");
  return (
    <div className="app">
      <div className="main-inner">
        main-inner
        {/* <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>UP</button>
        <button id="consoleButton">print console</button> */}
        <div className="test-inner">test-inner</div>
        <div className="test-inner">test-inner</div>
        <div className="test-inner">test-inner</div>
      </div>
      {/* <Link to="other">go to other</Link> */}
    </div>
  );
}

export default App;
