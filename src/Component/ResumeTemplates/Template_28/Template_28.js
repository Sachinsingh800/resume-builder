import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_28.module.css";
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

const Template_28= () => {
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
      <title>Resume</title>
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
  font-size: small;
  margin-left:-3rem ;
}
.skillsHeader {
  
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.skillsHeader h3{
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

.img_box{
  height: 16rem!important;
  width: 100%!important;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
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
flex-direction: column;
justify-content: center;
height: max-content;
padding: 1rem;
background-color: rgb(72, 72, 72);
gap: .5rem;

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
margin-left: 1rem;
}
.name-box {
  width:100%
}
.name-box h1,p{
  margin:0rem;
}
.edu-ul{
  margin-top:-1rem;
  flex-direction: column;
  display: flex;
  gap:.5rem;
}
.ref-ul{
  margin-top:-1rem;
  flex-direction: column;
  display: flex;
  gap:.5rem;
}
.para{
  margin-top:-1rem!important;
}
.work_des h3,h5,p{
  margin:0rem;
}
.work-ul{
  margin-top:-1rem!important;
  margin-left:-.4rem!important;
  flex-direction: column;
  display: flex;
  gap:1rem;
}
.skillsAndLevel{
  margin-top:-1rem!important;
  margin-left:-.4rem!important;
}
      </style>
    </head>
    
    <body>
      <div class="main">
        <div class="Left_container" style="background-color: #D3D3D3; color: white;">
          <div class="img_container">
            <div class="name-box">
            <h1 >John Doe</h1>
            <p class="objectiveText">Software Developer</p>
       
            </div>
             
            <div>
              <div class="contactInfo">
                <p class="email" style="color: white;"><span>Email: </span>john.doe@example.com</p>
              </div>
              <div class="contactInfo">
                <p class="email" style="color: white;"><span>Phone: </span>(123) 456-7890</p>
              </div>
              <div class="contactInfo">
                <p class="email" style="color: white;"><span>Address: </span>123 Main St, 56789</p>
              </div>
            </div>
          </div>
    
          <div class="skillsHeader">
            <h3 style="color: #333;">EDUCATION</h3>
            <ul class="edu-ul">
              <li style="color: #333;">
                <span>Bachelor's in Computer Science <span>2010 - 2014</span></span>
                <span>University of XYZ</span>
              </li>
              <!-- Add more education items as needed -->
            </ul>
          </div>
    
          <div class="skillsHeader">
            <h3 style="color: #333;">REFERENCES</h3>
            <ul class="ref-ul">
              <li style="color: #333;">
                <h4>Reference Name</h4>
                <span>Position | Company</span>
                <span>Phone: (123) 456-7890</span>
              </li>
              <!-- Add more references as needed -->
            </ul>
          </div>
        </div>
    
        <div>
          <div class="skillsHeader2">
            <div class="title_box2">
              <h3>About Me</h3>
            </div>
            <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
    
          <div class="professionalSkillsHeader">
            <div class="title_box2">
              <h3>WORKING EXPERIENCE</h3>
            </div>
            <ul class="work-ul">
              <li>
                <div class="work_des">
                  <h3 class="customerService">Software Engineer</h3>
                  <h5 class="company_name"><span>ABC Inc - New York</span> <span>Jan 2015 - Dec 2018</span></h5>
                  <p>Worked on various software development projects.</p>
                </div>
              </li>
              <li>
                <div class="work_des">
                  <h3 class="customerService">Software Engineer</h3>
                  <h5 class="company_name"><span>ABC Inc - New York</span> <span>Jan 2015 - Dec 2018</span></h5>
                  <p>Worked on various software development projects.</p>
                </div>
              </li>
              <li>
                <div class="work_des">
                  <h3 class="customerService">Software Engineer</h3>
                  <h5 class="company_name"><span>ABC Inc - New York</span> <span>Jan 2015 - Dec 2018</span></h5>
                  <p>Worked on various software development projects.</p>
                </div>
              </li>
              <li>
                <div class="work_des">
                  <h3 class="customerService">Software Engineer</h3>
                  <h5 class="company_name"><span>ABC Inc - New York</span> <span>Jan 2015 - Dec 2018</span></h5>
                  <p>Worked on various software development projects.</p>
                </div>
              </li>
              <li>
                <div class="work_des">
                  <h3 class="customerService">Software Engineer</h3>
                  <h5 class="company_name"><span>ABC Inc - New York</span> <span>Jan 2015 - Dec 2018</span></h5>
                  <p>Worked on various software development projects.</p>
                </div>
              </li>
              <!-- Add more work experience items as needed -->
            </ul>
          </div>
    
          <div class="professionalSkillsHeader">
            <div class="title_box2">
              <h3>SOFTWARE SKILL</h3>
            </div>
            <ul class="skillsAndLevel">
              <li>
                <span>JavaScript</span>
                <span style="width: 40%; height:.5rem; background-color: orange; display: inline-block;"></span>
              </li>
              <li>
                <span>JavaScript</span>
                <span style="width: 40%; height:.5rem; background-color: orange; display: inline-block;"></span>
              </li>
              <li>
                <span>JavaScript</span>
                <span style="width: 40%; height:.5rem; background-color: orange; display: inline-block;"></span>
              </li>
              <li>
                <span>JavaScript</span>
                <span style="width: 40%; height:.5rem; background-color: orange; display: inline-block;"></span>
              </li>
              <!-- Add more skills and levels as needed -->
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

export default Template_28;
