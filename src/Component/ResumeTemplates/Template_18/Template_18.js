import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_18.module.css";
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

const Template_18= () => {
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
        <link rel="stylesheet" href="your-style.css">
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
 background-color: rgb(215, 213, 213);
  height: 8rem;
  display: flex;
align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
}
.img_box{
   border-radius: 50%;
  margin-left: 2rem;
}
.section{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.work_entry{
  display: grid;
  grid-template-columns: 1fr;
}
.section_title{
   display: flex;
   align-items: center;
   gap: 2.7rem;

}
.title_{
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90%;
}
.description{
   width: 25rem;
}
.contact_value{
   display: flex;
   align-items: center;
   gap: .2rem;

}
.name_box{
   width: 75%;
}

.contact_label{
   font-size: small;
}
.contact_info{
 display: flex;
 flex-direction: column;
 gap: .5rem;
}
.skills_list{
display: flex;
flex-direction: column;
gap: .5rem;
list-style: none;
padding-top: 1rem;
}
.name_box h1,h5{
  margin:0;
}
.divider{
margin-left:-1rem;
margin-top:-1.5rem;
}
.work_entry p,h4{
  margin:0;
}
.contact_value p{
  margin:0rem;
}
.skills_list{
  margin-left:-3.6rem;
margin-top:-1.5rem;
}
.section-content{
  margin-top:-.5rem;
}
.work_expe{
  display: grid;
  grid-template-columns: 1fr;
  margin-top:-1rem;
}
.work-info p{
  margin:0rem;
}
.icon{
  height:1rem;
  width:1rem;
}
        </style>
    </head>
    
    <body>
        <div class="main">
            <div class="header">
                <div>
                    <div class="img_box">
                        <img src=${base64Image3} alt="dp">
                    </div>
                </div>
                <div class="name_box">
                    <h1 class="name">JESSICA CLAIRE</h1>
                    <h5 class="name">Frontend Developer</h5>
                </div>
            </div>
            <div class="container">
                <div class="right_section">
                    <div class="section">
                        <h3 class="section_title">EDUCATION</h3>
                        <!-- Replace with your styling for Divider -->
                        <div class="divider"><hr/></div>
                        <div class="work_entry">
                            <p class="date">2019.08 - 2023.09</p>
                            <div>
                                <h4 class="degree">Masters in Data Science</h3>
                                <p class="university">ABC College</p>
                            </div>
                        </div>
                        <div class="work_entry">
                            <p class="date">2019.08 - 2023.09</p>
                            <div>
                                <h4 class="degree">Masters in Data Science</h3>
                                <p class="university">ABC College</p>
                            </div>
                        </div>
                    </div>
                    <h3 class="section-title">CONTACTS</h3>
                    <div class="divider"><hr/></div>
                    <div class="contact_info">
                        <div class="contact_value">
                              <span class="icon">
          <img class="icon" src=${base64Image5} alt="dp" />
          </span>
                            <p class="contact-value">+91 9503942697</p>
                        </div>
                        <div class="contact_value">
                              <span class="icon">
          <img class="icon" src=${base64Image4} alt="dp" />
          </span>
                            <p class="contact-value">ss20010126@gmail.com</p>
                        </div>
                        <div class="contact_value">
                              <span class="icon">
          <img class="icon" src=${base64Image2} alt="dp" />
          </span>
                            <p class="contact-value">linkedin.com/en/5hubzzz</p>
                        </div>
                        <div class="contact_value">
                              <span class="icon">
          <img class="icon" src=${base64Image1} alt="dp" />
          </span>
                            <p class="contact-value">Enter Your Address here</p>
                        </div>
                    </div>
                    <div class="section">
                        <h3 class="section-title">SKILLS</h3>
                        <div class="divider"><hr/></div>
                        <ul class="skills_list">
                            <li>JavaScript</li>
                            <li>JavaScript</li>
                            <li>JavaScript</li>
                            <li>JavaScript</li>
                            <li>JavaScript</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    <div class="section">
                        <h3 class="section-title">LANGUAGE</h3>
                        <div class="divider"><hr/></div>
                        <ul class="skills_list">
                            <li>Hindi</li>
                            <li>English</li>
                            <li>Urdu</li>
                        </ul>
                    </div>
                    <div class="section">
                        <h3 class="section-title">INTEREST</h3>
                        <div class="divider"><hr/></div>
                        <ul class="skills_list">
                            <li>Hindi</li>
                            <li>English</li>
                            <li>Urdu</li>
                        </ul>
                    </div>
                </div>
                <div class="left_section">
                    <div class="section">
                        <h3 class="section-title">SUMMARY</h3>
                        <div class="divider"><hr/></div>
                        <p class="section-content">
                            Lorem Ipsum is simply dummy text of scrambled it to make a ty It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more.
                        </p>
                    </div>
                    <div class="section">
                        <h3 class="section_title">EXPERIENCE</h3>
                        <div class="divider"><hr/></div>
                        <div class="work_expe">
                            <div class="work-info" >
                                <div class="title_">
                                    <h3 class="position">Software Engineer</h3>
                                    <p class="date">2019.08 - Present</p>
                                </div>
                                <p class="company">ABC Company</p>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>
                           
                        </div>
                        <div class="work_expe">
                            <div class="work-info" >
                                <div class="title_">
                                    <h3 class="position">Software Engineer</h3>
                                    <p class="date">2019.08 - Present</p>
                                </div>
                                <p class="company">ABC Company</p>
                                <p class="description">
                                    Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>
                           
                        </div>
                        <!-- Repeat the above block for each work entry -->
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
    {/* <PDFRenderer htmlContent={getHTML()} /> */}
    <div dangerouslySetInnerHTML={{ __html: getHTML() }} />
  </div>
  );
};

export default Template_18;
