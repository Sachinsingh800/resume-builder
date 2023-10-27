import React, { useState, useEffect } from "react";
import style from "./SignUp.module.css";
import { registration } from "../../Api/Api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start showing the loader

    try {
      const response = await registration(formData); // Assuming registration function accepts an object
      const { status, message } = response.data;

      Swal.fire("Good job!", "SignUp", "success");
    } catch (error) {
      Swal.fire("Oops!", "Email already exists", "error");
      // Handle signup error
    } finally {
      setLoading(false); // Stop showing the loader, whether the request succeeds or fails
    }
  };

  return (
    <div className={style.main}>
      <div className={style.img}>
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <br />
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        {loading ? (
          <div className={style.loader}>Loading...</div>
        ) : (
          <button type="submit">Sign Up</button>
        )}
        <Link to={"/SignIn"}>SignIn</Link>
      </form>
    </div>
  );
}

export default SignUp;
