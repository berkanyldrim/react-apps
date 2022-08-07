import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";

function Form({ todos, setTodo }) {
  const [form, setForm] = useState({ name: "", isDone: false });
  const [ID, setID] = useState(0);

  //Input değer girince form değerlerine atama yapıyorum.
  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      isDone: false,
      id: ID,
    });
  };

  //Form submit olunca todo atama yapıyorum ve form değerlerini kontrol ediyorum.
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name === "") return false;

    setTodo([...todos, form]);
  };

  useEffect(() => {
    setForm({ name: "", isDone: false });
    setID(ID + 1);
  }, [todos]);
  return (
    <div className="todoForm">
      <span>
        <IoIosArrowDown />
      </span>
      <form onSubmit={onSubmit}>
        <input
          className="form-input"
          name="name"
          value={form.name}
          onChange={onChangeInput}
          placeholder="What needs to be done"
        ></input>
      </form>
    </div>
  );
}
export default Form;
