import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import styles from "./Template_15.module.css";
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
import downloadimg from "../../Images/download.gif"
import downloadpdf from "../../Images/pdf-download-2617.svg"
import downloaddoc from "../../Images/google-docs-icon-2.svg"
import downloadtext from "../../Images/icons8-text-500.svg"


const PDFRenderer = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const Template_15= () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                font-size: 14px;
            }
    
            .container {
                display: grid;
                grid-template-columns: 1fr 2fr;
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
                gap: 2rem;
                text-align: left;
            }
    
            .info_box {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding: 1rem 1rem;
            }
    
            .education {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1rem;
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
                gap: .5rem;
                padding: 2rem 1rem;
                height: 65.3rem;
                /* 1240px / 16px = 77.5rem */
                font-size: 14px;
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
                gap: 1rem;
            }
    
            .heading {
                padding: 3rem 1rem;
            }
    
            .certifications {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
    
            .skills {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
    
            .skills ul {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
    
            .professional_summary {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
    
            .work {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
    
            hr {
                margin-left: 1rem;
            }
    
            .info_box p {
                display: flex;
                gap: .5rem;
                align-items: center;
            }
    
            .certifications ul {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
    
            .header {
                height: 8rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 2rem 1rem;
                background-color: rgb(201, 198, 198);
                overflow: hidden;
                font-size: 14px;
            }
    
            .img_box {
                border-radius: 50%;
                margin-left: -3.3rem;
                background-color: white;
                padding: 3rem;
                height: 10rem;
                width: 10rem;
            }
            .img_box img{
              border-radius: 50%;
            }
    
            .name_box {
                width: 70%;
                height: 100%;
                padding: 1rem;
            }
    
            .section {
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }
    
            .work_entry {
                display: grid;
                grid-template-columns: 1fr;
            }
    
            .inner_div {
                border-left: 1px rgb(0, 0, 0) solid;
                padding: 1rem .5rem;
                margin-left: -1rem;
            }
    
            .section_title {
                display: flex;
                align-items: center;
                gap: 2.7rem;
            }
    
            .description {
                width: 25rem;
            }
    
            .contact_value {
                display: flex;
                align-items: center;
               
            }
            .contact_value span,p {
              margin:0;
             
             
            }
    
            .contact_label {
                font-size: small;
            }
    
            .contact_info {
                display: flex;
                flex-direction: column;
                margin:0;
                list-style:none;
                gap:.5rem;
            }
        
    
            .skills_list {
                display: flex;
                flex-direction: column;
                gap: .5rem;
                padding-top: 1rem;
            }
            .name{
              margin:0rem;
            }
            .work-info h3,p{
              margin:0rem;
            }
            .ul{
              margin-top:-1rem;
            }
            .ul li{
              margin-left:-1rem!important;
            }
            .name_box{
              margin-top:3.5rem;

            }
            .icon{
              height:1rem;
              width:1rem;
              margin-left:-1rem;
            }
            .contact_value{
              margin-left:-2rem; 
            }
        </style>
    </head>
    
    <body>
        <div class="main">
            <div class="header">
                <div class="img_box">
                    <img src=${base64Image3} alt="dp" />
                </div>
                <div class="name_box">
                    <h1 class="name">${formData.resume.name} </h1>
                    <h5 class="name">${formData.resume.jobTitle}</h5>
                </div>
            </div>
            <div class="container">
                <div class="right_section">
                    <h2 class="section-title">CONTACTS</h2>
                    <ul class="contact_info">
                        <li >
                            <div class="contact_value">
                                <span class="icon">
                                <img class="icon" src=${base64Image5} alt="dp" />
                                </span>
                                <p class="contact-value">${formData.resume.contact.phone}</p>
                            </div>
                        </li>
                        <li>
                            <div class="contact_value">
                            <span class="icon">
                            <img class="icon" src=${base64Image4} alt="dp" />
                            </span>
                                <p class="contact-value">${formData.resume.contact.email}</p>
                            </div>
                        </li>
                        <li>
                            <div class="contact_value">
                            <span class="icon">
                            <img class="icon" src=${base64Image2} alt="dp" />
                            </span>
                                <p class="contact-value">${formData.resume.socialLinks.linkedin}</p>
                            </div>
                        </li>
                        <li>
                            <div class="contact_value">
                            <span class="icon">
                            <img class="icon" src=${base64Image1} alt="dp" />
                            </span>
                                <p class="contact-value">
                                ${formData.resume.address.address},
                                ${formData.resume.address.state },
                                ${formData.resume.address.postalCode }
                                </p>
                            </div>
                        </li>
                    </ul>
    
                    <div class="section">
                        <h2 class="section-title">EDUCATION</h2>
                        <ul class="ul">

                        ${formData.resume.education.map((item) => `
                    <li>
                    <div class="work_entry">
                        <p class="date">${item.startYear} - ${item.endYear}</p>
                        <div class="work-info">
                            <h3 class="degree">${item.degree}</h3>
                            <p class="university">${item.collegeName}</p>
                        </div>
                    </div>
                    </li>
                    `)}

                        </ul>
                        
                    </div>
    
                    <div class="section">
                        <h2 class="section-title">SKILLS</h2>
                        <ul class="ul">
                        ${formData.resume.skillsAndLevel.map((item) => `
                        <li> ${item.skills}</li>
                        `)}
                        </ul>
                    </div>
    
                    <div class="section">
                        <h2 class="section-title">LANGUAGE</h2>
                        <ul class="ul">
                        ${formData.resume.knownLanguages.map((item) => `
                        <li>
                        ${item?.lang}
                      </li>
                   `)}
                        </ul>
                    </div>
    
                    <div class="section">
                        <h2 class="section-title">AWARDS</h2>
                        <ul class="ul">
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
    
                <div class="left_section">
                    <div class="section">
                        <h2 class="section-title">ABOUT ME</h2>
                        <Divider class="divider" />
                        <p class="section-content">
                        ${formData.resume.summary}
                        </p>
                    </div>
    
                    <div class="section">
                        <h2 class="section_title">EXPERIENCE</h2>
                        <Divider class="divider" />
                        <ul>
                        ${formData.resume.work.map((item) => `
                    <li>
                    <div class="work_entry">
                        <p class="date">${item?.startDate} - ${item?.endDate}</p>
                        <div class="inner_div">
                            <h3 class="position">${item?.title}</h3>
                            <p class="company">${item?.company} </p>
                            <p class="description">
                            ${item?.description}
                            </p>
                        </div>
                    </div>
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


  const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
  

       {loading ?   
       <div  className={styles.down_img_box}>
           <img src={downloadimg } alt="downloading" />
           {error && <p style={{ color: "red" }}>{error}</p>}
       </div>
       :
       <div className={styles.download_box}>
       <button className={styles.closeButton} onClick={onClose}>Close
       </button>
       <div  className={styles.down_btn_box}>
       <div  onClick={handleResume} className={styles.icon_download}><img src={downloadpdf } alt="pdf"/>PDF</div>
        <div  onClick={handleResume} className={styles.icon_download}><img src={downloaddoc } alt="doc"/> DOC</div>
         <div  onClick={handleResume} className={styles.icon_download}><img src={downloadtext } alt="text"/>TEXT</div>
       </div>
       </div>
       }
         
        

        </div>
      </div>
    );
  };

  const handleDownloadClick = () => {
    // Handle the download logic
    // For now, let's just open the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };




  return (
    <>
      <div className={styles.download_btn} >
    <button onClick={handleDownloadClick}>Download</button>
      <ResumeModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    
    <div className={styles.main}>
    <div className={styles.header}>
      <div className={styles.img_box} style={{ height: imgSize, width: imgSize }}>
        <img src={base64Image3} alt="dp" />
      </div>
      <div className={styles.name_box}>
        <h1 className={styles.name} style={{ fontFamily:fontStyle ,color:color3,fontSize: fontSize  }}>{formData.resume.name}</h1>
        <h5 className={styles.name}>{formData.resume.jobTitle}</h5>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.right_section}>
        <h2 className={styles.section_title}>CONTACTS</h2>
        <ul className={styles.contact_info}>
          <li>
            <div className={styles.contact_value}>
              <span className={styles.icon}>
                <img className={styles.icon} src={base64Image5} alt="dp" />
              </span>
              <p className={styles.contact_value}>{formData.resume.contact.phone}</p>
            </div>
          </li>
          <li>
            <div className={styles.contact_value}>
              <span className={styles.icon}>
                <img className={styles.icon} src={base64Image4} alt="dp" />
              </span>
              <p className={styles.contact_value}>{formData.resume.contact.email}</p>
            </div>
          </li>
          <li>
            <div className={styles.contact_value}>
              <span className={styles.icon}>
                <img className={styles.icon} src={base64Image2} alt="dp" />
              </span>
              <p className={styles.contact_value}>{formData.resume.socialLinks.linkedin}</p>
            </div>
          </li>
          <li>
            <div className={styles.contact_value}>
              <span className={styles.icon}>
                <img className={styles.icon} src={base64Image1} alt="dp" />
              </span>
              <p className={styles.contact_value}>
                {formData.resume.address.address},
                {formData.resume.address.state},
                {formData.resume.address.postalCode}
              </p>
            </div>
          </li>
        </ul>

        <div className={styles.section}>
          <h2 className={styles.section_title}>EDUCATION</h2>
          <ul className={styles.ul}>
            {formData.resume.education.map((item, index) => (
              <li key={index} className={styles.work_entry}>
                <p className={styles.date}>{item.startYear} - {item.endYear}</p>
                <div className={styles.work_info}>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <p className={styles.university}>{item.collegeName}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section_title}>SKILLS</h2>
          <ul className={styles.ul}>
            {formData.resume.skillsAndLevel.map((item, index) => (
              <li key={index}>{item.skills}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section_title}>LANGUAGE</h2>
          <ul className={styles.ul}>
            {formData.resume.knownLanguages.map((item, index) => (
              <li key={index}>{item?.lang}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section_title}>AWARDS</h2>
          <ul className={styles.ul}>
            {formData.resume.awards.map((item, index) => (
              <li key={index} className={styles.award_list}>
                <h5>{item?.date}</h5>
                <h4>{item?.title}</h4>
                <p>{item?.issuingOrganization}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.left_section}>
        <div className={styles.section}>
          <h2 className={styles.section_title}>ABOUT ME</h2>
          <Divider className={styles.divider} />
          <p className={styles.section_content}>{formData.resume.summary}</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.section_title}>EXPERIENCE</h2>
          <Divider className={styles.divider} />
          <ul>
            {formData.resume.work.map((item, index) => (
              <li key={index} className={styles.work_entry}>
                <p className={styles.date}>{item?.startDate} - {item?.endDate}</p>
                <div className={styles.inner_div}>
                  <h3 className={styles.position}>{item?.title}</h3>
                  <p className={styles.company}>{item?.company}</p>
                  <p className={styles.description}>{item?.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
    </>
   
  );
};

export default Template_15;
