import { useEffect, useState } from "react";

import "./App.css";
import ProgressBar from "./components/progressbar";
import { INC_VAL, MIN_VAL, TIME_INTERVAL } from "./constants/values";

function App() {
  const [value, setValue] = useState(MIN_VAL);
  const [isComplete, setIsComplete] = useState(false);

  const onComplete = () => setIsComplete(true);

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setValue((val) => val + INC_VAL);
    }, TIME_INTERVAL);

    return () => {
      clearInterval(valueInterval);
    };
  }, []);

  return (
    <div className="app">
      <h1>ProgressBar</h1>
      <ProgressBar value={value} onComplete={onComplete} />
      <span>{isComplete ? "Completed" : "Loading..."}</span>
    </div>
  );
}

export default App;
