import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_14.module.css";
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

const Template_14 = () => {
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
          width: 794px ;
            height: 1130px;
          background-color: white;
          
        }
    
            .container{
              display: grid;
              grid-template-columns: 1fr 2fr;
           }
           .img_box{
              height: 10rem;
              width: 10rem;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              margin-left: 4rem;
           }
           .profession_box{
               position: absolute;
               bottom: 61%;
               background-color: white;
               border: 1px black solid;
               padding: .2rem;
           
           }
           .img_box img{
              height: 100%;
              width: 100%;
           
           }
           .left_section{
              display: flex;
              flex-direction: column;
              padding: .5rem 2rem;
              gap: 1rem;
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
              gap: .2rem;
             border-right: 1px black solid;
             width: 18rem;
             margin-top: 1rem;
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
              gap: 1rem;
           }
           .user_header{
           
             padding:  0!important;
             display: grid;
             grid-template-columns: 1fr 2fr;
         
         
           }
           
           .certifications{
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: .5rem;
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
           }
           .certifications ul{
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1rem;
           }
           .header{
           
              height: 8rem;
              display: flex;
            align-items: center;
              justify-content: space-between;
              padding: 0rem 1rem;
           }
           .img_box{
               border-radius: 50%;
               margin-right: 4rem;
           }
           .section{
              display: flex;
              flex-direction: column;
              gap: .5rem;
              border-bottom: 1px rgb(0, 0, 0) solid;
              padding: .5rem 1rem;

           }
           .work_entry{
              display: grid;
              grid-template-columns: 1fr 3fr;
           
           }
           .edu_entry{
             margin-left: 1rem;
             padding-top:.5rem ;
           }
           .ul{
               display: flex;
               flex-direction: column;
               gap: .5rem;
           }
           .section_title{
              margin-left: -1rem;
         
           }
           .description{
               width: 25rem;
           }
           .contact_value{
               display: flex;
               align-items: center;
               gap: .2rem;
           
           }
           
           .contact_label{
               font-size: small;
           }
           .contact_info{
             display: flex;
             flex-direction: column;
             gap: .5rem;
             border-bottom: 1px rgb(0, 0, 0) solid;
             padding: .2rem 1rem;
           }
           .skills_list{
           display: flex;
           flex-direction: column;
         
           }
      
          
           .name_box{
               width: 100%;
               height: 15rem;
               padding: 1rem;
               border-bottom: 1px black solid;
               margin: 0rem 1rem;
           }
           .image_box{
               display: flex;
               align-items: center;
               justify-content: center;
              border-right:1px black solid ;
              border-bottom:1px black solid ;
              border-radius: 10px 0px 10px 0px;
            
           }
            .icon {
                height: 1rem;
                width: 1rem;
            }
    
            .icon img {
                height: 1rem;
                width: 1rem;
            }
      
            .ul li{
              list-style: circle;
            }
            .award_section{
         
              padding-left:.5rem;
            }
            .skills_section{
              padding:.5rem;
            }
         
        </style>
    </head>
    
    <body>
        <div class="main">
            <div class="user_header">
                <div class="image_box">
                    <div class="img_box">
                        <!-- Replace with actual base64 encoded image -->
                        <img src=${base64Image3} alt="demo_dp" />
                    </div>
                 
                </div>
                <div class="name_box">
                    <h1 class="name">John Doe</h1>
                    <h5 class="name">Software Engineer</h5>
                    <p class="section-content">
                        Passionate software engineer with expertise in web development and problem-solving. Excited to
                        contribute to innovative projects.
                    </p>
                </div>
            </div>
            <div class="container">
                <div class="right_section">
                    <div class="contact_info">
               
                        <div class="contact_value">
                            <span class="contact_label">
                                <span style="font-size:20px" class="icon">
                                    <!-- Replace with actual base64 encoded image -->
                                    <img src=${base64Image5} />
                                </span>
                            </span>
                            <p class="contact-value">+91 23272767623</p>
                        </div>
                        <div class="contact_value">
                            <span class="contact_label">
                                <span style="font-size:20px" class="icon">
                                    <!-- Replace with actual base64 encoded image -->
                                    <img src=${base64Image4} />
                                </span>
                            </span>
                            <p class="contact-value">JohnDoe@gmail.com</p>
                        </div>
                        <div class="contact_value">
                            <span class="contact_label">
                                <span style="font-size:20px" class="icon">
                                    <!-- Replace with actual base64 encoded image -->
                                    <img src=${base64Image2} />
                                </span>
                            </span>
                            <p class="contact-value">linkedin.com/in/johndoe</p>
                        </div>
                        <div class="contact_value">
                            <span class="contact_label">
                                <span style="font-size:20px" class="icon">
                                    <!-- Replace with actual base64 encoded image -->
                                    <img src=${base64Image1} />
                                </span>
                            </span>
                            <p class="contact-value">123 Main St, Cityville, 12345</p>
                        </div>
                    </div>
                    <br />
                    <div class="skills_section">
                        <h3 class="section-title">SKILLS</h3>
                        <ul class="skills_list">
                            <li>
                             JavaScript
                            </li>
                            <li>
                             React.js
                            
                            </li>
                            <!-- Add more skills as needed -->
                        </ul>
                    </div>
                    <div class="skills_section">
                        <h3 class="section-title">LANGUAGE</h3>
                        <ul class="skills_list">
                            <li>
                                English
                            </li>
                            <li>
                              Spanish
                            </li>
                            <!-- Add more languages as needed -->
                        </ul>
                    </div>
                    <div class="award_section">
                        <h3 class="award">AWARDS</h3>
                        <ul>
                            <li>
                                <h5>2022</h5>
                                <h4>Outstanding Achievement Award</h4>
                                <p>XYZ Organization</p>
                            </li>
                            <!-- Add more awards as needed -->
                        </ul>
                    </div>
                </div>
    
                <div class="left_section">
                    <div class="section">
                        <h3 class="section_title">PROFESSIONAL EXPERIENCE</h3>
                        <ul class="ul">
                        <li>
                            <div class="work_entry">
                                <h5 class="date">Jan 2020 - Present</h5>
                                <div>
                                    <h4 class="degree">Software Engineer</h4>
                                    <p class="university">ABC Tech - Cityville</p>
                                    <p>Contributed to the development of innovative web
                                    applications using cutting-edge technologies.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="work_entry">
                                <h5 class="date">Jan 2020 - Present</h5>
                                <div>
                                    <h4 class="degree">Software Engineer</h4>
                                    <p class="university">ABC Tech - Cityville</p>
                                    <p>Contributed to the development of innovative web
                                    applications using cutting-edge technologies.</p>
                                </div>
                            </div>
                        </li>
                        <!-- Add more education details as needed -->
                    </ul>
                        
                    </div>
                    <div class="sections">
                        <h3>EDUCATION</h3>
                        <ul class="ul">
                            <li>
                                <div class="work_entry">
                                    <h5 class="date">2016 - 2020</h5>
                                    <div>
                                        <h4 class="degree">Bachelor of Science in Computer Science</h4>
                                        <p class="university">University of Cityville</p>
                                    </div>
                                </div>
                            </li>
                
                            <li>
                                <div class="work_entry">
                                    <h5 class="date">2016 - 2020</h5>
                                    <div>
                                        <h4 class="degree">Bachelor of Science in Computer Science</h4>
                                        <p class="university">University of Cityville</p>
                                    </div>
                                </div>
                            </li>
                            <!-- Add more education details as needed -->
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

export default Template_14;
