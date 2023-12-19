import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_1.module.css";
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



const Template_1= () => {
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
  const [base64Image6, setBase64Image6] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(formData.resume
    , "resume data");



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
          else if (index === 5) {
            setBase64Image6(base64String);
          }
        });
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
  
    handleImageChange();
  }, []);
  
  const getCSS = () => {
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
      display: grid;
      grid-template-columns: 1fr 2fr;
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
padding: 3rem 1rem;
height: 1112px;
text-align: left;

}

.info_box{
width: 100%;
display: flex;
flex-direction: column;

padding: 1rem 1rem;
}
.education{
width: 100%;
display: flex;
flex-direction: column;

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

}
.right_section p{
width: 95%!important;
display: flex;
flex-direction: column;
text-align: left;
list-style: none;

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

}
.heading{
background-color: aliceblue;
padding: 3rem 1rem;
}
.certifications{
padding: 1rem;
display: flex;
flex-direction: column;
gap: .5rem;
}
.skills{
padding: 1rem;
display: flex;
flex-direction: column;
gap: .5rem;

}
.skills ul{
display: grid;
grid-template-columns: 1fr 1fr;

}
.professional_summary{
padding: 1rem;
display: flex;
flex-direction: column;
gap: .5rem;
}
.work{
padding: 1rem;
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
margin:0rem;
}
.certifications ul{
display: grid;
grid-template-columns: 1fr 1fr;

}
.edu{
flex-direction: column;
display: flex;
gap:.5rem;
}
.edu h4,p{
margin:0rem; 
}
.certi-ul {
margin-top:-1rem;
margin-left:-2.7rem;
flex-direction: column;
display: flex;
gap:.5rem;
}
.certi-ul li h5,p{
margin:0rem; 
}
.skill-ul{
margin-top:-1rem;
margin-left:-2.7rem;
}
.line{
margin-top:-1rem;
width:98%;
}
.work-ul{

margin-top:-1rem;
margin-left:-2.7rem;
flex-direction: column;
display: flex;
gap:.5rem;

}
.work-ul li h4,p{
margin:0rem;  
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
        <link rel="stylesheet" href="styles.css"> <!-- You may link your stylesheet if you have one -->
   
        <title>Your Page Title</title>
    </head>
    
    <body>
        <div class="main">
            <div class="left_section" style="background-color:${color}; color:${color3};">
                <div>
                    <div class="img_container">
                        <div class="img_box" style="height: ${imgSize}px; width: ${imgSize}px;">
                            <!-- Replace the image source with your actual 
                            image URL -->
                            <img src=${base64Image3} alt="dp">
                        </div>
                    </div>
    
                    <div class="info_box">
                        <p>
                            <span>Email: </span>
                            ${formData?.resume?.contact?.email}
                        </p>
                        <p>
                            <span>Phone: </span>
                            ${formData?.resume?.contact?.phone}
                        </p>
                        <p>
                            <span>Location: </span>
                            ${formData?.resume?.address?.address},
                            ${formData?.resume?.address?.state },
                            ${formData?.resume?.address?.postalCode },
                        </p>
                    </div>
                </div>
               <div><hr /></div> 
                <div class="education">
                    <h3>Education</h3>
                    <div class="edu">

                    ${formData?.resume?.education.map((item) => `
                    <div >
                    <h4>${item?.collegeName}</h4>
                    <p>${item?.degree}</p>
                    <p>${item?.startYear} - ${item?.endYear}</p>
                    </div>
                `)}
    
                    </div>
                    <!-- Add more education items as needed -->
                </div>
            </div>
    
            <div class="right_section">
                <div class="heading" style="background-color:${color2}; color:${color3};">
                    <h1 style="color: ${color3}; font-family: ${fontStyle}; font-size:${fontSize}px;">
                    ${formData?.resume?.name}
                    </h1>
                </div>
    
                <div class="certifications">
                    <h3>Certifications</h3>
                    <ul class="certi-ul">

                    ${formData?.resume?.certifications.map((item) => `
                <li>
                <h5>${item?.title}</h5>
                <p>${item?.issuingOrganization }: ${item?.date}</p>
                </li>
                `)}
                    
                        <!-- Add more certification items as needed -->
                    </ul>
                </div>
    
             <div class="line"> <hr /></div>  
      
                <div class="skills">
                    <h3>Skills</h3>
                   
                    ${formData?.resume?.skillsAndLevel.map((item) => `
                    <ul class="skill-ul">
                    <li> ${item?.skills }</li>
                    </ul>
            `)}
                  
                </div>

    
                <div class="line"> <hr /></div>  
    
                <div class="professional_summary">
                    <h3>Professional Summary</h3>
                    <p>
                    ${formData?.resume?.summary}
                    </p>
                </div>
    
                <div class="line"> <hr /></div>  
    
                <div class="work">
                    <h3>Work History</h3>
                    <ul class="work-ul">

                    ${formData?.resume?.work.map((item) => `
                    <li>
                    <h4>${item?.title}</h4>
                    <p>${item?.company}, ${item?.location}</p>
                    <p>${item?.description}</p>
                </li>
          
            `)}
                    </ul>
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
      <div className={style.overlay}>
        <div className={style.modal}>
  

       {loading ?   
       <div  className={style.down_img_box}>
           <img src={downloadimg } alt="downloading" />
           {error && <p style={{ color: "red" }}>{error}</p>}
       </div>
       :
       <div className={style.download_box}>
       <button className={style.closeButton} onClick={onClose}>Close
       </button>
       <div  className={style.down_btn_box}>
       <div  onClick={handleResume} className={style.icon_download}><img src={downloadpdf } alt="pdf"/>PDF</div>
        <div  onClick={handleResume} className={style.icon_download}><img src={downloaddoc } alt="doc"/> DOC</div>
         <div  onClick={handleResume} className={style.icon_download}><img src={downloadtext } alt="text"/>TEXT</div>
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
    <div className={style.download_btn} >
    <button onClick={handleDownloadClick}>Download</button>
      <ResumeModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
   
       <div className={style.main}>
    <div className={style.left_section} style={{ backgroundColor: color, color: color3 }}>
      <div>
        <div className={style.img_container}>
          <div className={style.img_box} style={{ height: imgSize, width: imgSize }}>
            {/* Replace the image source with your actual image URL */}
            <img src={base64Image3} alt="dp" />
          </div>
        </div>
       
        <div className={style.info_box}>
          <p>
            <span>Email: </span>
            {/* {formData?.resume?.contact?.email} */}
          </p>
          <p>
            <span>Phone: </span>
            {formData?.resume?.contact?.phone}
          </p>
          <p>
            <span>Location: </span>
            {formData?.resume?.address?.address}, {formData?.resume?.address?.state}, {formData?.resume?.address?.postalCode}
          </p>
        </div>
      </div>
      <div>
        <br/>
        <div><hr /></div> 
      </div>
      <div className={style.education}>
        <h3>Education</h3>
        <div className={style.edu}>
          {formData?.resume?.education.map((item, index) => (
            <div key={index}>
              <h4>{item?.collegeName}</h4>
              <p>{item?.degree}</p>
              <p>
                {item?.startYear} - {item?.endYear}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={style.right_section}>
      <div className={style.heading} style={{ backgroundColor: color2}}>
        <h1 style={{ color: color3, fontFamily: fontStyle ,fontSize: fontSize}}>{formData?.resume?.name}</h1>
      </div>
 
      <div className={style.certifications}>
        <h3>Certifications</h3>
        <ul className={style.certi_ul}>
          {formData?.resume?.certifications.map((item, index) => (
            <li key={index}>
              <h5>{item?.title}</h5>
              <p>Organization: {item?.issuingOrganization}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.line}>
      </div>

      <div className={style.skills}>
        <h3>Skills</h3>
        <ul className={style.skill_ul}>
          {formData?.resume?.skillsAndLevel.map((item, index) => (
            <li key={index}>
              <h5>{item?.skills}</h5>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.line}>
     
      </div>

      <div className={style.professional_summary}>
        <h3>Professional Summary</h3>
        <p>{formData?.resume?.summary}</p>
      </div>

      <div className={style.line}>
      </div>

      <div className={style.work}>
        <h3>Work History</h3>
        <ul className={style.work_ul}>
          {formData?.resume?.work.map((item, index) => (
            <li key={index}>
              <h4>{item?.title}</h4>
              <p>
                {item?.company}, {item?.location}
              </p>
              <p>{item?.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
    </>
   
  );
};

export default Template_1;
