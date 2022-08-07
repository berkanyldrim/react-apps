import { useState, useEffect } from "react";
import List from "../List";
import Form from "../Form";
import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Berkan",
      phoneNumber: "1234",
    },
    {
      fullName: "Enes",
      phoneNumber: "678",
    },
    {
      fullName: "Ahmet",
      phoneNumber: "0009",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts App</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </div>
  );
}
export default Contacts;
