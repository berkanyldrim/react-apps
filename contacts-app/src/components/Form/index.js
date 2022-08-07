import { useState, useEffect } from "react";

function Form({ setContacts, contacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setForm({ fullName: "", phoneNumber: "" });
  }, [contacts]);
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }
    //console.log(form);
    setContacts([...contacts, form]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullName"
            value={form.fullName}
            placeholder="Full Name"
            onChange={onChangeInput}
          ></input>
        </div>

        <div>
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            placeholder="Phone Number"
            onChange={onChangeInput}
            type="number"
          ></input>
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
