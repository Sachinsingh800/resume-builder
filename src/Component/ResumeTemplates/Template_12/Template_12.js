import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_12.module.css";

const Template_12 = () => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <h1 className={style.name}>JESSICA CLAIRE</h1>
        <h5 className={style.name}>frontend Developer</h5>
      </div>
      <div className={style.container}>
        <div className={style.left_section}>
          <div className="section">
            <p className="section-content">
              Lorem Ipsum is simply dummy text of scrambled it to make a ty It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more.
            </p>
          </div>
          <div className={style.section}>
            <h2 className="section-title">Experience</h2>
            <Divider className="divider" />

            <div className={style.work_entry}>
              <p className="date">2019.08 - Present</p>
              <div>
                <h3 className="position">Software Engineer</h3>
                <p className="company">ABC Company</p>

                <p className="description">
                  Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className={style.section}>
            <h2 className="section-title">EDUCATION</h2>
            <Divider className="divider" />
            <div className="education-entry">
              <h3 className="degree">Masters in Data Science</h3>
              <p className="university">ABC College</p>
              <p className="date">2019.08 - 2023.09</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className={style.section}>
            <h2 className="section-title">Certification</h2>
            <Divider className="divider" />
            <div className="education-entry">
              <h3 className="degree">Masters in Data Science</h3>
              <p className="university">ABC College</p>
              <p className="date">2019.08 - 2023.09</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div
          className={style.right_section}
          style={{ backgroundColor: "grey" }}
        >
          <h2 className="section-title">Personal Info</h2>
          <Divider className="divider" />
          <div className="contact-info">
            <div className="contact-entry">
              <h4 className="contact-label">Address</h4>
              <p className="contact-value">Enter Your Address here</p>
            </div>
            <div className="contact-entry">
              <h4 className="contact-label">Phone</h4>
              <p className="contact-value">+91 9503942697</p>
            </div>
            <div className="contact-entry">
              <h4 className="contact-label">E-mail</h4>
              <p className="contact-value">ss20010126@gmail.com</p>
            </div>
            <div className="contact-entry">
              <h4 className="contact-label">Twitter</h4>
              <p className="contact-value">@5hubzzz</p>
            </div>
            <div className="contact-entry">
              <h4 className="contact-label">LinkedIn</h4>
              <p className="contact-value">linkedin.com/en/5hubzzz</p>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">SKILLS</h2>
            <Divider className="divider" />
            <ul className="skills-list">
              <li>
                <h4>C++</h4>
                <p>Advanced</p>
              </li>
              <li>
                <h4>C++</h4>
                <p>Advanced</p>
              </li>
              <li>
                <h4>C++</h4>
                <p>Advanced</p>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2 className="section-title">Language</h2>
            <Divider className="divider" />
            <ul className="skills-list">
              <li>Hindi</li>
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>
          <div className="section">
            <h2 className="section-title">Interest</h2>
            <Divider className="divider" />
            <ul className="skills-list">
              <li>Hindi</li>
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template_12;