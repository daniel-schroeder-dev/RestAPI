import React, { useState } from "react";

function Addstudent() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [state, setState] = useState({
    name: "",
    dob: "",
    address: "",
    zipcode: "",
    city: "",
    phone: "",
    email: ""
  });

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    setState({
      name: "",
      dob: "",
      address: "",
      zipcode: "",
      city: "",
      phone: "",
      email: ""
    });
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            {error ? <p className="error">{error}</p> : null}
            <div className="row">
              <div className="input-field col s3">
                <input
                  id="name"
                  type="text"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.name}
                  required
                />
                <label htmlFor="input_text">Name</label>
              </div>
            </div>
            <div className="col">
              <div className="input-field col s12">
                <input
                  id="dob"
                  type="date"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.dob}
                  required
                />
                <label htmlFor="input_text">Date of birth</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s3">
                <input
                  id="address"
                  type="text"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.address}
                  required
                />
                <label htmlFor="input_text">Address</label>
              </div>
            </div>
            <div className="col">
              <div className="input-field col s12">
                <input
                  id="zipcode"
                  type="number"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.zipcode}
                  required
                />
                <label htmlFor="input_text">Zipcode</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s3">
                <input
                  id="city"
                  type="text"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.city}
                  required
                />
                <label htmlFor="input_text">City</label>
              </div>
            </div>
            <div className="col">
              <div className="input-field col s12">
                <input
                  id="phone"
                  type="tel"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.phone}
                  required
                />
                <label htmlFor="input_text">Phone</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s3">
                <input
                  id="email"
                  type="text"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.email}
                  required
                />
                <label htmlFor="input_text">Email</label>
              </div>
            </div>
            <button
              className="btn waves-effect blue lighten-1"
              type="submit"
              name="action"
              disabled={loading}
            >
              {loading ? "Loading..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Addstudent;
