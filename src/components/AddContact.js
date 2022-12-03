import React, { useState } from "react";
import { Consumer } from "../context";
import { v4 as uuidv4 } from "uuid";
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (dispatch, e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: name,
      email: email,
      phone: phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Add Contact</h5>
              <form onSubmit={(e) => onSubmit(dispatch, e)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control form-control"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control form-control"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="text"
                    className="form-control form-control"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light"
                  />
                </div>
              </form>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default AddContact;
