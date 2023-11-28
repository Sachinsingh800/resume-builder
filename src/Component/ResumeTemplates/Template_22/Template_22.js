import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_22.module.css";
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
        <title>Your Title Here</title>
        <!-- Include your CSS stylesheets or other head elements here -->
    
        <!-- Assuming you have the necessary CSS styles defined for the classes used in the JSX code -->
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
         height: 65.3rem;  /* 1240px / 16px = 77.5rem */
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
       margin-left: -1rem;
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
        </style>
    </head>
    <body>
    
        <div  class="main">
            <div class="header">
                <div class="name">
                    <h1 >JESSICA CLAIRE</h1>
                    <h5 >frontend Developer</h5>
                </div>
                <div class="contact_info">
                    <div class="contact_value">
                        <span class="contact_label">
                            <LocalPhoneIcon style="font-size: 20px; color: #00CCFF;"></LocalPhoneIcon>
                        </span>
                        <p class="contact-value">+91 9503942697</p>
                    </div>
                    <div class="contact_value">
                        <span class="contact_label">
                            <EmailIcon style="font-size: 20px; color: #00CCFF;"></EmailIcon>
                        </span>
                        <p class="contact-value">ss20010126@gmail.com</p>
                    </div>
                    <div class="contact_value">
                        <span class="contact_label">
                            <LinkedInIcon style="font-size: 20px; color: #00CCFF;"></LinkedInIcon>
                        </span>
                        <p class="contact-value">linkedin.com/en/5hubzzz</p>
                    </div>
                    <div class="contact_value">
                        <span class="contact_label">
                            <PlaceIcon style="font-size: 20px; color: #00CCFF;"></PlaceIcon>
                        </span>
                        <p class="contact-value">Enter Your Address here</p>
                    </div>
                </div>
            </div>
    
            <div class="container">
                <div class="right_section">
                    <div class="section">
                        <h2 class="section_title">SKILLS</h2>
                        <ul class="skills_list">
                            <!-- Include your skill list items and progress bars here -->
                            <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height="5"></span></li>
                            <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height="5"></span></li>
                            <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height="5"></span></li>
                            <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height="5"></span></li>
                            <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height="5"></span></li>
                            <!-- Repeat for other skills -->
                        </ul>
                    </div>
                    <div class="section">
                        <h2 class="section_title">LANGUAGE</h2>
                        <ul class="skills_list">
                            <!-- Include your language list items here -->
                            <li>Hindi</li>
                            <li>Hindi</li>
                            <li>Hindi</li>
                            <!-- Repeat for other languages -->
                        </ul>
                    </div>
                    <div class="section">
                        <h2 class="section_title">INTEREST</h2>
                        <ul class="skills_list">
                            <!-- Include your interest list items here -->
                            <li>Machine learning</li>
                            <!-- Repeat for other interests -->
                        </ul>
                    </div>
                </div>
                <div class="left_section">
                    <div class="section">
                        <h2 class="section_title"><PersonIcon />ABOUT</h2>
                        <p class="section-content">
                            Lorem Ipsum is simply dummy text of scrambled it to make a ty It
                            was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more.
                        </p>
                    </div>
    
                    <div class="section">
                        <h2 class="section_title"><WorkIcon/>EXPERIENCE</h2>
                        <Divider class="divider" />
                        <ul class="ul">
                          
                            <li>
                            <div class="work_des">
                              
                                    <h3 class="customerService">Software Engineer</h3>
                                    <h5 class="company_name">
                                    <span>ABC Tech - Cityville</span> 
                                    <span>Jan 2020 - Present</span>
                                    </h5>
                           
                                <div>
                                    <p>Contributed to the development of innovative web applications using cutting-edge technologies.</p>
                                </div>
                            </div>
                        </li>
                          
                            <li>
                            <div class="work_des">
                              
                                    <h3 class="customerService">Software Engineer</h3>
                                    <h5 class="company_name">
                                    <span>ABC Tech - Cityville</span> 
                                    <span>Jan 2020 - Present</span>
                                    </h5>
                           
                                <div>
                                    <p>Contributed to the development of innovative web applications using cutting-edge technologies.</p>
                                </div>
                            </div>
                        </li>
                          
                            <li>
                            <div class="work_des">
                              
                                    <h3 class="customerService">Software Engineer</h3>
                                    <h5 class="company_name">
                                    <span>ABC Tech - Cityville</span> 
                                    <span>Jan 2020 - Present</span>
                                    </h5>
                           
                                <div>
                                    <p>Contributed to the development of innovative web applications using cutting-edge technologies.</p>
                                </div>
                            </div>
                        </li>
                            <!-- Repeat for other entries -->
                        </ul>
                    </div>
    
                    <div class="section">
                        <h2 class="section_title"><SchoolIcon/>EDUCATION</h2>
                        <Divider class="divider" />
                        <ul class="ul">
                            <!-- Include your education entries here -->
                            <li class="edu_des">
                            <h5>2016 - 2020</span>
                            <h4>Bachelor of Science in Computer Science</h4>
                            <p>University of Cityville</span> 
                            </li>
                            <!-- Repeat for other entries -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Include your JavaScript scripts or other body elements here -->
    
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

export default Template_22;
