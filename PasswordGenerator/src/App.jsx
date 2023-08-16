import { useMemo, useState } from "react";

import "./App.css";
import Button from "./components/atom/Button";
import CheckboxGroup from "./components/molecule/CheckboxGroup";
import { CheckboxList } from "./constants/checkbox-list";
import { RANGE_MAX, RANGE_MIN } from "./constants/values";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";

function App() {
  const [pswdLength, setPswdLength] = useState(RANGE_MIN);
  const [checkboxData, setCheckboxData] = useState([...CheckboxList]);
  const [isCopied, setIsCopied] = useState(false);

  const {
    password: pswd,
    errorMessage: errMsg,
    generatePassword,
  } = usePasswordGenerator();

  const strengthCalc = useMemo(() => {
    if (pswdLength > 15) return "Very Strong :))";
    if (pswdLength > 10) return "Strong :)";
    if (pswdLength > 5) return "Normal :|";
    return "Weak :(";
  }, [pswdLength]);

  const copyHandler = () => {
    window.navigator.clipboard.writeText(pswd);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1 * 1000);
  };
  const isCopyBtnEnable = () => pswd?.length > 0;

  const pswdChangeHandler = ({ target: { value } }) => setPswdLength(value);
  const generateHandler = () => generatePassword(checkboxData, pswdLength);

  const checkboxClickHandler = (index) => {
    let tempCheckboxData = [...checkboxData];
    tempCheckboxData[index].isSelected = !tempCheckboxData[index].isSelected;
    setCheckboxData(tempCheckboxData);
  };

  return (
    <div className="app">
      <div className="pswd-box">
        {pswd && (
          <div className="sub-text-box">
            <span>{pswd}</span>
            <Button
              title={isCopied ? "Copied" : "Copy"}
              onClick={copyHandler}
              disable={!isCopyBtnEnable}
            />
          </div>
        )}
        <div className="sub-text-box">
          <span>Character Length</span>
          <span>{pswdLength}</span>
        </div>
        <input
          type="range"
          min={RANGE_MIN}
          max={RANGE_MAX}
          value={pswdLength}
          onChange={pswdChangeHandler}
        />
        <CheckboxGroup
          data={checkboxData}
          clickHandler={checkboxClickHandler}
        />
        <div className={`extra-info ${errMsg.length > 0 && "error"}`}>
          {errMsg?.length > 0 ? <p>{errMsg}</p> : <span>{strengthCalc}</span>}
        </div>
        <Button title="Generate Password" onClick={generateHandler} />
      </div>
    </div>
  );
}

export default App;
