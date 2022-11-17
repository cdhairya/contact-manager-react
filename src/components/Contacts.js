import React from "react";
import { useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "jdoe@gmail.com",
      phone: "111-111-1111",
    },
    {
      id: 2,
      name: "Karen Williams",
      email: "karen@gmail.com",
      phone: "222-222-2222",
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@gmail.com",
      phone: "333-333-3333",
    },
  ]);

  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
