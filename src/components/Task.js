import React, { useState } from "react";

function Task({ category, text }) {

  function handleClick(event) {
    console.log(event)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;

{/* <button onClick={event => console.log(event)}>Click Me</button> */}