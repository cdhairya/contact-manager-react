import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";

import { Consumer } from "../context";

const Contact = ({ contact }) => {
  const { id, name, email, phone } = contact;

  const [showContact, setShowContact] = useState(false);
  const deleteClickHandler = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
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
                onClick={() => deleteClickHandler(id, dispatch)}
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
      }}
    </Consumer>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
