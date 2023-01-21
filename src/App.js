import { useState } from "react";

function App() {
  //USESTATE HOOK TO DEFINE VARIABLES
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  //OPERATIONS ARRAY
  const ops = ["+", "-", "*", "/", "."];

  //UPDATE THE ENTERED VALUE
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  //DISPLAY THE FINAL RESULT
  const calculate = () => {
    setCalc(eval(result).toString());
  };

  //DELETE THE LAST ENTERED VALUE
  const deleteLast = () => {
    if (calc === "") {
      setResult("");
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const clear = () => {
    setCalc("");
    setResult("");
  };

  //RETUR THE FOLLOWING JSX
  return (
    <div className="App">
      <div class="calculator">
        {/* <!-- display --> */}
        <div class="calculator-display">
          {result ? <span>({result})</span> : ""}
          &nbsp;<h1>{calc || "0"}</h1>
        </div>
        <div class="rest">
          {/* <!-- buttons -->
        <!-- value is the attribute that will be passed to js --> */}
          <button
            class="operator"
            value="+"
            onClick={(e) => updateCalc(e.target.value)}
          >
            +
          </button>
          <button
            class="operator"
            value="-"
            onClick={(e) => updateCalc(e.target.value)}
          >
            -
          </button>
          <button
            class="operator"
            value="*"
            onClick={(e) => updateCalc(e.target.value)}
          >
            ×
          </button>
          <button
            class="operator"
            value="/"
            onClick={(e) => updateCalc(e.target.value)}
          >
            ÷
          </button>

          {/* <!-- numbers --> */}
          <button value="7" onClick={(e) => updateCalc(e.target.value)}>
            7
          </button>
          <button value="8" onClick={(e) => updateCalc(e.target.value)}>
            8
          </button>
          <button value="9" onClick={(e) => updateCalc(e.target.value)}>
            9
          </button>
          <button value="4" onClick={(e) => updateCalc(e.target.value)}>
            4
          </button>
          <button value="5" onClick={(e) => updateCalc(e.target.value)}>
            5
          </button>
          <button value="6" onClick={(e) => updateCalc(e.target.value)}>
            6
          </button>
          <button value="1" onClick={(e) => updateCalc(e.target.value)}>
            1
          </button>
          <button value="2" onClick={(e) => updateCalc(e.target.value)}>
            2
          </button>
          <button value="3" onClick={(e) => updateCalc(e.target.value)}>
            3
          </button>
          <button
            class="decimal"
            value="."
            onClick={(e) => updateCalc(e.target.value)}
          >
            .
          </button>
          <button value="0" onClick={(e) => updateCalc(e.target.value)}>
            0
          </button>
          <button class="clear" id="clr-btn" onClick={deleteLast}>
            DEL
          </button>

          <button class="clear" id="clr-btn" onClick={clear}>
            C
          </button>

          <div class="equal-sign operator">
            <button id="equal" class="operator" value="=" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
