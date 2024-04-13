import React from 'react';
import { useState } from 'react';


function CalcButton(props) {
  return <button className={props.className} onClick={props.onClick}>{props.value}</button>;
}

export default CalcButton;