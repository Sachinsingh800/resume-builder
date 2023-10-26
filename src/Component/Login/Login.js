import React, { useState } from "react";



function Login() {
  return <Container />;
}

function Container() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card mx-auto">
            <div className="card-body">
              <h1 className="card-title" style={{ borderBottom: "1px solid #efefef" }}>
                React Login Form
              </h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const clearForm = () => {
    setFormData({
      email: "",
      password: ""
    });
  };

  return (
    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="button" className="btn btn-secondary float-right" onClick={clearForm}>
        Cancel
      </button>
    </form>
  );
}

export default Login;
