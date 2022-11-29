import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";

const Contact = ({ contact, deleteClickHandler }) => {
  const { name, email, phone } = contact;

  const [showContact, setShowContact] = useState(true);

  return (
    <div className="card card-body mb-3">
      <h4>
        {name}{" "}
        <i
          onClick={() => {
            setShowContact(!showContact);
          }}
          className="fa-solid fa-sort-down"
        ></i>
        <i
          className="fas fa-times"
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={() => deleteClickHandler()}
        ></i>
      </h4>
      {showContact && (
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      )}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
