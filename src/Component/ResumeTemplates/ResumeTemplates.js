import React, { useState } from 'react';
import styles from './ResumeTemplates.module.css'; // Import the CSS module
import dp from "../Images/dp.png"

function ResumeTemplates() {
    const [color,setColor] = useState("red")

    const resumeData = {
        profilePicture: dp,
        jobTitle: 'Web Developer',
        firstName: 'John',
        lastName: 'Doe',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        address: '123 Main Street',
        city: 'Sample City',
        postCode: '12345',
        state: 'Sample State',
        country: 'Sample Country',
        bio:"Creating a fully functional resume template in React.js is a complex task that involves designing the user interface, handling user input, and possibly integrating with a database or backend service to store and retrieve resume data. I'll provide you with a simplified example of a basic resume template in React.js to get you started. This example won't include all possible features but will serve as a starting point.",
        workExperience: [
          {
            positionTitle: 'Software Engineer',
            companyName: 'ABC Inc.',
            startDate: 'January 2019',
            endDate: 'Present',
            workSummary: 'Worked on various web development projects.',
          },
        ],
        education: [
          {
            schoolName: 'University of XYZ',
            schoolLocation: 'Sample Location',
            startDate: 'August 2015',
            endDate: 'May 2019',
            degree: 'Bachelor of Science',
            fieldOfStudy: 'Computer Science',
            description: 'Graduated with honors.',
          },
        ],
        skillSummary: ["JavaScript", "React", "HTML", "CSS", "Node.js"],
      };
      

  return (
   
            <div>
                <div className={styles.colorplates_box}>
                <h4>Choose Color</h4>
        <ul>
            <li style={{backgroundColor:"red"}} onClick={()=>setColor("red")}></li>
            <li style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}></li>
            <li style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}></li>
            <li style={{backgroundColor:"green"}} onClick={()=>setColor("green")}></li>
        </ul>
                </div>
    <br/>

        <div className={styles.resume}> {/* Use the CSS class from the module */}

<div className={styles.header} style={{backgroundColor:color}}> {/* Use the CSS class from the module */}
  <img src={resumeData.profilePicture} alt="Profile" />
  <h1>{resumeData.firstName} {resumeData.lastName}</h1>
  <h2>{resumeData.jobTitle}</h2>
</div>

<div className={styles.person_info}>


<div className={styles.left_box}>
<div className={styles.contact}> {/* Use the CSS class from the module */}
  <p>Phone: {resumeData.phone}</p>
  <p>Email: {resumeData.email}</p>
  <p>Address: {resumeData.address}, {resumeData.city}, {resumeData.postCode}</p>
  <p>State: {resumeData.state}, Country: {resumeData.country}</p>
</div>

<div className={styles.skills}> {/* Use the CSS class from the module */}
  <h2 style={{color:color}}>Skills</h2>
  {resumeData.skillSummary.map((item)=>
  <ul>
    <li>{item}</li>
  </ul>
  )}
</div>
</div>

    <div className={styles.right_box}>
    <div>
        <p>{resumeData.bio}</p>
    </div>
    <div className={styles.experience}> {/* Use the CSS class from the module */}
  <h2 style={{color:color}}>Work Experience</h2>
  {resumeData.workExperience.map((exp, index) => (
    <div key={index} className={styles['experience-item']}> {/* Use the CSS class from the module */}
      <h3>{exp.positionTitle} at {exp.companyName}</h3>
      <p>{exp.startDate} - {exp.endDate}</p>
      <p>{exp.workSummary}</p>
    </div>
  ))}
</div>
<div className={styles.education}> {/* Use the CSS class from the module */}
  <h2 style={{color:color}}>Education</h2>
  {resumeData.education.map((edu, index) => (
    <div key={index} className={styles['education-item']}> {/* Use the CSS class from the module */}
      <h3>{edu.schoolName} - {edu.schoolLocation}</h3>
      <p>{edu.startDate} - {edu.endDate}</p>
      <p>Degree: {edu.degree} in {edu.fieldOfStudy}</p>
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
