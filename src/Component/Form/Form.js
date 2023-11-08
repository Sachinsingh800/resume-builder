import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as Components from "./Components";
import "./styles.css";
import style from "./Form.module.css";
import { registration, signInuser } from "../../Api/Api";
import Swal from "sweetalert2";

export default function Form() {
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signInuser(formData); // Assuming signIn function accepts an object
      localStorage.setItem("token", JSON.stringify(response.data));
      Swal.fire("Welcome back!", "Sign in successful", "success");
    } catch (error) {
      Swal.fire("Oops!", "Sign in failed", "error");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await registration(formData); // Assuming registration function accepts an object
      const { status, message } = response.data;

      Swal.fire("Good job!", "SignUp", "success");
    } catch (error) {
      Swal.fire("Oops!", "Email already exists", "error");
      // Handle signup error
    } finally {
      console.log("loading");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={style.main}>
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Components.Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Components.Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Components.Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button onClick={handleSignIn}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start the journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}
