import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    //Object.key ile contacts'tın keylerini aldık yanı fulllName ile phoneNumber değerlerini.
    //Some metodu ise girilen filtre textinin fullName de veya phoneNumber da ikisinden birinde bulunuyorsa true döndürüyor
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <br></br>
      <input
        value={filterText}
        placeholder="Fitler Contacts"
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullName}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts: {filtered.length}</p>
    </div>
  );
}

export default List;
