import React from "react";
import "./App.css";

function TodoObj(props) {
  return (
    <div className="objContainer">
      <div className="obj">
        <h1>{props.text}</h1>
      </div>
      <div>
        <button>Delete</button>
        <button>Complete</button>
      </div>
    </div>
  );
}

export default TodoObj;
