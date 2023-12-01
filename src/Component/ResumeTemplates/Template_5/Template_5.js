import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_5.module.css";
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

const Template_5= () => {
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
        <link rel="stylesheet" href="styles.css"> 
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
            display: grid;
            grid-template-columns: 1fr 2fr;
        }
        
.Left_container{
    display: flex;
    flex-direction: column;
    height: 1210px;
}
  
  .container {
    padding: 13px 0 0 0;

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
    gap: 1rem;
    padding: .5rem;


  }
  .skillsHeader {
    
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .skillsHeader h3{
   padding: 0rem 1rem;
    background-color: aliceblue;
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
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
   margin-bottom: 1rem;
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
  padding: .4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img_box{
    height: 10rem;
    width: 10rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: orange;
    padding: .3rem;
}
.img_box img{
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.person_name{
  font-size: 3rem;
}
.person_name span{
  color: #2e89ba;
}
.company_name{
  display: flex;
  justify-content: space-between;
  color: #2e89ba;
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
  gap: 1rem;
  padding: 1rem;
}
.skillsAndLevel li{

  overflow: hidden;
}

.design{
background-color: orange;
  width: 1rem;
  height: 100%;
}
.design2{
background-color: orange;
  width: 1rem;
  height: 4rem;
}
.design3{
background-color: orange;
  width: 1rem;
  height: 13rem;
  position: absolute;
  margin-left: -1.5rem;
}
.title_box{
  display: flex;
  width: 100%;
  background-color: white;
}
.title_box2{
  display: flex;
  width: 100%;
 align-items:center ;
 gap: .5rem;
}
.contactInfo p{
    margin:0rem;
}
.objectiveHeader h1,p{
    margin:0rem;
}
.work_des h4,h5,p{
    margin:0rem;
}
.work-ul  {
    margin-left:-.5rem!important;
    flex-direction: column;
    display: flex;
    gap:.8rem;
}

.contact-list  div{
  flex-direction: column;
  display: flex;
  gap:.1rem;
  padding:.2rem!important ;
  margin-left:.8rem;
}
        </style>
        
        <title>Your Page Title</title>
    </head>
    
    <body>
        <div class="main">
            <div class="Left_container" style="background-color: ; color: black;">
                <div class="img_container">
                    <div class="img_box" style="height: 150px; width: 150px;">
                        <!-- Use a placeholder image or replace the source with dynamic data -->
                        <img src=${base64Image3} alt="dp">
                    </div>
                </div>
                <div class="skillsHeader">
                    <div class="title_box">
                        <span class="design"> </span>
                        <h3 style="color: black;">EDUCATION</h3>
                    </div>
                    <ul >
                        <li style="color: black;">
                            <span>
                                Bachelor's Degree
                                <span>2016 - 2020</span>
                            </span>
                            <span>Example University</span>
                        </li>
                        <!-- Add more education items as needed -->
                    </ul>
                </div>
                <div class="skillsHeader">
                    <div class="title_box">
                        <span class="design"> </span>
                        <h3 style="color: black;">CONTACT</h3>
                    </div>
                   <div class="contact-list">
                   <div class="contactInfo">
                   <p class="email" style="color: black;">
                       john.doe@example.com
                   </p>
               </div>

               <div class="contactInfo">
                   <p style="color: black;" class="email">
                       123-456-7890
                   </p>
               </div>

               <div class="contactInfo">
                   <p class="email" style="color: black;">
                       123 Main Street, 56789
                   </p>
               </div>
                   </div>
                   

                </div>
                <div class="skillsHeader">
                    <div class="title_box">
                        <span class="design"> </span>
                        <h3 style="color: black;">REFERENCES</h3>
                    </div>
                    <ul>
                        <li style="color: black;">
                            <h4>Jane Doe</h4>
                            <span>Manager | Example Company</span>
                            <span>987-654-3210</span>
                        </li>
                        <!-- Add more references as needed -->
                    </ul>
                </div>
            </div>
            <div>
                <div class="objectiveHeader" style="background-color: ;">
                    <span class="design3"> &nbsp; </span>
                    <h1 class="person_name" style="font-family: 'YourFont', sans-serif;  color: black;">
                        John Doe
                    </h1>
                    <p class="objectiveText">
                        Web Developer
                    </p>
                </div>
                <div class="skillsHeader2">
                    <div class="title_box2" style="font-family: 'YourFont', sans-serif; background-color: ;">
                        <span class="design2"> &nbsp; </span>
                        <h3>About Me</h3>
                    </div>
                    <p>
                        Experienced web developer with expertise in JavaScript and React, seeking challenging projects to contribute my skills and experience.
                        Experienced web developer with expertise in JavaScript and React, seeking challenging projects to contribute my skills and experience.
                    </p>
                </div>
                <div class="professionalSkillsHeader">
                    <div class="title_box2" style="font-family: 'YourFont', sans-serif; background-color: ;">
                        <span class="design2"> &nbsp; </span>
                        <h3>WORKING EXPERIENCE</h3>
                    </div>
                    <ul class="work-ul">
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Front-End Developer</h4>
                                <h5 class="company_name">
                                    <span>Example Company - New York</span>
                                    <span>Jan 2020 - Present</span>
                                </h5>
                                <p>Responsible for developing and maintaining user interfaces...</p>
                            </div>
                        </li>
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Front-End Developer</h4>
                                <h5 class="company_name">
                                    <span>Example Company - New York</span>
                                    <span>Jan 2020 - Present</span>
                                </h5>
                                <p>Responsible for developing and maintaining user interfaces...</p>
                            </div>
                        </li>
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Front-End Developer</h4>
                                <h5 class="company_name">
                                    <span>Example Company - New York</span>
                                    <span>Jan 2020 - Present</span>
                                </h5>
                                <p>Responsible for developing and maintaining user interfaces...</p>
                            </div>
                        </li>
                        <!-- Add more work experience items as needed -->
                    </ul>
                </div>
                <br />
                <div class="professionalSkillsHeader">
                    <div class="title_box2" style="font-family: 'YourFont', sans-serif; background-color: ;">
                        <span class="design2"> &nbsp; </span>
                        <h3>SOFTWARE SKILL</h3>
                    </div>
                    <ul class="skillsAndLevel">
                        <li>
                            <span>JavaScript</span>
                            <span>
                                <!-- You may adjust the ProgressBar according to your design -->
                                <div style="background-color: orange; width: 40%; height: 4px;"></div>
                            </span>
                        </li>
                        <li>
                            <span>JavaScript</span>
                            <span>
                                <!-- You may adjust the ProgressBar according to your design -->
                                <div style="background-color: orange; width: 40%; height: 4px;"></div>
                            </span>
                        </li>
                        <li>
                            <span>JavaScript</span>
                            <span>
                              
                                <div style="background-color: orange; width: 40%; height: 4px;"></div>
                            </span>
                        </li>
                        <li>
                            <span>JavaScript</span>
                            <span>
                                <!-- You may adjust the ProgressBar according to your design -->
                                <div style="background-color: orange; width: 40%; height: 4px;"></div>
                            </span>
                        </li>
                        <!-- Add more software skills as needed -->
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

export default Template_5;
