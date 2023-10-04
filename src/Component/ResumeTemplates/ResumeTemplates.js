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


  console.log(resumeData,'resumedata')
  const divToExportRef = useRef(null);

  const imageDataUrl = image;
  const imageTag = `<img src="${imageDataUrl}" alt="Profile" />`;


  return (

     
  
    <div id="content">
    


    <div
  style={{
    fontFamily: "Arial, sans-serif",
    maxWidth: "2480px",  // Set the maximum width
    width: "100%",       // Set the width to 100% of its parent container
    padding: "0px",
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




     


      <table className="person_info"  style={{border:"none"}}>
  <tr >
    <td className="left_box" style={{width:"10%",padding:"40px 20px",border:"none"}}>
      <div >
        <p>Phone:{resumeData.phone}</p>
        <p>Email:{resumeData.email}</p>
        <p>Address:{resumeData.address}</p>
        <p>State:{resumeData.state}</p>
      </div>
      <div className="skills" style={{width:"40%",padding:"20px"}}>
        <h2 style={{color:color}}>Skills</h2>
        <ul >
          {resumeData?.skillSummary?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </td>
    <td className="right_box" style={{width:"40%",padding:"20px"}} >
      <div style={{padding:"20px"}} >
        <p>{resumeData.bio}</p>
      </div>
      {type !== "Fresher" ? (
        <div className="experience" style={{padding:"20px"}}>
          <h2 style={{color:color}}>Work Experience</h2>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.positionTitle} at {exp.companyName}</h3>
              <p>{exp.startDate} - {exp.endDate}</p>
              <p>{exp.workSummary}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="education" style={{padding:"20px"}}>
        <h2  style={{color:color}}>Education</h2>
        {/* {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.schoolName} - {edu.schoolLocation}</h3>
            <p>{edu.startDate} - {edu.endDate}</p>
            <p>Degree: {edu.degree} in {edu.fieldOfStudy}</p>
            <p>{edu.description}</p>
          </div>
        ))} */}
      </div>
    </td>
  </tr>
</table>















    </div>




    </div>

  );
}
