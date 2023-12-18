// components/ForgetPassword.js
import React, { useState } from "react";
import { forgetPassword, verifyOtp, resetPassword } from "../../Api/Api";
import Swal from "sweetalert2";
import styles from "./ForgetPassword.module.css"

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(true);

  const handleSendOtp = async (e) => {
    e.preventDefault();

    const emailData = {
      email: email,
    };

    try {
      // Assuming forgetPassword function initiates the forgot password process and sends an OTP
      await forgetPassword(emailData);

      // Display a message to inform the user that the password reset process has started
      Swal.fire(
        "Success!",
        "A password reset OTP has been sent to your email.",
        "success"
      );

      // Hide the email form and show the OTP verification form
      setShowEmailForm(false);
    } catch (error) {
      // Handle API error, e.g., if the email is not found
      Swal.fire("Oops!", "Something went wrong", "error");
    }
  };



  const handleResetPassword = async (e) => {
    e.preventDefault();

    const formdata = {
      email: email,
      otp: otp,
      newPassword: newPassword,
    };

    try {
      // Assuming resetPassword function takes the email, OTP, and new password as parameters
      await resetPassword(formdata);

      // Display a message to inform the user that the password has been reset successfully
      Swal.fire("Success!", "Password reset successfully", "success");

      // Optionally, you can redirect the user to the login page or perform any other action
    } catch (error) {
      // Handle API error, e.g., if the OTP is invalid or the new password is not strong enough
      Swal.fire("Oops!", "Something went wrong", "error");
    }
  };

  return (
    <div className={styles.container}>
      {showEmailForm && (
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Forgot Password</h2>
          <form onSubmit={handleSendOtp}>
            <label className={styles.formLabel}>
              Email:
              <input
                className={styles.formInput}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button className={styles.formButton} type="submit">
              Send OTP
            </button>
          </form>
        </div>
      )}

      {!showEmailForm && (
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Verify OTP</h2>
          <form onSubmit={handleResetPassword}>
            <label className={styles.formLabel}>
              OTP:
              <input
                className={styles.formInput}
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </label>
   
            <label className={styles.formLabel}>
              New Password:
              <input
                className={styles.formInput}
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label className={styles.formLabel}>
              Email:
              <input
                className={styles.formInput}
                type="email"
                value={email}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <button className={styles.formButton} type="submit">
              Reset Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
