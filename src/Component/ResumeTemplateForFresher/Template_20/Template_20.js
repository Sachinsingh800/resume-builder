import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import styles from "./Template_20.module.css";
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




const Template_20= () => {
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
  }
  
.heading{
display: flex;
justify-content: space-between;
width: 52rem; 
padding: 1rem ;
}
.heading div{
width: 50%;
overflow: hidden;
}
.summary h2{
border-top: 1px  rgb(112, 111, 111) solid;
border-bottom: 1px rgb(112, 111, 111) solid;
width: 90%;
}
.para{
width: 96%;
}
.summary {
display: flex;
align-items: center;
flex-direction: column;
}
.Experience{
display: flex;
align-items: center;
flex-direction: column;
}
.Experience h3{

border-bottom: 1px rgb(112, 111, 111) solid;
width: 96%;
}
.Experience ul{
width: 90%;
}
.Skills h2{

border-bottom: 1px rgb(112, 111, 111) solid;
width: 96%;

}
.Skills {
display: flex;
align-items: center;
flex-direction: column;
}
.Skills ul{
width: 90%;

margin-top:-1rem;
margin-left:-6rem;

}
.Skills ul li{
width: max-content;
display: inline-table;
padding: .5rem;
margin: .5rem;
border-radius: 5px;
color: white!important;
background-color: rgb(215, 168, 57);

}

.Eucation{
display: flex;
align-items: center;
flex-direction: column;
}

.Eucation h3{
border-bottom: 1px rgb(112, 111, 111) solid;
width: 96%;
}

.Eucation ul{
width: 90%;
display: grid;
grid-template-columns: 1fr 1fr;
gap:.5rem;
margin-left:-4rem;
}
.Eucation ul li{
display: flex;
flex-direction: column;
}
.contact_info{
display: flex;
flex-direction: column;
text-align: right;
}
.description_box{
padding: 1rem;
}
.contact_info {
height: 6rem;
display:flex;
flex-direction:column;

}
.contact_info p{
margin:.1rem;
}
.work_des p{
margin:.1rem;
}
.work_des h5,h3{
margin:.1rem;
}
.ul{
display:flex;
flex-direction:column;
gap:.2rem;
margin-left:-5rem;
}

.edu_des h5,h4,p{
margin:.1rem;
}
.name h1,p{
margin:.1rem;
}
*{
  list-style:none;
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
        <link rel="stylesheet" href="your-style.css">
        <title>Your Resume</title>
     
    </head>
    
    <body>
        <div class="main">
            <div class="heading">
                <div class="name">
                    <h1 style="color: ${color3}; font-family: ${fontStyle}; font-size:${fontSize}px;">${formData.resume.name} </h1>
                    <p style="color: ${color3};">${formData.resume.jobTitle}</p>
                </div>
                <div class="contact_info">
                    <p>${formData.resume.contact.email}</p>
                    <p>${formData.resume.contact.phone}</p>
                    <p> ${formData.resume.address.address},
                    ${formData.resume.address.state },
                    ${formData.resume.address.postalCode }</p>
                    <p>${formData.resume.socialLinks.linkedin}</p>
                </div>
            </div>
            <div class="description_box">
                <p>
                ${formData.resume.summary}
                </p>
            </div>
            ${formData.resume.skillsAndLevel.length > 0 ?
            `<div class="Skills">
                <h2>RELEVANT SKILLS</h2>
                <ul class="skill-list">
                ${formData.resume.skillsAndLevel.map((item) => `
                <li style="background-color:${color2}; color: ${color3}; "><span>${item.skills}</span></li>
                `).join('')}
                </ul>
            </div>`:""
            }
   
            ${formData.resume.projects.length > 0 ?
            `<div class="Experience">
                <h3>PROJECTS</h2>
                <ul class="ul">
                ${formData.resume.projects.map((item) => `
  
            <li>
            <div class="work_des">
                <div>
                    <h4 class="customerService">${item?.title}</h4>
                    <h5 class="company_name"><span>${item?.year}</span> ,
                    <span>${item?.link} </span></h5>
                </div>
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
            `<div class="Eucation">
                <h3>EDUCATION</h2>
                <ul class="ul">
                ${formData.resume.education.map((item) => `
            <li style="color: #333;">
            <span>${item.startYear} - ${item.endYear}</span>
            <h4>${item.degree}</h4>
            <span>${item.collegeName}</span>
        </li>
            `).join('')}
                </ul>
            </div>`:""
            }
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
    <div className={styles.heading}>
      <div className={styles.name}>
        <h1  style={{ fontWeight: 100 ,fontFamily:fontStyle ,color:color3,fontSize: fontSize }}>{formData.resume.name}</h1>
        <p style={{color:color3}}>{formData.resume.jobTitle}</p>
      </div>
      <div className={styles.contact_info}>
        <p>{formData.resume.contact.email}</p>
        <p>{formData.resume.contact.phone}</p>
        <p>
          {formData.resume.address.address},
          {formData.resume.address.state},
          {formData.resume.address.postalCode}
        </p>
        <p>{formData.resume.socialLinks.linkedin}</p>
      </div>
    </div>
    <div className={styles.description_box}>
      <p>
        {formData.resume.summary}
      </p>
    </div>
    {formData.resume.skillsAndLevel.length > 0 &&
    <div className={styles.Skills}>
      <h2>RELEVANT SKILLS</h2>
      <ul className={styles.skill_list}>
        {formData.resume.skillsAndLevel.map((item, index) => (
          <li key={index} style={{ color: color3 ,backgroundColor:color2}}>
            <span>{item.skills}</span>
          </li>
        ))}
      </ul>
    </div>
}

{formData.resume.projects.length > 0 &&
    <div className={styles.Experience}>
      <h3>PROJECTS</h3>
      <ul className={styles.ul}>
        {formData.resume.projects.map((item, index) => (
          <li key={index}>
            <div className={styles.work_des}>
              <div>
                <h4 className={styles.customerService}>{item?.title}</h4>
                <h5 className={styles.company_name}>
                  <span>{item.year}</span> ,
                  <span>  {item?.link}</span>
                </h5>
              </div>
              <div>
                <p>
                  {item?.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
}
{formData.resume.education.length > 0 &&
    <div className={styles.Education}>
      <h3>EDUCATION</h3>
      <ul className={styles.ul}>
        {formData.resume.education.map((item, index) => (
          <li key={index} style={{ color: '#333' }}>
            <span>{item.startYear} - {item.endYear}</span>
            <h4>{item.degree}</h4>
            <span>{item.collegeName}</span>
          </li>
        ))}
      </ul>
    </div>
}
  </div>
    </>
  
  );
};

export default Template_20;
