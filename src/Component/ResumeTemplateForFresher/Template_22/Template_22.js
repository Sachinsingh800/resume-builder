import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import styles from "./Template_22.module.css";
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
  authenticateduser,
} from "../../../Recoil";
import downloadimg from "../../Images/download.gif"
import downloadpdf from "../../Images/pdf-download-2617.svg"
import downloaddoc from "../../Images/google-docs-icon-2.svg"
import downloadtext from "../../Images/icons8-text-500.svg"
import { saveAs } from 'file-saver';
import { useNavigate } from "react-router-dom";


const PDFRenderer = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const Template_22= () => {
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
  const [ checkAuth, setCheckAuth] = useRecoilState(authenticateduser);
  const navigate = useNavigate()

  const handleDate = (data) => {
    console.log(data, "data");

    const startYear = new Date(data).getFullYear();

    return startYear;
  };



  
  useEffect(() => {
    const imageLocations = [
      location,
      linkedin,
        croppedImage ? croppedImage :  formData?.resume?.profilePicture ?   formData?.resume?.profilePicture :  dp,
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

  function formatDate(inputDate) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  }
  
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
      height: 1000px;
      background-color: white;
  }
  .container{
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: -1rem;
 }
 .img_box{
    height: 7rem;
    width: 7rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
 }
 .img_box img{
    height: 100%;
    width: 100%;
 }
 .left_section{
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 2rem;
    text-align: left;
 
 }
 
 .info_box{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem;
 }
 .education{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem;
 }
 .img_container{
    display: flex;
    align-items: center;
    justify-content: center;
 }
 .right_section{
    display: flex;
    flex-direction: column;
    gap: .5rem;
   padding: 2rem 1rem;
   height: 100%;
 }
 .right_section p{
    width: 95%!important;
    display: flex;
    flex-direction: column;
    text-align: left;
   
   
 }
 .right_section ul li{
    margin-left:1.5rem ;
   
 }
 .right_section ul li {
    width: 95%!important;
 }
 .work_history{
    display: flex;
    flex-direction: column;
    gap: 1rem;
 }
 .heading{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 5rem;
  width: 52rem; 

}
.heading h1,p{
margin:0rem;
}
 
 .certifications{

  display: flex;
  flex-direction: column;
  gap: .5rem;
 }

 .professional_summary{
  
    display: flex;
    flex-direction: column;
    gap: .5rem;
 }
 .work{
  
    display: flex;
    flex-direction: column;
    gap: .5rem;
 }
 hr{
    margin-left: 1rem;
 }
 .info_box p{
    display: flex;
    gap: .5rem;
    align-items: center;
 }
 .certifications ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
 
 }
 .header{
 
    height: 8rem;
    display: flex;
  align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
   
 }

 .section{
    display: flex;
    flex-direction: column;
    gap: .5rem;
 }
 .work_entry{
    display: grid;
    grid-template-columns: 1fr ;
 }
 .title_{
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 90%;
 }
 .section_title{
     display: flex;
     align-items: center;
    font-weight:100;
 
 }
 .description{
     width: 25rem;
 }
 .contact_value{
     display: flex;
     align-items: center;
     gap: .3rem;
 }
 .contact_label{
     font-size: small;
 }
 .contact_info{
 display: grid;
 grid-template-columns: 1fr ;
   gap: .5rem;
 }
 .skills_list{
 display: grid;
 grid-template-columns: 1fr ;
 gap: .5rem;
 margin-left: -3rem;
 margin-top:-1rem;
 }
 .skills_list li{
     display: flex;
     align-items: center;
 }
 .ul{
     display: flex;
     flex-direction: column;
     gap: .5rem;
     margin-top:-1rem;
 }
 .section_title{
     background-color: rgb(0, 208, 255);
     padding: 0rem 1rem;
     color: white;
     display: flex;
     gap: .5rem;
 }
 .name h1,h5{
   margin:0.1rem;
 }
 .section-content{
  margin-top:-1rem;
 }
 .edu_des h5,h4,p{
  margin:.1rem;
}
.icon {
  height: 1rem;
  width: 1rem;
}

.icon img {
  height: 1rem;
  width: 1rem;
}
.award{
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items:  baseline;
}
.exp-section{
  margin-top:-1rem;
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
        <title>Your Title Here</title>
        <!-- Include your CSS stylesheets or other head elements here -->
    
        <!-- Assuming you have the necessary CSS styles defined for the classes used in the JSX code -->

    </head>
    <body>
    
        <div  class="main">
            <div class="header">
                <div class="name">
                    <h1  style="color: ${color3}; font-family: ${fontStyle}; font-size:${fontSize}px;"> ${formData.resume.name}</h1>
                    <h5  style="color: ${color3};">${formData.resume.jobTitle}</h5>
                </div>
                <div class="contact_info">
                    <div class="contact_value">
                        <span class="contact_label">
                        <img class="icon" src="${base64Image5}" alt="dp" />
                        </span>
                        <p class="contact-value">${formData.resume.contact.phone}</p>
                    </div>
                    <div class="contact_value">
                        <span class="contact_label">
                        <img class="icon" src="${base64Image4}" alt="dp" />
                        </span>
                        <p class="contact-value">${formData.resume.contact.email}</p>
                    </div>
                    <div class="contact_value">
                        <span class="contact_label">
                        <img class="icon" src="${base64Image2}" alt="dp" />
                        </span>
                        <p class="contact-value">${formData.resume.socialLinks.linkedin}</p>
                    </div>
                    <div class="contact_value">
                        <span class="contact_label">
                        <img class="icon" src="${base64Image1}" alt="dp" />
                        </span>
                        <p class="contact-value">
                        ${formData.resume.address.address},
                        ${formData.resume.address.state },
                        ${formData.resume.address.postalCode }
                        </p>
                    </div>
                </div>
            </div>
    
            <div class="container">
                <div class="right_section">
                ${formData.resume.skillsAndLevel.length > 0 ?
                    `<div class="section">
                        <h2 class="section_title" style="background-color:${color}; color: ${color3}; ">SKILLS</h2>
                        <ul class="skills_list">
                        ${formData.resume.skillsAndLevel.map((item) => `
                        <li>${item.skills}<span> <ProgressBar bgcolor="#00CCFF" progress="40" height="5"></span></li>
                        `).join('')}
               
                        </ul>
                    </div>`:""
                }
                ${formData.resume.knownLanguages.length > 0 ?
                    `<div class="section">
                        <h2 class="section_title" style="background-color:${color}; color: ${color3}; ">LANGUAGE</h2>
                        <ul class="skills_list">
                        ${formData.resume.knownLanguages.map((item) => `
                        <li>
                        ${item?.lang}
                      </li>
                   `).join('')}
                        </ul>
                    </div>`:""
                }
                </div>

                <div class="left_section">
                    <div class="section">
                        <h2 class="section_title" style="background-color:${color}; color: ${color3}; ">ABOUT</h2>
                        <p class="section-content">
                        ${formData.resume.summary}
                        </p>
                    </div>
                    ${formData.resume.projects.length > 0 ?
                    `<div class="exp-section">
                        <h2 class="section_title" style="background-color:${color}; color: ${color3}; ">PROJECTS</h2>
                        <Divider class="divider" />
                        <ul class="ul">
                        ${formData.resume.projects.map((item) => `
                    <li>
                    <div class="work_des">
                            <h3 class="customerService">${item?.title}</h3>
                            <h5 class="company_name">
                            <span>${item?.link} </span> ,
                            <span>${item?.year}</span> 
                          
                            </h5>
                   
                        <div>
                            <p>
                            ${item?.description}
                            </p>
                        </div>
                    </div>
                </li>
                    `).join('')}  
                          
                        </ul>
                    </div>`:""
                    }

                    ${formData.resume.education.length > 0 ?
                    `<div class="exp-section">
                        <h2 class="section_title"  style="background-color:${color}; color: ${color3}; ">EDUCATION</h2>
                        <Divider class="divider" />
                        <ul class="ul">
                        ${formData.resume.education.map((item) => `
             
                    <li class="edu_des">
                    <h5>${item.startYear} - ${item.endYear}</span>
                    <h4>${item.degree}</h4>
                    <p>${item.collegeName}</p> 
                    </li>
                    `).join('')}
                        
                        </ul>
                    </div>`:""
                    }
                </div>
            </div>
        </div>
    </body>
    </html>
    
    `;
  };

  const handleResume = async () => {
    localStorage.setItem("submit",true)
    localStorage.setItem("pendingData",JSON.stringify(formData) )
    if (!checkAuth) {
      navigate("/Form");
      return; // Stop further execution if authentication check fails
    }

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
        "https://www.voizyy.com/convert/htmlCssToPdf",
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


  const handleDownloadDoc = async () => {
    localStorage.setItem("submit",true)
    localStorage.setItem("pendingData",JSON.stringify(formData) )
    if (!checkAuth) {
      navigate("/Form");
      return; // Stop further execution if authentication check fails
    }
    setLoading(true);
    setError("");
    try {
      // Step 1: Convert HTML and CSS to PDF
      const pdfResponse = await axios.post(
        "https://www.voizyy.com/convert/htmlCssToPdf",
        {
          html: getHTML(),
          cssStyles: getCSS(), // Include your CSS data here
        },
        {
          responseType: "arraybuffer",
          headers: {
            Accept: "application/json",
          },
        }
      );

      // Step 2: Convert PDF to DOCX
      const formData = new FormData();
      formData.append(
        "pdf",
        new Blob([pdfResponse.data], { type: "application/pdf" })
      );

      const docxResponse = await axios.post(
        "https://www.voizyy.com/convert/pdftodocx",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "arraybuffer",
        }
      );
      setLoading(false);
      // Create a Blob from the response data
      const docxBlob = new Blob([docxResponse.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      // Save the Blob as a file using FileSaver.js
      saveAs(docxBlob, "lizmy.docx");

      return "Conversion successful";
    } catch (error) {
      setLoading(false);
      throw new Error("Error converting HTML and CSS to DOCX");
    }
  };

  const handleDownloadTxt = async () => {
    localStorage.setItem("submit",true)
    localStorage.setItem("pendingData",JSON.stringify(formData) )
    if (!checkAuth) {
      navigate("/Form");
      return; // Stop further execution if authentication check fails
    }
    setLoading(true);
    setError("");

    try {
      // Step 1: Convert HTML and CSS to PDF
      const pdfResponse = await axios.post(
        "https://www.voizyy.com/convert/htmlCssToPdf",
        {
          html: getHTML(),
          cssStyles: getCSS(), // Include your CSS data here
        },
        {
          responseType: "arraybuffer",
          headers: {
            Accept: "application/json",
          },
        }
      );

      /// Step 2: Convert PDF to text using your PDF to text API
      const formData = new FormData();
      formData.append(
        "pdf",
        new Blob([pdfResponse.data], { type: "application/pdf" })
      );

      const textResponse = await axios.post(
        "https://pdfsummary.onrender.com/lizmyPdfToText",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "text/plain", // Update the responseType to 'text/plain'
        }
      );

      setLoading(false);
      // Create a Blob from the response data
      const textBlob = new Blob([textResponse.data], {
        type: "text/plain",
      });

      // Save the Blob as a file using FileSaver.js
      saveAs(textBlob, "lizmy.txt");

      return "Conversion successful";
    } catch (error) {
      setLoading(false);
      throw new Error(`Error converting HTML and CSS to TXT: ${error.message}`);
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
        <div  onClick={handleDownloadDoc} className={styles.icon_download}><img src={downloaddoc } alt="doc"/> DOC</div>
         <div  onClick={handleDownloadTxt} className={styles.icon_download}><img src={downloadtext } alt="text"/>TEXT</div>
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
  <div className={styles.name}>
    <h1  style={{ fontWeight: 100 ,fontFamily:fontStyle ,color:color3,fontSize: fontSize }}>{formData.resume.name}</h1>
    <h5>{formData.resume.jobTitle}</h5>
  </div>
  <div className={styles.contact_info}>
        <div className={styles.contact_value}>
          <span className={styles.contact_label}>
            <LocalPhoneIcon style={{ fontSize: '20px', }} />
          </span>
          <p className={styles.contact_value}>{formData.resume.contact.phone}</p>
        </div>
        <div className={styles.contact_value}>
          <span className={styles.contact_label}>
            <EmailIcon style={{ fontSize: '20px', }} />
          </span>
          <p className={styles.contact_value}>{formData.resume.contact.email}</p>
        </div>
        <div className={styles.contact_value}>
          <span className={styles.contact_label}>
            <LinkedInIcon style={{ fontSize: '20px',  }} />
          </span>
          <p className={styles.contact_value}>{formData.resume.socialLinks.linkedin}</p>
        </div>
        <div className={styles.contact_value}>
          <span className={styles.contact_label}>
            <PlaceIcon style={{ fontSize: '20px',  }} />
          </span>
          <p className={styles.contact_value}>
            {formData.resume.address.address},
            {formData.resume.address.state},
            {formData.resume.address.postalCode}
          </p>
        </div>
      </div>
</div>

<div className={styles.container}>
  <div className={styles.right_section}>
  {formData.resume.skillsAndLevel.length > 0 &&
    <div className={styles.section}>
      <h2 className={styles.section_title } style={{backgroundColor:color ,color:color3}}> SKILLS</h2>
      <ul className={styles.skills_list}>
        {formData.resume.skillsAndLevel.map((item, index) => (
          <li key={index}>
            {item.skills}
      
          </li>
        ))}
      </ul>
    </div>
}
{formData.resume.knownLanguages.length > 0 &&
    <div className={styles.section}>
      <h2 className={styles.section_title} style={{backgroundColor:color ,color:color3}}>LANGUAGE</h2>
      <ul className={styles.skills_list}>
        {formData.resume.knownLanguages.map((item, index) => (
          <li key={index}>{item?.lang}</li>
        ))}
      </ul>
    </div>
}
  </div>
  <div className={styles.left_section}>
    <div className={styles.section}>
      <h2 className={styles.section_title} style={{backgroundColor:color ,color:color3}}>
        ABOUT
      </h2>
      <p className={styles.section_content}>{formData.resume.summary}</p>
    </div>

{formData.resume.projects.length > 0 &&
    <div className={styles.section}>
      <h2 className={styles.section_title} style={{backgroundColor:color ,color:color3}}>
        PROJECTS
      </h2>
      <Divider className={styles.divider} />
      <ul className={styles.ul}>
        {formData.resume.projects.map((item, index) => (
          <li key={index}>
            <div className={styles.work_des}>
              <h3 className={styles.customerService}>{item?.title}</h3>
              <br/>
              <h5 className={styles.company_name}>
                <span>
                {item?.link}
          
                </span>
                ,
                <span>
                {item?.year}
                </span>
              </h5>
          
              <div>
                <p>{item?.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
}
{formData.resume.education.length > 0 &&
    <div className={styles.section}>
      <h2 className={styles.section_title} style={{backgroundColor:color ,color:color3}}>
      EDUCATION
      </h2>
      <Divider className={styles.divider} />
      <ul className="ul">
        {formData.resume.education.map((item, index) => (
          <li key={index} className={styles.edu_des}>
            <h5>
              {item.startYear} - {item.endYear}
            </h5>
            <h4>{item.degree}</h4>
            <p>{item.collegeName}</p>
          </li>
        ))}
      </ul>
    </div>
}
  </div>
</div>
</div>
</>

  );
};

export default Template_22;
