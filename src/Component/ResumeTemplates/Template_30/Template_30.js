import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_30.module.css";
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

const Template_30= () => {
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
    }
    .heading{
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 5rem;
      width: 52rem; 
  }
  .summary h2{
      background-color:rgb(211, 211, 211)  ;
      padding: 0rem .5rem;
      width: 90%;
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
      display:flex;
      flex-direction:column;
      gap:.5rem;
  }
  .Skills h2{
      padding: 0rem .5rem;
      background-color:rgb(211, 211, 211)  ;
      width: 90%
  }
  .Skills {
      display: flex;
      align-items: center;
      flex-direction: column;
  }
  .Skills ul{
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
  .Skills ul li{
      padding: .5rem;
     
  }
  .work_des {
      display: grid;
      grid-template-columns: 1fr 2fr;

  }
  .Eucation{
      display: flex;
      align-items: center;
      flex-direction: column;
  }

  .Eucation h2{
      padding: 0rem .5rem;
      background-color:rgb(211, 211, 211)  ;
      width: 90%
  }
  .Eucation ul{
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
  .Eucation ul li{
      display: flex;
      flex-direction: column;
  }
  .title_section{
      width: 100%;
      display: flex;
      align-items: center;
        margin-left:1rem;
      overflow: hidden;
  }
  .line{
     
width: 60%;
 
      border: 1px rgb(94, 93, 93) dotted;
      margin-top: .4rem;
  }
  .line2{
     
width: 78%;
 
      border: 1px rgb(94, 93, 93) dotted;
      margin-top: .4rem;
  }
  .line3{
     
width: 72%;
 
      border: 1px rgb(94, 93, 93) dotted;
      margin-top: .4rem;
  }
  .line4 {
    width: 70%;
    border: 1px rgb(94, 93, 93) dotted;
    margin-top: .4rem;
}
  .title_section h3{
     width: max-content;
     background-color: white;
     margin-left:2rem;
  }
  .heading p,h1{
    margin:0rem;
  }
  .work-info h4,h6{
    margin:0rem;
  }

  .des-info p{
    margin:0rem;
  }
  .Education ul li  span,h4{
    margin:0rem;
  }
  .Education ul  {
    display: grid;
    grid-template-columns: 1fr 1fr;

    margin-left:2rem;
  }

  .ul{
    margin-left:-2rem;
  }

    </style>
    <title>Your Resume</title>
</head>

<body>
    <div class="main">
        <div class="heading">
            <h1>Jane Doe</h1>
            <p>jane.doe@example.com | +1 123-456-7890</p>
        </div>
        <div class="summary">
            <div class="title_section">
                <h3>Professional Summary </h3>
                <hr class="line" />
            </div>
            <p class="para">Experienced and detail-oriented software developer with a passion for creating efficient and scalable solutions. Proven track record of successful project management and strong analytical skills.</p>
        </div>
        <div class="Skills">
            <div class="title_section">
                <h3>Skills</h3>
                <hr class="line2" />
            </div>
            <ul>
                <li>
                    <span>JavaScript</span>
                </li>
                <li>
                    <span>React</span>
                </li>
                <li>
                    <span>Node.js</span>
                </li>
                <li>
                    <span>HTML</span>
                </li>
                <li>
                    <span>CSS</span>
                </li>
            </ul>
        </div>
        <div class="Experience">
            <div class="title_section">
                <h3>Work History</h3>
                <hr class="line3" />
            </div>
            <ul class="ul">
            
                <li>
                    <div class="work_des">
                        <div class="work-info">
                            <h4 class="customerService">Software Engineer</h4>
                            <h6 class="company_name"><span>XYZ Solutions - San Francisco</span> <span>Jun 2018 - Dec 2019</span></h6>
                        </div>
                        <div class="des-info">
                            <p>
                                Contributed to the design and implementation of backend systems using Node.js. Resolved complex technical issues and optimized application performance.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="work_des">
                        <div class="work-info">
                            <h4 class="customerService">Software Engineer</h4>
                            <h6 class="company_name"><span>XYZ Solutions - San Francisco</span> <span>Jun 2018 - Dec 2019</span></h6>
                        </div>
                        <div class="des-info">
                            <p>
                                Contributed to the design and implementation of backend systems using Node.js. Resolved complex technical issues and optimized application performance.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="work_des">
                        <div class="work-info">
                            <h4 class="customerService">Software Engineer</h4>
                            <h6 class="company_name"><span>XYZ Solutions - San Francisco</span> <span>Jun 2018 - Dec 2019</span></h6>
                        </div>
                        <div class="des-info">
                            <p>
                                Contributed to the design and implementation of backend systems using Node.js. Resolved complex technical issues and optimized application performance.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="Education">
            <div class="title_section">
                <h3>Education</h3>
                <hr class="line4" />
            </div>
            <ul>
                <li >
                    <span>2015 - 2019</span>
                    <h4>Bachelor's in Computer Science</h4>
                    <span>University of Example</span>
                </li>
                <li >
                    <span>2019 - 2021</span>
                    <h4>Master's in Software Engineering</h4>
                    <span>Graduate School of Tech</span>
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

export default Template_30;
