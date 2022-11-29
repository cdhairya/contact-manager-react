import React from "react";
import { useState } from "react";
import Contact from "./Contact";

import { Consumer, Provider } from "../context";

const Contacts = () => {
  return (
    <Consumer>
      {(value) => {
        const { contacts } = value;
        return (
          <>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </>
        );
      }}
    </Consumer>
  );
};

export default Contacts;
