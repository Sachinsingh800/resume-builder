import React, { useState, useRef } from "react";
import styles from "./ResumeTemplates.module.css";
import { Name } from "../../Recoil";
import { useRecoilState } from "recoil";
import generatePDF from "react-to-pdf";
import { ChooseColor } from '../../Recoil'

function ResumeTemplates() {
 
  const [color, setColor] = useRecoilState(ChooseColor);
  const [resumeData, setName] = useRecoilState(Name);
  const targetRef = useRef();

  const pdfOptions = {
    unit: "mm",
    format: "a4",
    orientation: "portrait", // or 'landscape'
  };

  return (
    <div>
           {/* <button onClick={() => generatePDF(targetRef, pdfOptions)}>
          Download PDF
        </button> */}
      

      {/* Use the ref to reference the content to be included in the PDF */}
      <div className={styles.resume} id="content" ref={targetRef}>
        <div className={styles.header} style={{ backgroundColor: color }}>
          <div className={styles.img_box}>
          <img src={resumeData.profilePicture} alt="Profile" />
          </div>
          
          <h1>
            {resumeData.firstName} {resumeData.lastName}
          </h1>
          <h2>{resumeData.jobTitle}</h2>
        </div>

        <div className={styles.person_info}>
          <div className={styles.left_box}>
            <div className={styles.contact}>
              {" "}
              {/* Use the CSS class from the module */}
              <p>Phone: {resumeData.phone}</p>
              <p>Email: {resumeData.email}</p>
              <p>
                Address: {resumeData.address}, {resumeData.city},{" "}
                {resumeData.postCode}
              </p>
              <p>
                State: {resumeData.state}, Country: {resumeData.country}
              </p>
            </div>

            <div className={styles.skills}>
              {" "}
              {/* Use the CSS class from the module */}
              <h2 style={{ color: color }}>Skills</h2>
              {resumeData?.skillSummary?.map((item) => (
                <ul>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </div>

          <div className={styles.right_box}>
            <div>
              <p>{resumeData.bio}</p>
            </div>
            <div className={styles.experience}>
              {" "}
              {/* Use the CSS class from the module */}
              <h2 style={{ color: color }}>Work Experience</h2>
              {resumeData.workExperience.map((exp, index) => (
                <div key={index} className={styles["experience-item"]}>
                  {" "}
                  {/* Use the CSS class from the module */}
                  <h3>
                    {exp.positionTitle} at {exp.companyName}
                  </h3>
                  <p>
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p>{exp.workSummary}</p>
                </div>
              ))}
            </div>
            <div className={styles.education}>
              {" "}
              {/* Use the CSS class from the module */}
              <h2 style={{ color: color }}>Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className={styles["education-item"]}>
                  {" "}
                  {/* Use the CSS class from the module */}
                  <h3>
                    {edu.schoolName} - {edu.schoolLocation}
                  </h3>
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p>
                    Degree: {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplates;
