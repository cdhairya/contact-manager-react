import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";

import axios from "axios";

const Contact = ({ contact }) => {
  const { id, name, email, phone } = contact;

  const [showContact, setShowContact] = useState(false);
  const deleteClickHandler = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

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
              <Link to={`/contact/edit/${id}`}>
                <i
                  className="fas fa-pencil-alt"
                  style={{
                    cursor: "pointer",
                    color: "black",
                    marginRight: "1rem",
                    float: "right",
                  }}
                ></i>
              </Link>
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
