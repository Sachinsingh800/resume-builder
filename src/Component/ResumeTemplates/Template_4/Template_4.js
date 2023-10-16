import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_4.module.css"

const Template_4 = () => {
  return (
    <div className={style.main}>
      <div className={style.left_section}>
        <h1 className={style.name}>JESSICA CLAIRE</h1>
        <Divider className="divider" />
        <div className="section">
          <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
          <Divider className="divider" />
          <p className="section-content">
            Lorem Ipsum is simply dummy text of scrambled it to make a ty It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">WORK HISTORY</h2>
          <Divider className="divider" />
          <div className="work-entry">
            <h3 className="position">Software Engineer</h3>
            <p className="company">ABC Company</p>
            <p className="date">2019.08 - Present</p>
            <p className="description">
              Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="work-entry">
            <h3 className="position">Software Engineer</h3>
            <p className="company">ABC Company</p>
            <p className="date">2019.08 - Present</p>
            <p className="description">
              Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="section">
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
      </div>
      <div className={style.right_section} style={{backgroundColor:"blue"}}>
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
        <Divider className="divider" />
        <div className="section">
          <h2 className="section-title">SKILLS</h2>
          <Divider className="divider" />
          <ul className="skills-list">
            <li>
              Store Opening and Closing and also helped other members with their work
            </li>
            <li>Store Opening and Closing</li>
            <li>Store Opening and Closing</li>
            <li>Store Opening and Closing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template_4;
