import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_12.module.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useRecoilState } from "recoil";
import {
  ChooseColor,
  chooseTemplates,
  ChooseColorSecond,
  croppedImageState,
  resumeData,
  ChooseColorThird,
  fontState,
  fontSizeState,
  imageSizeState,
} from "../../../Recoil";


const PDFRenderer = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const Template_12= () => {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [color3, setColor3] = useRecoilState(ChooseColorThird);
  const [fontStyle, setFontStyle] = useRecoilState(fontState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const [imgSize, setImgSize] = useRecoilState(imageSizeState);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  const [formData, setFormData] = useRecoilState(resumeData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [base64Image1, setBase64Image1] = useState('');
  const [base64Image2, setBase64Image2] = useState('');
  const [base64Image3, setBase64Image3] = useState('');
  const [base64Image4, setBase64Image4] = useState('');
  const [base64Image5, setBase64Image5] = useState('');

  console.log(formData.resume, "resume data");

  const handleDate = (data) => {
    console.log(data, "data");

    const startYear = new Date(data).getFullYear();

    return startYear;
  };



  
  useEffect(() => {
    const imageLocations = [
      location,
      linkedin,
      dp,
      mail,
      call,
    ];
  
    const handleImageChange = async () => {
      try {
        const promises = imageLocations.map(async (location, index) => {
          const response = await fetch(location);
          const blob = await response.blob();
          const reader = new FileReader();
  
          return new Promise((resolve) => {
            reader.onloadend = () => {
              // The result property contains the base64-encoded string
              const base64String = reader.result;
              resolve({ index, base64String });
            };
  
            // Read the image file as a data URL
            reader.readAsDataURL(blob);
          });
        });
  
        // Wait for all promises to resolve
        const results = await Promise.all(promises);
  
        // Update state based on index
        results.forEach(({ index, base64String }) => {
          if (index === 0) {
            setBase64Image1(base64String);
          } else if (index === 1) {
            setBase64Image2(base64String);
          }else if (index === 2) {
            setBase64Image3(base64String);
          }
          else if (index === 3) {
            setBase64Image4(base64String);
        
          }else if (index === 4) {
            setBase64Image5(base64String);
          }
        });
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
  
    handleImageChange();
  }, []);
  

  const getHTML = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Resume</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f0f0;
                box-sizing: border-box;
                background-color: white;
            }
    
            .main {
                width: 850px;
                height: 1130px;
                background-color: white;
            }
    
            .container {
                display: grid;
                grid-template-columns: 2fr 1fr;
            }
    
            .img_box {
                height: 7rem;
                width: 7rem;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
    
            .img_box img {
                height: 100%;
                width: 100%;
            }
    
            .left_section {
                display: flex;
                flex-direction: column;
                padding: 2rem 1rem;
                gap: 1rem; /* Reduced gap */
                text-align: left;
            }
    
          
    
            .education {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem; /* Reduced gap */
                padding: 1rem 1rem;
            }
    
            .img_container {
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .right_section {
                display: flex;
                flex-direction: column;
                gap: 0.25rem; /* Reduced gap */
                padding: 0rem 1rem;
                height: 1100px;
            }
    
            .right_section p {
                width: 95%!important;
                display: flex;
                flex-direction: column;
                text-align: left;
                list-style: none;
            }
    
            .right_section ul li {
                margin-left: 1.5rem;
            }
    
            .right_section ul li {
                width: 95%!important;
            }
    
            .work_history {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
    
            .heading {
                background-color: aliceblue;
                padding: 3rem 1rem;
            }
    
            .certifications {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.25rem; /* Reduced gap */
            }
    
            .skills {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.25rem; /* Reduced gap */
            }
    
            .skills ul {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.5rem; /* Reduced gap */
            }
    
            .professional_summary {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.25rem; /* Reduced gap */
            }
    
            .work {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.25rem; /* Reduced gap */
            }
    
       
    
            .info_box p {
                display: flex;
                gap: 0.25rem; /* Reduced gap */
                align-items: center;
            }
    
            .certifications ul {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.5rem; /* Reduced gap */
            }
    
            .header {
                background-color: rgb(163, 163, 163);
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 2rem 1rem;
            }
    
            .section {
                display: flex;
                flex-direction: column;
                gap: 0.25rem; /* Reduced gap */
            }
    
            .work_entry {
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap:.5rem;
            }
            .work-info{
              margin:0;
              padding:0;
            }
            .work-info h4{
              margin:0;
            }
    
            .education {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
    
            .header h2,
            h5 {
                margin: 0;
            }
            .certi-li h4,h5,p{
              margin: 0;
            }
            .ul{
              margin-top:-1rem;
              display:grid;
              grid-template-columns: 1fr 1fr;
           
            }
            .exp-ul{
              margin-top:-1rem; 
            }
            .ul-certi{
              margin-top:-2rem;
              display:grid;
              grid-template-columns: 1fr 1fr;
            }
            .education-entry h4,h5,p{
              margin: 0;
            }
            .contact-entry h4,p{
              margin: 0;
            }
            .contact-info{
              display:flex;
              flex-direction:column;
              gap:.5rem;
            }
            .award-list h4,h5,p{
              margin: 0;
            }
            .ul-skill{
              margin-top:-1rem;
              margin-left:-2.5rem;
            }
        </style>
    </head>
    
    <body>
        <div class="main">
            <div class="header">
                <h2 class="name"> ${formData.resume.name} </h2>
                <h5 class="name">${formData.resume.jobTitle}</h5>
            </div>
            <div class="container">
                <div class="left_section">
                    <div class="section">
                        <p class="section-content">
                        ${formData.resume.summary}
                        </p>
                    </div>
                    <div class="section">
                        <h3 class="section-title">Experience</h3>
                        <ul class="exp-ul">
                        ${formData.resume.work.map((item) => `
                  
                    <li>
                    <div class="work_entry">
                        <h5> ${item?.startDate} - ${item?.endDate}</h5>
                        <div class="work-info">
                            <h4 class="position">${item?.title}</h4>
                            <p class="company">${item?.company} - ${item?.location}</p>
                            <p class="description">
                            ${item?.description}
                            </p>
                        </div>
                    </div>
                </li>
                `)}  
                        </ul>
                    </div>
                    <div class="section">
                        <h3 class="section-title">Education</h3>
                        <ul class="ul">

                        ${formData.resume.education.map((item) => `
                        <li>
                        <div class="education-entry">
                            <h4 class="degree">${item.degree}</h4>
                            <p class="university">${item.collegeName}</p>
                            <p class="date">${item.startYear} - ${item.endYear}</p>
                        </div>
                    </li>
                    `)}

                        </ul>
                    </div>
                    <div class="section">
                        <h3 class="section-title">Certification</h3>
                        <hr class="divider" />
                        <ul class="ul-certi">
                        ${formData.resume.certifications.map((item) => `
                        <li>
                        <div class="education-entry">
                            <h4 class="degree">${item?.title}</h4>
                            <p class="university">${item?.issuingOrganization }</p>
                            <p class="date">${item?.date}</p>
                        </div>
                    </li>
                    `)}
                        </ul>
                    </div>
                </div>
                <div class="right_section" style="background-color: #D3D3D3;">
                    <h4 class="section-title">Personal Info</h4>
                    <div class="contact-info">
                        <div class="contact-entry">
                            <h5 class="contact-label">Address</h5>
                            <p class="contact-value">  
                            ${formData.resume.address.address},
                            ${formData.resume.address.state },
                            ${formData.resume.address.postalCode }
                            </p>
                        </div>
                        <div class="contact-entry">
                            <h5 class="contact-label">Phone</h5>
                            <p class="contact-value">${formData.resume.contact.phone}</p>
                        </div>
                        <div class="contact-entry">
                            <h5 class="contact-label">E-mail</h5>
                            <p class="contact-value"> ${formData.resume.contact.email}</p>
                        </div>
                        <div class="contact-entry">
                            <h5 class="contact-label">LinkedIn</h5>
                            <p class="contact-value">${formData.resume.socialLinks.linkedin}</p>
                        </div>
                    </div>
                    <div class="section">
                        <h4 class="section-title">Skill</h4>
                        <ul class="ul-skill">
                        ${formData.resume.skillsAndLevel.map((item) => `
                        <li> ${item.skills}</li>
                        `)}
                        </ul>
                    </div>
                    <div class="section">
                        <h4 class="section-title">Language</h4>
                    
                        <ul class="ul-skill">
                        ${formData.resume.knownLanguages.map((item) => `
                         <li>
                         ${item?.lang}
                       </li>
                    `)}
                            
                        </ul>
                    </div>
                    <div class="section">
                        <h4 >Awards</h4>
                        <ul class="ul-skill">
                        ${formData.resume.awards.map((item) => `
                         <li class="award-list">
                                <h5>${item?.date}</h5>
                                <h4>${item?.title}</h4>
                                <p>${item?.issuingOrganization}</p>
                            </li>
                    `)}       
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>
    
    `;
  };

  const handleResume = async () => {
    setLoading(true);
    setError("");

    const axiosConfig = {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const response = await axios.post(
        "https://whihtmltopdf.onrender.com/convertToPdf",
        { htmlContent: getHTML() },
        axiosConfig
      );

      setLoading(false);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "lizmy.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };






  return (
    <div>
    <button onClick={handleResume}>Download</button>
    <br />
    {loading && <p>Loading...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}
    <PDFRenderer htmlContent={getHTML()} />
  </div>
  );
};

export default Template_12;
