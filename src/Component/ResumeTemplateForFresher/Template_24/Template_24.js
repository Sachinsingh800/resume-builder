import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import styles from "./Template_24.module.css";
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

const Template_24= () => {
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
      width: 850px;
      height: 1000px;
  }

  .main {
    
      background-color: white;
      display: grid;
      grid-template-columns: 1fr 2fr;
  }
  
.Left_container{
display: flex;
flex-direction: column;
}

.container {
/* padding: 13px 0 0 0; */

}

.name {
color: white;
}

.hr {
margin-left: 0.5rem ; /* 0.5rem */
margin-right: 4.375rem; /* 4.375rem */
color:white;
}




.email {
color: white;
}

.phoneIcon {
font-size: 12px;
}


.contactInfo {
display: flex;
gap: .8rem;
padding: .3rem;
margin-left: 1rem;

}
.skillsHeader {

display: flex;
flex-direction: column;
gap: .5rem;
}

.skillsHeader h3{
border-bottom: 1px rgb(0, 0, 0) solid;
margin-left: 1rem;
}

.skillsHeader ul{
list-style: none;
padding: 0rem 2rem 0rem 1rem;

}
.skillsHeader ul li{
display: flex;
flex-direction: column;

}
.skillsHeader2{
padding: 0!important;
}
.skillsHeader2 p{
margin: 1rem;
}
.skillsHeader2 h2{
display: flex;
align-items: center;
gap: .5rem;
padding: .5rem 2rem;
font-weight: 400;
}
.skillsHeader2 ul{
margin-left: 1.5rem;
}
.professionalSkillsHeader ul{
margin-left: 1.5rem;
}

.info_box{
display: flex;
flex-direction: column;
gap: .5rem;
padding: 0rem 2rem;
}
.info_box h3{
margin-left: .5rem;
}

.educationHeader{
padding: 1.5rem;
}
.objectiveHeader{
padding: 1.5rem;
height: 8rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: .5rem;
margin-bottom: 1rem;
margin-top: 3rem;
}
.workHeader{
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: .5rem;
}
.skillsHeader2{
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: .5rem;
}
.professionalSkillsHeader{
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
}
.professionalSkillsHeader h2{
display: flex;
align-items: center;
gap: .5rem;
padding: .5rem 2rem;
font-weight: 400;
}
.img_container{
display: flex;
align-items: center;
justify-content: center;
}
.img_box{
height: 16rem!important;
width: 100%!important;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
margin-top: 6rem;
}
.img_box img{
height: 100%;
width: 100%;
border-radius: 0;
}
.person_name{
font-size: 3rem;
}
.person_name span{
color: black;
}
.company_name{
display: flex;
justify-content: space-between;
color: black;
}
.work_des{
display: flex;
flex-direction: column;
gap:.5rem ;
padding: 0rem 1rem;
}
.img_container{
display: flex;
align-items: center;
justify-content: center;
height: 10rem;
}
.skillsAndLevel{
display: grid;
grid-template-columns: 1fr 1fr ;
gap: .5rem;
padding: 1rem;
}
.skillsAndLevel li{

overflow: hidden;
}

.skillsAndLevel li span{
margin-left: 1rem;
}

.title_box{
display: flex;
width: 100%;
background-color: white;
}
.title_box2{
display: flex;
width: 95%;
align-items:center ;
gap: .5rem;
border-bottom: 1px rgb(8, 8, 8) solid;
margin-left: 1rem;
padding:0rem!important;

}
.title_box2 h3{
margin:0rem;
}
.objectiveHeader h1,p{
margin:0rem;
}
.edu-ul{
flex-direction: column;
display: flex;
gap:.2rem;
margin-top:-1rem;
}
.contactInfo{
padding:0rem;
}
.ref-ul{
margin-top:-1rem;
}
.ref-ul li h4{
margin:0rem;
}
.work_des h4,h5,p{
margin:0rem;
}
.work-ul{
margin-top:-.3rem;
margin-left:-.3rem!important;
flex-direction: column;
display: flex;
gap:1rem;
}
.ProgressBar {
background-color: orange;
height:.2rem;
width:10rem;
}
.skillsAndLevel{
display: grid;
grid-template-columns: 1fr 1fr;
gap:1rem;
margin-top:-.8rem;

}
.skillsAndLevel li{
text-align: left;
}
.contact-infor{
  margin-top:-.5rem;
}
.para{
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

        <title>Your Page Title</title>
    </head>
    
    <body>
        <div class="main">
            <div class="Left_container">
                <div class="img_container">
                    <div class="img_box">
                        <img style="height: ${imgSize}px; width: ${imgSize}px;" src=${base64Image3} alt="dp">
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                ${formData.resume.education.length > 0 ?
                `<div class="skillsHeader">
                    <h3>EDUCATION</h3>
                    <ul class="edu-ul">
                    ${formData.resume.education.map((item) => `
                <li style="color: black;">
                <span>
                ${item.degree}
                    <span>
                    ${item.startYear} - ${item.endYear}
                    </span>
                </span>
                <span>${item.collegeName}</span>
            </li>
                `).join('')}
                    </ul>
                </div>`:""
                }

                <div class="skillsHeader">
                    <h3>CONTACT</h3>
                    <div class="contact-infor">
                     <div class="contactInfo">
                        <p class="email" style="color: black;">
                            <span>Email</span>
                            ${formData.resume.contact.email}
                        </p>
                    </div>
                    <div class="contactInfo">
                        <p style="color: black;" class="email">
                            <span>Phone</span>
                            ${formData.resume.contact.phone}
                        </p>
                    </div>
    
                    <div class="contactInfo">
                        <p style="color: black;">
                            <span>Address</span>
                            ${formData.resume.address.address},
                            ${formData.resume.address.state },
                            ${formData.resume.address.postalCode }
                        </p>
                    </div>
                    </div>
                </div>

     ${formData.resume.references.length > 0 ?
                `<div class="skillsHeader">
                    <h3>REFERENCES</h3>
                    <ul class="ref-ul">
                    ${formData.resume.references.map((item) => `
                       <li style="color: black;">
                       <h4>${item?.name}</h4>
                       <span>${item?.position} | ${item?.company}</span>
                       <span>${item?.phone}</span>
                   </li>
               `).join('')}  
                    </ul>
                </div>`:""
     }
            </div>
    
            <div>
                <div class="objectiveHeader">
                    <h1 class="person_name" style="color: ${color3}; font-family: ${fontStyle}; font-size:${fontSize}px;">${formData.resume.name}</h1>
                    <p class="objectiveText" style="color: ${color3};">${formData.resume.jobTitle}</p>
                </div>
                 <br/>
          
                <div class="skillsHeader2" style="margin-top:.7rem;">
                    <div class="title_box2" >
                        <h3>ABOUT ME</h3>
                    </div>
                    <p class="para">
                    ${formData.resume.summary}
                    </p>
                </div>
    
 

                ${formData.resume.projects.length > 0 ?
                `<div class="professionalSkillsHeader">
                    <div class="title_box2">
                        <h3>PROJECTS</h3>
                    </div>
                    <ul class="work-ul">
                    ${formData.resume.projects.map((item) => `
                <li>
                <div class="work_des">
                    <h4 class="customerService">${item?.title}</h4>
                    <h5 class="company_name">
                    <span>${item?.link} </span>
                        <span>${item?.year}</span>
                       
                    </h5>
                    <p>
                    ${item?.description}
                    </p>
                </div>
            </li>
                    `).join('')}  

                    </ul>
                </div>`:""
                }

                ${formData.resume.skillsAndLevel.length > 0 ?
                `<div class="professionalSkillsHeader">
                    <div class="title_box2" style="paddingLeft:2rem;" >
                        <h3>SOFTWARE SKILL</h3>
                    </div>
                    <ul class="skillsAndLevel">
                    ${formData.resume.skillsAndLevel.map((item) => `
                <li>
                <p>${item.skills}</p>
                </li>
                `).join('')}    
                    </ul>
                </div>`:""
                }
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
    <div className={styles.left_container}>
      <div className={styles.img_container} >
        <div className={styles.img_box} >
          <img style={{ height: imgSize, width: imgSize }} src={base64Image3} alt="dp" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {formData.resume.education.length > 0 &&
      <div className={styles.skillsHeader}>
        <h3>EDUCATION</h3>
        <ul className={styles.edu_ul}>
          {formData.resume.education.map((item, index) => (
            <li key={index} style={{ color: 'black' }}>
              <span>
                {item.degree}
                <span>
                  {item.startYear} - {item.endYear}
                </span>
              </span>
              <span>{item.collegeName}</span>
            </li>
          ))}
        </ul>
      </div>
}
     <br/>
      <div className={styles.skillsHeader}>
        <h3>CONTACT</h3>
        <div>
          <div className={styles.contactInfo}>
            <p className={styles.email} style={{ color: 'black' }}>
              <span>Email</span>
              {formData.resume.contact.email}
            </p>
          </div>
          <div className={styles.contactInfo}>
            <p style={{ color: 'black' }} className={styles.email}>
              <span>Phone</span>
              {formData.resume.contact.phone}
            </p>
          </div>

          <div className={styles.contactInfo}>
            <p style={{ color: 'black' }}>
              <span>Address</span>
              {formData.resume.address.address},
              {formData.resume.address.state},
              {formData.resume.address.postalCode}
            </p>
          </div>
        </div>
      </div>
     <br/>
     {formData.resume.references.length > 0 &&
      <div className={styles.skillsHeader}>
        <h3>REFERENCES</h3>
        <ul className={styles.refUl}>
          {formData.resume.references.map((item, index) => (
            <li key={index} style={{ color: 'black' }}>
              <h4>{item?.name}</h4>
              <span>
                {item?.position} | {item?.company}
              </span>
              <span>{item?.phone}</span>
            </li>
          ))}
        </ul>
      </div>
}
    </div>

    <div>
      <div className={styles.objectiveHeader}>
        <h1 className={styles.personName} style={{ fontWeight: 100 ,fontFamily:fontStyle ,color:color3,fontSize: fontSize }}>{formData.resume.name}</h1>
        <p className={styles.objectiveText} style={{color:color3}}>{formData.resume.jobTitle}</p>
      </div>
      <br />

      <div className={styles.skillsHeader2} >
        <div className={styles.title_box2}>
          <h3>ABOUT ME</h3>
        </div>
        <p >{formData.resume.summary}</p>
      </div>
     <br/>
      {formData.resume.projects.length > 0 &&
      <div className={styles.professionalSkillsHeader}>
        <div className={styles.title_box2}>
          <h3>PROJECTS</h3>
        </div>
        <ul className={styles.work_ul}>
          {formData.resume.projects.map((item, index) => (
            <li key={index}>
              <div className={styles.work_des}>
                <h4 className={styles.customer_service}>{item?.title}</h4>
                <h5 className={styles.company_name}>
                  <span>
                  {item?.link}
                  
                  </span>
                  ,
                  <span>
                  {item?.year}
                  </span>
                </h5>
                <p>{item?.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
}
      <br/>
      {formData.resume.skillsAndLevel.length > 0 &&
      <div className={styles.professionalSkillsHeader}>
        <div className={styles.titleBox2} >
          <h3>SOFTWARE SKILL</h3>
        </div>
        <ul className={styles.skillsAndLevel}>
          {formData.resume.skillsAndLevel.map((item, index) => (
            <li key={index}>
              <p>{item.skills}</p>
              <div className={styles.progressBar}></div>
            </li>
          ))}
        </ul>
      </div>
}
    </div>
  </div>
</>
  
  );
};

export default Template_24;
