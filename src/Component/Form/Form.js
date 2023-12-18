import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as Components from "./Components";
import "./styles.css";
import style from "./Form.module.css";
import { registration, signInuser, sendOtp, otpverification,  } from "../../Api/Api"; // Assuming you have API functions for OTP
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signInuser(formData);
      localStorage.setItem("token", JSON.stringify(response.data));
      Swal.fire("Welcome back!", "Sign in successful", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Oops!", "Sign in failed", "error");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await registration(formData);
      const { status, message } = response.data;

 
        setShowOtpModal(true);
     
    } catch (error) {
      // Swal.fire("Oops!", "Something went wrong", "error");
      setShowOtpModal(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOtpVerification = async () => {
    const OTP={
      email: formData.email,
      otp:otp
    }
 
   
    try {
      // Assuming verifyOtp function takes the email and OTP as parameters
      await otpverification(OTP);
      // Close the OTP modal on successful verification
      setShowOtpModal(false);
      Swal.fire("Success!", "OTP verified successfully", "success");
    } catch (error) {
      Swal.fire("Oops!", "Invalid OTP", "error");
    }
  };

  const handleResendOtp = async () => {
    const resendOtp= 
      {
        email: formData.email
      }
    
    try {
      // Assuming sendOtp function takes the email as a parameter
      await sendOtp(resendOtp);
      Swal.fire("Success!", "OTP resent successfully", "success");
    } catch (error) {
      Swal.fire("Oops!", "Failed to resend OTP", "error");
    }
  };

  return (
    <div className={style.main}>
      <div className={style.nav_Bar}>
        <NavBar />
      </div>

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
            <Components.Anchor href="/ForgetPassword">Forgot your password?</Components.Anchor>
            <Components.Button onClick={handleSignIn}>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us, please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start the journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className={style.otpModal}>
          <div className={style.otpContent}>
            <h2>Verify OTP</h2>
            <p>An OTP has been sent to your email. Enter the OTP below:</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleOtpVerification}>Verify OTP</button>
            <button onClick={handleResendOtp}>Resend OTP</button>
          </div>
        </div>
      )}
    </div>
  );
}
