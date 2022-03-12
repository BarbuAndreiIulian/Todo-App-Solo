import React, { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoObj from "./TodoObj";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const makeListTodo = (t) => {
    let newTodo = {
      text: t,
      id: 4,
      completed: false,
    };
    setListTodo([newTodo, ...listTodo]);
  };

  let elements = listTodo.map((el) => <TodoObj text={el.text} />);

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <TodoInput makeTodo={makeListTodo} />
      {elements}
    </div>
  );
}

export default App;
