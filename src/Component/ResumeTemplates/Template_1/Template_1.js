import React from "react";
import style from "./Template_1.module.css";
import dp from "../../Images/dp.png";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

function Template_1() {
  return (
    <div className={style.main}>
      <div
        className={style.left_section}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div>
          <div className={style.img_container}>
            <div className={style.img_box}>
              <img src={dp} alt="img" />
            </div>
          </div>

          <div className={style.info_box}>
            <p><AiOutlineMail/> sachin@gmail.com</p>
            <p><AiOutlinePhone/> 7254801625</p>
            <p><CiLocationOn/> Dhanbad,pin *281163</p>
          </div>
        </div>
        <br />
        <hr />
        <div>
          <h2>Education</h2>
          <p>Sadsghghdgsada</p>
        </div>
      </div>

      <div className={style.right_section}>
        <div className={style.heading}>
          <h1>Your Name</h1>
        </div>

        <div className={style.certifications}>
          <h2>CERTIFICATIONS</h2>
          <ul>
            <li>dugsugdgsdusgdgsu</li>
            <li>dugsugdgsdusgdgsu</li>
          </ul>
        </div>
        <br />
        <hr />

        <div className={style.skills}>
          <h2>SKILLS</h2>
          <ul>
            <li>dugsugdgsdusgdgsu</li>
            <li>dugsugdgsdusgdgsu</li>
            <li>dugsugdgsdusgdgsu</li>
            <li>dugsugdgsdusgdgsu</li>
            <li>dugsugdgsdusgdgsu</li>
            <li>dugsugdgsdusgdgsu</li>
          </ul>
        </div>
        <br />
        <hr />

        <div className={style.professional_summary}>
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            A Professional Summary is a brief, carefully crafted statement that
            highlights your key qualifications and career objectives. It serves
            as a snapshot of your professional background, summarizing your
            relevant skills, experiences, and career aspirations. A well-written
            Professional Summary can capture the attention of potential
            employers and offer them insight into what you can bring to their
            organization."
          </p>
        </div>
        <br />
        <hr />

        <div className={style.work}>
          <h2>WORK HISTORY</h2>
          <ul className={style.work_history}>
            <li>
              <p>dugsugdgsdusgdgsu</p>
              <p>
                <h5>HealthCare -</h5>
                <ul>
                  <li>
                  The healthcare sector encompasses a wide range of services and professions dedicated to medical care, wellness, and public health.
                  </li>
                  <li>
                  It includes hospitals, clinics, nursing homes, and other healthcare facilities that provide treatment and care to patients.
                  </li>
                  <li>
                  The sector involves various medical professionals like doctors, nurses, pharmacists, and therapists, each contributing to patient well-being.
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p>dugsugdgsdusgdgsu</p>
              <p>
                <h5>HealthCare -</h5>
                <ul>
                  <li>
                  The healthcare sector encompasses a wide range of services and professions dedicated to medical care, wellness, and public health.
                  </li>
                  <li>
                  It includes hospitals, clinics, nursing homes, and other healthcare facilities that provide treatment and care to patients.
                  </li>
                  <li>
                  The sector involves various medical professionals like doctors, nurses, pharmacists, and therapists, each contributing to patient well-being.
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p>dugsugdgsdusgdgsu</p>
              <p>
                <h5>HealthCare -</h5>
                <ul>
                  <li>
                  The healthcare sector encompasses a wide range of services and professions dedicated to medical care, wellness, and public health.
                  </li>
                  <li>
                  It includes hospitals, clinics, nursing homes, and other healthcare facilities that provide treatment and care to patients.
                  </li>
                  <li>
                  The sector involves various medical professionals like doctors, nurses, pharmacists, and therapists, each contributing to patient well-being.
                  </li>
                </ul>
              </p>
            </li>
      
         
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Template_1;
