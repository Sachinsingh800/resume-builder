import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_24.module.css";
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

const Template_24= () => {
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
            width: 850px;
            height: 1130px;
            background-color: white;
            display: grid;
            grid-template-columns: 1fr 2fr;
        }
        
.Left_container{
    display: flex;
    flex-direction: column;
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
    margin-left: 1rem;

  }
  .skillsHeader {
    
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .skillsHeader h3{
    border-bottom: 1px rgb(0, 0, 0) solid;
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
  .img_container{
    display: flex;
    align-items: center;
    justify-content: center;
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
.img_box img{
    height: 100%;
    width: 100%;
    border-radius: 0;
}
.person_name{
  font-size: 3rem;
}
.person_name span{
  color: black;
}
.company_name{
  display: flex;
  justify-content: space-between;
  color: black;
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
 border-bottom: 1px rgb(8, 8, 8) solid;
 margin-left: 1rem;
 padding:0rem!important;
 
}
.title_box2 h3{
    margin:0rem;
}
.objectiveHeader h1,p{
    margin:0rem;
}
.edu-ul{
    flex-direction: column;
    display: flex;
    gap:.2rem;
    margin-top:-1rem;
}
.contactInfo{
  padding:0rem;
}
.ref-ul{
    margin-top:-1rem;
}
.ref-ul li h4{
    margin:0rem;
}
.work_des h4,h5,p{
    margin:0rem;
}
.work-ul{
    margin-top:-.3rem;
    margin-left:-.3rem!important;
    flex-direction: column;
    display: flex;
    gap:1rem;
}
.ProgressBar {
    background-color: orange;
    height:.2rem;
    width:10rem;
}
.skillsAndLevel{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
    margin-top:-.8rem;

}
.skillsAndLevel li{
    text-align: left;
}
        </style>
        <title>Your Page Title</title>
    </head>
    
    <body>
        <div class="main">
            <div class="Left_container">
                <div class="img_container">
                    <div class="img_box">
                        <img src=${base64Image3} alt="dp">
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="skillsHeader">
                    <h3>EDUCATION</h3>
                    <ul class="edu-ul">
                        <li style="color: black;">
                            <span>
                                Bachelor's Degree
                                <span>
                                    2015 - 2019
                                </span>
                            </span>
                            <span>University XYZ</span>
                        </li>
                        <li style="color: black;">
                            <span>
                                Bachelor's Degree
                                <span>
                                    2015 - 2019
                                </span>
                            </span>
                            <span>University XYZ</span>
                        </li>
                        <li style="color: black;">
                            <span>
                                Bachelor's Degree
                                <span>
                                    2015 - 2019
                                </span>
                            </span>
                            <span>University XYZ</span>
                        </li>
                        <!-- More education items here -->
                    </ul>
                </div>
    
                <div class="skillsHeader">
                    <h3>CONTACT</h3>
                    <div>
                     <div class="contactInfo">
                        <p class="email" style="color: black;">
                            <span>Email</span>
                            example@email.com
                        </p>
                    </div>
                    <div class="contactInfo">
                        <p style="color: black;" class="email">
                            <span>Phone</span>
                            +1234567890
                        </p>
                    </div>
    
                    <div class="contactInfo">
                        <p style="color: black;">
                            <span>Address</span>
                            123 Main St, City
                        </p>
                    </div>
                    </div>

                   
                </div>
    
                <div class="skillsHeader">
                    <h3>REFERENCES</h3>
                    <ul class="ref-ul">
                        <li style="color: black;">
                            <h4>John Doe</h4>
                            <span>Position | ABC Company</span>
                            <span>(123) 456-7890</span>
                        </li>
                        <!-- More references items here -->
                    </ul>
                </div>
            </div>
    
            <div>
                <div class="objectiveHeader">
                    <h1 class="person_name">Jessica Claire</h1>
                    <p class="objectiveText">Frontend Developer</p>
                </div>
                 <br/>
          
                <div class="skillsHeader2" style="margin-top:.7rem;">
                    <div class="title_box2" >
                        <h3>About Me</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam nec hendrerit urna, at convallis ex. Praesent et
                        convallis libero, a fermentum tellus.
                    </p>
                </div>
    
                <div class="professionalSkillsHeader">
                    <div class="title_box2">
                        <h3>WORKING EXPERIENCE</h3>
                    </div>
                    <ul class="work-ul">
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Software Engineer</h4>
                                <h5 class="company_name">
                                    <span>ABC Company - Location</span>
                                    <span>2019.08 - Present</span>
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Software Engineer</h4>
                                <h5 class="company_name">
                                    <span>ABC Company - Location</span>
                                    <span>2019.08 - Present</span>
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="work_des">
                                <h4 class="customerService">Software Engineer</h4>
                                <h5 class="company_name">
                                    <span>ABC Company - Location</span>
                                    <span>2019.08 - Present</span>
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                </p>
                            </div>
                        </li>
                        <!-- More work experience items here -->
                    </ul>
                </div>
    
                <div class="professionalSkillsHeader">
                    <div class="title_box2" style="paddingLeft:2rem;" >
                        <h3>SOFTWARE SKILL</h3>
                    </div>
                    <ul class="skillsAndLevel">
                        <li>
                            <p>JavaScript</p>
                            <div class="ProgressBar">
                                <div style="width: 40%;"></div>
                            </div>
                        </li>
                        <li>
                            <p>JavaScript</p>
                            <div class="ProgressBar">
                                <div style="width: 40%;"></div>
                            </div>
                        </li>
                        <li>
                            <p>JavaScript</p>
                            <div class="ProgressBar">
                                <div style="width: 40%;"></div>
                            </div>
                        </li>
                        <li>
                            <p>JavaScript</p>
                            <div class="ProgressBar">
                                <div style="width: 40%;"></div>
                            </div>
                        </li>
                        <!-- More software skills items here -->
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

export default Template_24;
