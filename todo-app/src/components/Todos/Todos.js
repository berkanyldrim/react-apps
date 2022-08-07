import { useState } from "react";
import Form from "../Form/Form";
import TodoHeader from "../Headers/TodoHeader";
import TodoList from "../List/TodoList";

function Todos() {
  const [todos, setTodo] = useState([]);
  return (
    <div>
      <TodoHeader></TodoHeader>
      <div>
        <Form todos={todos} setTodo={setTodo} />
        <TodoList todos={todos} setTodo={setTodo} />
      </div>
    </div>
  );
}
export default Todos;
