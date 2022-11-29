import React from "react";
import { useState } from "react";
import Contact from "./Contact";

import { Consumer, Provider } from "../context";

const Contacts = () => {
  // const [contacts, setContacts] = useState();

  const deleteContent = (id) => {
    // setContacts(contacts.filter((contact) => contact.id !== id));
    console.log("delete");
  };

  return (
    <Consumer>
      {(value) => {
        const { contacts } = value;
        return (
          <>
            {contacts.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
                deleteClickHandler={() => deleteContent(contact.id)}
              />
            ))}
          </>
        );
      }}
    </Consumer>
  );
};

export default Contacts;
