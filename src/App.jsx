import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalcButton from './CalcButton.jsx'

function App() {
  const [calc,setCalc]=useState({
    current:"0",
    total:"0",
    isInitial: true,
    preOp:""

  })
  function handleNumber(value) {
    let newValue;
    if (calc.isInitial) {
      newValue = value;
    } else {
      newValue = calc.current.toString() + value;
    }
    setCalc({ ...calc, current: newValue, isInitial: false });
  }
  
  function handleOperator(value) {
    // If there's a previous operation pending, perform it before proceeding
    if (calc.preOp) {
      const total = doCalculation();
      setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });
    } else {
      setCalc({ ...calc, total: calc.current, isInitial: true, preOp: value });
    }
  }
  
  function renderDisplay(){
    return calc.current;
  }
  function doCalculation() {
    const current = parseInt(calc.current);
    const total = parseInt(calc.total);
    switch (calc.preOp) {
      case "+":
        return total + current;
      case "-":
        return total - current;
      case "/":
        return total / current;
      case "*":
        return total * current;
      default:
        return current;
    }
  }
  function onEquals()
  {
    let total=doCalculation();
    setCalc({current:total.toString(), total: total.toString(), isInitial:true, preOp:"="});

  }
  function onClear(){
    setCalc({ current: "0", total: "0", isInitial: true, preOp: "" });
  }

 

  return (
    
      <div  className="calculator">
        <div className="display">{renderDisplay()}</div>
        <CalcButton value="1" onClick={() => handleNumber(1)} />
        <CalcButton value="2" onClick={() => handleNumber(2)} />
        <CalcButton value="3" onClick={() => handleNumber(3)} />
        <CalcButton  className="operator" value="/"onClick={() => handleOperator("/")}/>
        <CalcButton value="4" onClick={() => handleNumber(4)} />
        <CalcButton value="5" onClick={() => handleNumber(5)} />
        <CalcButton value="6" onClick={() => handleNumber(6)} />
        <CalcButton  className="operator" value="+"onClick={() => handleOperator("+")}/>
        <CalcButton value="7" onClick={() => handleNumber(7)} />
        <CalcButton value="8" onClick={() => handleNumber(8)} />
        <CalcButton value="9" onClick={() => handleNumber(9)} />
        <CalcButton  className="operator" value="-" onClick={() => handleOperator("-")}/>
        <CalcButton value="C" onClick={() => onClear()} />
        <CalcButton value="0" onClick={() => handleNumber(value)} />
        <CalcButton value="=" onClick={() => onEquals()} />
        <CalcButton  className="operator" value="*"onClick={() => handleOperator("*")}/>
      </div>
  )
}


export default App
