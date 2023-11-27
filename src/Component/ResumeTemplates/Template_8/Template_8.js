import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_8.module.css";
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

const Template_8= () => {
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
                height: auto;
                background-color: white;
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
          .summary h2{
              background-color:rgb(211, 211, 211)  ;
              padding: 0rem .5rem;
              width: 90%;
            font-weight:100;
          }
          .para{
              width: 90%;
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
          .Experience h2{
              background-color:rgb(211, 211, 211)  ;
              padding: 0rem .5rem;
              width: 90%;
          }
          .Experience ul{
              width: 90%;
              list-style: none;
              margin-top:-1rem;
             
          }
          .Experience ul li{
            margin:1rem;
         
            margin-left:-1rem;
          }
          .Skills h2{
            background-color:rgb(211, 211, 211)  ;
            padding: 0rem .5rem;
            width: 90%;
          font-weight:100;
          }
          .Skills {
              display: flex;
              align-items: center;
              flex-direction: column;
              margin:0rem;
          }
          .Skills ul{
              width: 90%;
              display: grid;
              grid-template-columns: 1fr 1fr;
           
              margin-top:-.5rem;
          }
          .Skills ul li{
              padding: 1rem;
              margin-left: 1rem;
              margin:0rem;
          }
          .work_des {
              display: grid;
              grid-template-columns: 1fr 2fr;
      
          }
        
          .Education {
            display: flex;
            flex-direction: column;
            gap: 0rem;
            align-items: center;
            width: 850px;
        }

        .Education  h2{
          background-color:rgb(211, 211, 211)  ;
          padding: 0rem .5rem;
          width: 90%;
      }

        .Education ul {
            width: 90%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-left: 10px; /* Adjusted from 1rem to pixels based on your requirement */
            gap: 15px; /* Adjusted from 1rem to pixels based on your requirement */
            margin-top:-.5rem;
        }

        .Education ul li {
            display: flex;
            flex-direction: column;
        }
          .edu_des h5,h4,p{
            margin:.1rem;
          }
          .work  h5,h4,p{
            margin:.1rem;
          }
       
        
        </style>
    </head>
    
    <body>
        <div onclick="setTemplateNo(7)" class="main">
            <div class="heading">
                <h1>John Doe</h1>
                <p>john.doe@example.com | 123-456-7890</p>
            </div>
            <div class="summary">
                <h2>Professional Summary</h2>
                <p class="para">Passionate software developer with expertise in web development and problem-solving. Excited to contribute to innovative projects.</p>
            </div>
            <div class="Skills">
                <h2>Skills</h2>
                <ul>
                    <li style="color: color3;">
                        <span>JavaScript</span>
                    </li>
                    <li style="color: color3;">
                        <span>React.js</span>
                    </li>
                    <li style="color: color3;">
                        <span>React.js</span>
                    </li>
                    <li style="color: color3;">
                        <span>React.js</span>
                    </li>
                    <li style="color: color3;">
                        <span>React.js</span>
                    </li>
                    <li style="color: color3;">
                        <span>React.js</span>
                    </li>
                </ul>
            </div>
            <div class="Experience">
                <h2>Work History</h2>
                <ul>
                    <li>
                        <div class="work_des">
                            <div class="work">
                                <h4 class="customerService">Software Engineer</h3>
                                <h5 class="company_name">
                                    <span>ABC Tech - Cityville</span>
                                    <p>Jan 2020 - Present</p>
                                </h5>
                            </div>
                            <div>
                            <p>
                            Contributed to the development of innovative web applications using cutting-edge technologies.
                            Contributed to the development of innovative web applications using cutting-edge technologies.
                            Contributed to the development of innovative web applications using cutting-edge technologies.
                            </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="work_des">
                            <div class="work">
                                <h4 class="customerService">Software Engineer</h3>
                                <h5 class="company_name">
                                    <span>ABC Tech - Cityville</span>
                                    <p>Jan 2020 - Present</p>
                                </h5>
                            </div>
                            <div>
                            <p>
                            Contributed to the development of innovative web applications using cutting-edge technologies.
                            Contributed to the development of innovative web applications using cutting-edge technologies.
                            Contributed to the development of innovative web applications using cutting-edge technologies.
                            </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="work_des">
                            <div class="work">
                                <h4 class="customerService">Software Engineer</h3>
                                <h5 class="company_name">
                                    <span>ABC Tech - Cityville</span>
                                    <p>Jan 2020 - Present</p>
                                </h5>
                            </div>
                            <div>
                                <p>
                                Contributed to the development of innovative web applications using cutting-edge technologies.
                                Contributed to the development of innovative web applications using cutting-edge technologies.
                                Contributed to the development of innovative web applications using cutting-edge technologies.
                                </p>
                            </div>
                        </div>
                    </li>
                  
                </ul>
            </div>
            <div class="Education">
                <h2>Education</h2>
                <ul>
                <li class="edu_des">
                <h5>2016 - 2020</span>
                <h4>Bachelor of Science in Computer Science</h4>
                <p>University of Cityville</span> 
                </li>
                <li class="edu_des">
                <h5>2016 - 2020</span>
                <h4>Bachelor of Science in Computer Science</h4>
                <p>University of Cityville</span> 
                </li>
                <li class="edu_des">
                <h5>2016 - 2020</span>
                <h4>Bachelor of Science in Computer Science</h4>
                <p>University of Cityville</span> 
                </li>
             
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

export default Template_8;
