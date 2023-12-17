import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import styles from "./Template_10.module.css";
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

const Template_10= () => {
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
      croppedImage ? croppedImage : dp,
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
  
  const getCSS = () =>{
    return `
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
      padding:1rem;
  }
  .heading{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 5rem;
      width: 52rem; 
  }
  .summary h3{
      width: 90%;
  }
  .para{
      width: 90%;
  }
  .summary {
      display: flex;
    
      flex-direction: column;
  }
  .Experience{
      display: flex;
    
      flex-direction: column;
  }
  .Experience h3{
      width: 90%;
  }
  .Experience ul{
      width: 90%;
      
  }
  .Skills h3{

      width: 90%
  }
  .Skills {
      display: flex;
    
      flex-direction: column;
  }
  .Skills ul{
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-left: 1rem;
  }
  .customerService{
      display: flex;
      justify-content: space-between;
    
  }
 
  .heading h1,h3,p{
    margin:0rem;
  }
  .education h5{
    margin:0rem;
  }
  .work-des h4,p,h6{
    margin:0rem!important;
  }
  .edu-ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:.5rem;
    margin-left:-1.2rem;
  }
  .work-ul{
    display: grid;
    grid-template-columns: 1fr ;
    gap:.5rem;
    margin-left:-1.2rem;
  }
    `
  }

  const getHTML = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css"> 

     
        <title>Your Page Title</title>
    </head>
    
    <body>
        <div class="main">
            <div class="heading">
                <h1   style="color: ${color3}; font-family: ${fontStyle}; font-size:${fontSize}px;">  ${formData.resume.name}</h1>
                <h3>${formData.resume.jobTitle}</h3>
                <p>${formData.resume.contact.email} | ${formData.resume.contact.phone}</p>
            </div>
             <br/>
            <div class="summary">
                <h3>Summary</h3>
                <p>
                ${formData.resume.summary}
                </p>
            </div>
            <br/>
            <div >
                <h3>Work Experience</h3>
                <ul class="work-ul">
                ${formData.resume.work.map((item) => `
            <li>
            <div class="work-des">
                <h4 class="customerService"><span>${item?.title}</span></h4>
                <h6>Jan 2018 - Dec 2020</h6>
                <h6 class="company_name"><span>${item?.company} - ${item?.location}</span></h6>
                <p> ${item?.description}</p>
            </div>
        </li>
        `)}     
             
                   
                </ul>
            </div>
    
            <div>
                <h3>Education</h3>
                <ul class="edu-ul">
                ${formData.resume.education.map((item) => `
                <li class="education">
                <h5>${item.degree}, ${item.startYear} - ${item.endYear}</h5>
                <p>${item.collegeName}</p>
            </li>
            `)}
                        
                </ul>
            </div>
    
            <div >
                <h3>Skills</h3>
                <ul class="edu-ul">
                ${formData.resume.skillsAndLevel.map((item) => `
                 
                <li> ${item.skills}</li>
      
        `)}
                </ul>
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
        "http://3.144.48.243/api/convert",
        {
          html: getHTML(),
          cssStyles: getCSS(), // Include your CSS data here
        },
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
      <div className={styles.heading}>
        <h1 style={{ fontFamily:fontStyle ,color:color3,fontSize: fontSize }}>{formData.resume.name}</h1>
        <h3>{formData.resume.jobTitle}</h3>
        <p>{formData.resume.contact.email} | {formData.resume.contact.phone}</p>
      </div>
      <br />
      <div className={styles.summary}>
        <h3>Summary</h3>
        <p>
          {formData.resume.summary}
        </p>
      </div>
      <br />
      <div>
        <h3>Work Experience</h3>
        <ul className={styles.workUl}>
          {formData.resume.work.map((item, index) => (
            <li key={index}>
              <div className={styles.workDes}>
                <h4 className={styles.customerService}><span>{item?.title}</span></h4>
                <h6>Jan 2018 - Dec 2020</h6>
                <h6 className={styles.companyName}><span>{item?.company} - {item?.location}</span></h6>
                <p>{item?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Education</h3>
        <ul className={styles.eduUl}>
          {formData.resume.education.map((item, index) => (
            <li key={index} className={styles.education}>
              <h5>{item.degree}, {item.startYear} - {item.endYear}</h5>
              <p>{item.collegeName}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Skills</h3>
        <ul className={styles.eduUl}>
          {formData.resume.skillsAndLevel.map((item, index) => (
            <li key={index}>{item.skills}</li>
          ))}
        </ul>
      </div>
    </div>
    </>

  );
};

export default Template_10;
