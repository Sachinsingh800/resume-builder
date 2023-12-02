import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_11.module.css";
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

const Template_11= () => {
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
                display: grid;
                grid-template-columns: 1fr 2fr;
            }
    
            .Left_container {
                display: flex;
                flex-direction: column;
                background-color: grey;
                color: white;
                height: 1130px;
            }
    
            .objectiveHeader {
                padding: 1rem;
            }
    
            .person_name {
                color: white;
                font-family: 'YourFont', sans-serif;
              
            }
    
            .objectiveText {
                font-size: 18px;
            }
    
            .info_box {
                padding: 1rem;
            }
    
            .contactInfo {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 0.5rem;
            }
    
            label {
                font-weight: bold;
                margin-right: 0.5rem;
                font-size: .8rem;
            }
    
            .skillsHeader {
                padding: 1rem;
            }
    
            ul {
                list-style: none;
                padding: 0;
            }
    
            li {
                margin-bottom: 0.5rem;
            }
    
            .ProgressBar {
                background-color: orange;
                height: 5px;
            }
    
            .skillsHeader2 {
                padding: 1rem;
            }
    
            .professionalSkillsHeader {
                padding: 1rem;
            }
    
            .work_des {
                padding: 1rem;
            }
    
            .education {
                list-style: none;
                padding: 0;
            }
            .objectiveHeader h1,p{
                margin:0rem;
            }
            .exp-ul{
                margin-top:-1rem;
            }
            .edu-ul h4,span{
                margin:0rem;
            }
            .edu-ul {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap:1rem;
            }
            .work_des h4,h5,p{
              margin:0rem;
            }

        </style>
        <title>Your Page Title</title>
    </head>
    
    <body>
        <div class="main">
            <div class="Left_container">
                <div class="objectiveHeader">
                    <h1 class="person_name">John Doe</h1>
                    <p class="objectiveText">Front-end Developer</p>
                </div>
                <div class="info_box">
                    <h3>Personal info</h3>
                    <div class="contactInfo">
                        <label>Mail</label>
                        <p class="email">john.doe@example.com</p>
                    </div>
                    <div class="contactInfo">
                        <label>Phone</label>
                        <p class="email">+1 123 456 7890</p>
                    </div>
                    <div class="contactInfo">
                        <label>Address</label>
                        <p class="email">123 Main St, 56789</p>
                    </div>
                </div>
                <div class="skillsHeader">
                    <h3>Additional Skills</h3>
                    <ul>
                        <li>
                            <span>JavaScript</span>
                            <p class="ProgressBar"></p>
                        </li>
                        <li>
                            <span>React</span>
                            <p class="ProgressBar"></p>
                        </li>
                        <li>
                            <span>HTML5</span>
                            <p class="ProgressBar"></p>
                        </li>
                    </ul>
                </div>
                <div class="skillsHeader">
                    <h3>LANGUAGES</h3>
                    <ul>
                        <li>
                            <span>English</span>
                            <p class="ProgressBar"></p>
                        </li>
                        <li>
                            <span>Spanish</span>
                            <p class="ProgressBar"></p>
                        </li>
                        <li>
                            <span>French</span>
                            <p class="ProgressBar"></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div class="skillsHeader2">
                    <h3>Skills Summary</h3>
                    <p>Experienced web developer with expertise in JavaScript and React, seeking challenging projects to
                        contribute my skills and experience.</p>
                </div>
                <div class="professionalSkillsHeader">
                    <div>
                        <h3>EXPERIENCE</h3>
                    </div>
                    <ul class="exp-ul">
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Front-end Developer</h4>
                                <h5 class="company_name">
                                    <span>XYZ Company - New York</span>
                                    <span>Jan 2022 - Present</span>
                                </h5>
                                <p>Worked on developing user interfaces, implementing new features, and maintaining web
                                    applications.</p>
                            </div>
                        </li>
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Junior Developer</h4>
                                <h5 class="company_name">
                                    <span>ABC Agency - San Francisco</span>
                                    <span>Jun 2019 - Dec 2021</span>
                                </h5>
                                <p>Assisted in the development of web applications, participated in code reviews, and
                                    collaborated with the team.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="skillsHeader2">
                    <h3>Education</h3>
                    <ul class="edu-ul">
                        <li>
                            <h4>Bachelor's in Computer Science</h4>
                            <span>2015 - 2019</span>
                            <span>University of Demo</span>
                        </li>
                        <li>
                            <h4>Master's in Web Development</h4>
                            <span>2020 - 2022</span>
                            <span>Tech Institute</span>
                        </li>
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

export default Template_11;
