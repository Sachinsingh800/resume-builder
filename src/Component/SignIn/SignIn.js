import React, { useState } from 'react';
import style from "./SignIn.module.css";
import {  signInuser } from '../../Api/Api';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png"

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInuser(formData); // Assuming signIn function accepts an object
        localStorage.setItem("token",JSON.stringify(response.data))
        Swal.fire("Welcome back!", "Sign in successful", "success");
   
    } catch (error) {

      Swal.fire("Oops!", "Sign in failed", "error");
    }
  };

  return (
    <div className={style.main}>
            <div className={style.img}>
           <Link to={"/"}> <img src={logo} alt='logo' /></Link>         
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <br />
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
        <button type="submit">Sign In</button>
        <Link to={"/SignUp"}>SignUp</Link>
      </form>
    </div>
  );
}

export default SignIn;
