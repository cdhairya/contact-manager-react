import React, { useState, useEffect } from "react";
import { Consumer } from "../context";
import classnames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditContact = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const { name, email, phone } = res.data;

      setName(name);
      setEmail(email);
      setPhone(phone);
    };
    fetchUser();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = async (dispatch, e) => {
    e.preventDefault();

    if (name === "") {
      setErrors({ name: "Name is required" });
      return;
    }
    if (email === "") {
      setErrors({ email: "Email is required" });
      return;
    }
    if (phone === "") {
      setErrors({ phone: "Phone is required" });
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setErrors({});

    navigate("/");
  };

  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Update Contact</h5>
              <form onSubmit={(e) => onSubmit(dispatch, e)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className={classnames("form-control form-control", {
                      "is-invalid": errors.name,
                    })}
                    placeholder="Enter Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className={classnames("form-control form-control", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Enter Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="text"
                    className={classnames("form-control form-control", {
                      "is-invalid": errors.phone,
                    })}
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
                <div className="d-grid gap-2">
                  <input
                    type="submit"
                    value="Update Contact"
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

export default EditContact;
