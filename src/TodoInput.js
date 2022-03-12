import React, { useState } from "react";

function TodoInput(props) {
  const [todoValue, setTodoValue] = useState();

  function handleSubmit(x) {
    x.preventDefault();
    props.makeTodo(todoValue);
    console.log(todoValue);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(obj) => setTodoValue(obj.target.value)}
          placeholder="Add a todo"
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoInput;
