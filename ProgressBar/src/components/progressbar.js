import React, { useEffect, useState } from "react";

import { MIN_VAL, MAX_VAL, COLOR_BREAKPOINT_VAL } from "../constants/values";

const ProgressBar = (props) => {
  const { value = MIN_VAL, onComplete } = props;
  const [percent, setPercent] = useState(MIN_VAL);

  useEffect(() => {
    let newValue = Math.min(Math.max(value.toFixed(), MIN_VAL), MAX_VAL);
    setPercent(newValue);

    if (value >= MAX_VAL) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress-bar">
      <span
        style={{ color: percent > COLOR_BREAKPOINT_VAL ? "white" : "black" }}
      >
        {percent}%
      </span>
      <div
        style={{
          /**
           *Method-1
           */
          //  width: `${percent}%`
          /**
           *Method-2
           */
          transform: `scaleX(${percent / MAX_VAL})`,
          transformOrigin: "left",
        }}
        aria-valuenow={percent}
        aria-valuemin={MIN_VAL}
        aria-valuemax={MAX_VAL}
        role="progressbar"
      ></div>
    </div>
  );
};
export default ProgressBar;
