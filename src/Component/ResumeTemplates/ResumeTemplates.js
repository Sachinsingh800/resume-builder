import React, { useRef } from "react";
import styles from "./ResumeTemplates.module.css";
import { resume } from "../../Recoil";
import { useRecoilState } from "recoil";
import { ChooseColor } from "../../Recoil";
import { useRecoilValue } from "recoil";
import { croppedImageState } from "../../Recoil";
import { resumeType } from "../../Recoil";

export function ResumeTemplates() {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [resumeData, setResumeData] = useRecoilState(resume);
  const image = useRecoilValue(croppedImageState);
  const type = useRecoilValue(resumeType);

  const divToExportRef = useRef(null);

  const imageDataUrl = image;
  const imageTag = `<img src="${imageDataUrl}" alt="Profile" />`;

  const exportHTML = () => {
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    const footer = '</body></html>';

    const sourceHTML =
      header + document.getElementById('content').innerHTML + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement('a');
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  return (
    <>
      <button onClick={exportHTML}>Export to DOC</button>
  
    <div id="content">
    


    <div
      style={{
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ccc",
        margin: "20px auto",
        maxWidth: "800px",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: color,
          padding: "20px",
          textAlign: "center",
        }}
      >
        <center>
          {image ? (
            <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU"
              alt="Profile"
              style={{
                maxWidth: "100px",
                borderRadius: "50%",
              }}
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU"
              alt="Profile"
              style={{
                maxWidth: "100px",
                borderRadius: "50%",
              }}
            />
          )}
        </center>
        <h1 style={{ fontSize: "24px", margin: "0" }}>
          {resumeData.firstName} {resumeData.lastName}
        </h1>
        <h2 style={{ fontSize: "18px", margin: "0" }}>{resumeData.jobTitle}</h2>
      </div>
      <div className="person_info">
        <div className="left_box">
          <div style={{ margin: "10px 0" }}>
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
          <div className="skills">
            <h2 style={{ color: color }}>Skills</h2>
            <ul style={{ listStyle: "disc" }}>
              {resumeData?.skillSummary?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right_box">
          <div>
            <p>{resumeData.bio}</p>
          </div>
          {type !== "Fresher" ? (
            <div className="experience">
              <h2 style={{ color: color }}>Work Experience</h2>
              {resumeData.workExperience.map((exp, index) => (
                <div key={index} className="experience-item">
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
          ) : (
            ""
          )}
          <div className="education">
            <h2 style={{ color: color }}>Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
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
    </>
  );
}
