import React from "react";
import "../Form/style.css";
import {
  IoIosRadioButtonOff,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";

function TodoList({ todos, setTodo }) {
  const onClick = (event, key) => {
    setTodo(
      todos.map((todo) => {
        return todo.id === key ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };
  return (
    <div className="list">
      <ul className="todoList">
        {todos.map((item) => (
          <li key={item.id}>
            <div className={item.isDone ? "completed" : ""}>
              <span>
                {item.isDone === false ? (
                  <IoIosRadioButtonOff
                    value={{ size: "32px" }}
                    key={item.id}
                    onClick={(event) => onClick(event, item.id)}
                  />
                ) : (
                  <IoIosCheckmarkCircleOutline
                    value={{ color: "green", size: "32px" }}
                    key={item.id}
                    onClick={(event) => onClick(event, item.id)}
                  />
                )}
              </span>
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
