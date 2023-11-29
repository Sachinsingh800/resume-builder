import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_29.module.css";
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

const Template_29= () => {
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
        <!-- Add any necessary head elements or links to external stylesheets -->
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
 padding-top:4rem;
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
  gap: 1rem;
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
background-color: rgb(131, 136, 136);

  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  align-items: center;
}
.img_box{

   height: 8rem;
   width: 8rem;
   border-radius: 0;
   position: absolute;
    margin-left:40rem ;
    overflow: hidden;

}
.img_box img{
   height: 100%;
   width: 100%;
}
.section{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.work_entry{
  display: grid;
  grid-template-columns: 1fr 2fr;
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
.name-box h1,h5{
margin:0rem;
}
.section-content{
margin-top:-1rem;
}
.edu_des h5,h4,p{
margin:.1rem;
}
.edu-info h4,p{
margin:0rem;
}
.work{

padding:0rem;

}


.icon{
height:1rem;
width:1rem;
}
.divider{
  margin-top:-1.8rem; 
  margin-left: -1rem;
}

.work-info h3{
  margin:0rem;
}
.edu-his{
  margin-top:-.5rem;
  display:flex;
  flex-direction:colunm;
  gap:.5rem;
}
.contact-info{
  display: grid;
  grid-template-columns: 1fr ;
  gap:.5rem;
}
.edu-info{
  margin-top:-.5rem;

}
.skills-list{
  margin-top:-.5rem;
  margin-left: -2.5rem;
}
.education-entry{
  margin-top:.5rem;
}
        </style>
        <title>Jessica Claire's Resume</title>
    </head>
    
    <body>
        <div class="main">
            <div class="header">
                <div class="name-box">
                    <h1 class="name">JESSICA CLAIRE</h1>
                    <h5 class="name">Frontend Developer</h5>
                </div>
                <div class="img_box">
                    <img src=${base64Image3} alt="dp" />
                </div>
            </div>
            <div class="container">
                <div class="right_section" style="background-color: white;">
                    <h3 class="section-title">Personal Info</h3>
                   <div class="divider"> <hr  /></div>
                    <div class="contact-info">
                        <div class="contact-entry">
                            <h5 class="contact-label">Address</h5>
                            <p class="contact-value">Enter Your Address here</p>
                        </div>
                        <div class="contact-entry">
                            <h5 class="contact-label">Phone</h5>
                            <p class="contact-value">+91 9503942697</p>
                        </div>
                        <div class="contact-entry">
                            <h5 class="contact-label">E-mail</h5>
                            <p class="contact-value">ss20010126@gmail.com</p>
                        </div>
                        <div class="contact-entry">
                            <h5 class="contact-label">LinkedIn</h5>
                            <p class="contact-value">linkedin.com/en/5hubzzz</p>
                        </div>
                    </div>
    
                    <div class="section">
                        <h3 class="section-title">SKILLS</h3>
                        <div class="divider"> <hr  /></div>
                        <ul class="skills-list">
                            <li>
                                <h4>C++</h4>
                                <p>Advanced</p>
                            </li>
                            <li>
                                <h4>C++</h4>
                                <p>Advanced</p>
                            </li>
                            <li>
                                <h4>C++</h4>
                                <p>Advanced</p>
                            </li>
                        </ul>
                    </div>
                    <!-- Additional sections for Language and Interest -->
    
                </div>
                <div class="left_section">
                    <div class="section">
                        <p class="section-content">
                            Lorem Ipsum is simply dummy text of scrambled it to make a ty It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.
                        </p>
                    </div>
                    <div class="section">
                        <h3 class="section-title">Experience</h3>
                        <div class="divider"> <hr  /></div>
    
                        <div class="work_entry">

                            <p class="date">2019.08 - Present</p>
                           
                            <div class="work-info">
                                <h4 class="position">Software Engineer</h4>
                                <p class="company">ABC Company</p>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            
                             </div>
                        </div>
                        <div class="work_entry">

                            <p class="date">2019.08 - Present</p>
                           
                            <div class="work-info">
                                <h4 class="position">Software Engineer</h4>
                                <p class="company">ABC Company</p>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            
                             </div>
                        </div>
                        <!-- Additional work entries -->
    
                    </div>
                    <div class="section">
                        <h3 class="section-title">EDUCATION</h3>
                        <div class="divider"> <hr  /></div>

                        <div class="edu-his">
                        <div class="education-entry">
                        <h4 class="degree">Masters in Data Science</h4>
                        <p class="university">ABC College</p>
                        <p class="date">2019.08 - 2023.09</p>
                        <p class="description">
                            Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </div>
                        <div class="education-entry">
                        <h4 class="degree">Masters in Data Science</h4>
                        <p class="university">ABC College</p>
                        <p class="date">2019.08 - 2023.09</p>
                        <p class="description">
                            Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </div>
                        </div>
                       
                    </div>
                    <div class="section">
                        <h3 class="section-title">Certification</h3>
                        <div class="divider"> <hr  /></div>
                        <div class="edu-info">

                        <div class="education-entry">
                        <h4 class="degree">Masters in Data Science</h4>
                        <p class="university">ABC College</p>
                        <p class="date">2019.08 - 2023.09</p>
                        <p class="description">
                            Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                        <div class="education-entry">
                        <h4 class="degree">Masters in Data Science</h4>
                        <p class="university">ABC College</p>
                        <p class="date">2019.08 - 2023.09</p>
                        <p class="description">
                            Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>

                    </div>
                        
                        </div>
                       
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

export default Template_29;
