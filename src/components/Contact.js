import PropTypes from "prop-types";
import { useState } from "react";

const Contact = ({ contact }) => {
  const { name, email, phone } = contact;

  const [showContact, setShowContact] = useState(true);

  const onShowClick = () => {
    setShowContact(!showContact);
  };
  return (
    <div className="card card-body mb-3">
      <h4>
        {name} <i onClick={onShowClick} className="fa-solid fa-sort-down"></i>
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
