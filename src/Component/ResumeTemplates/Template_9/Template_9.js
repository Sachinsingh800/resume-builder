import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_9.module.css";
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

const Template_9= () => {
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
            height: 1130px;
            background-color: white;
        }

        .heading {
            display: flex;
            justify-content: space-between;
            width: 850px;
            padding: 0.5rem 1rem;
            height: 6rem;
        }

        .heading div {
            width: 50%;
          //  border:1px red solid;
        }

        .summary h2 {
            border-top: 1px rgb(112, 111, 111) solid;
            border-bottom: 1px rgb(112, 111, 111) solid;
            width: 90%;
        }

        .para {
            width: 96%;
        }

        .summary {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .Experience {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 850px;
      
        }

        .Experience h2 {
            border-top: 1px rgb(112, 111, 111) solid;
            border-bottom: 1px rgb(112, 111, 111) solid;
            width: 96%;
            text-align: center;
        }

        .Experience ul {
            width: 90%;
       
        }

        .Skills h2 {
            border-top: 1px rgb(112, 111, 111) solid;
            border-bottom: 1px rgb(112, 111, 111) solid;
            width: 96%;
            text-align: center;
        }

        .Skills {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 850px;
            
        }

        .Skills ul {
            width: 90%;
            margin:.1rem;
            display: inline-table;
            grid-template-columns: auto;
            margin-left: -80px; /* Adjusted from -5rem to pixels based on your requirement */
        }

        .Skills ul li {
            width: max-content;
            display: inline-table;
            padding: 8px; /* Adjusted from .5rem to pixels based on your requirement */
            margin: 8px; /* Adjusted from .5rem to pixels based on your requirement */
            border-radius: 5px;
            color: white !important;
            background-color: rgb(31, 106, 177);
        }

        .Education {
            display: flex;
            flex-direction: column;
            gap: 0rem;
            align-items: center;
            width: 850px;
        }

        .Education h2 {
            border-top: 1px rgb(112, 111, 111) solid;
            border-bottom: 1px rgb(112, 111, 111) solid;
            width: 96%;
            text-align: center;
        }

        .Education ul {
            width: 90%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-left: 10px; /* Adjusted from 1rem to pixels based on your requirement */
            gap: 5px; /* Adjusted from 1rem to pixels based on your requirement */
        }

        .Education ul li {
            display: flex;
            flex-direction: column;
        }

        .contact_info {
            display: flex;
            flex-direction: column;
            text-align: right;
        }

        .description_box {
            padding: 0 16px; /* Adjusted from 0rem 1rem to pixels based on your requirement */
            width: 850px;
        }

        .contact_info {
            height: 6rem;
            display:flex;
            flex-direction:column;
          
        }
        .contact_info p{
          margin:.1rem;
        }
        .work_des p{
          margin:.1rem;
        }
        .work_des h5,h3{
          margin:.1rem;
        }
        .ul{
          display:flex;
          flex-direction:column;
          gap:.2rem;
        }
        .ul li{
          margin-left:-1rem;
        }
        .edu_des h5,h4,p{
          margin:.1rem;
        }
        .name h1,p{
          margin:.1rem;
        }
        
    </style>
    </head>
    
    <body>
    <div onclick="setTemplateNo(8)" class="main">
        <div class="heading">
            <div class="name">
                <h1> ${formData.resume.name}</h1>
                <p>${formData.resume.jobTitle}</p>
            </div>
            <div class="contact_info">
            <a> ${formData.resume.contact.email}</a>
            <p>${formData.resume.contact.phone}</p>
            <p>
            ${formData.resume.address.address},
            ${formData.resume.address.state },
            ${formData.resume.address.postalCode }</p>
            <p> ${formData.resume.socialLinks.linkedin }</p>
        </div>
        </div>
        <div class="description_box">
            <p>
            ${formData.resume.summary}
            </p>
        </div>
        <div class="Skills">
            <h2>Skills</h2>
            <ul>
            ${formData.resume.skillsAndLevel.map((item) => `
                 
            <li style="color: color3;">
            <span>${item.skills}</span>
        </li>
  
    `)}
            
            </ul>
        </div>
        <div class="Experience">
            <h2>Work History</h2>
            <ul class="ul">
            ${formData.resume.work.map((item) => `
            <li>
            <div class="work_des">
                    <h3 class="customerService">${item?.title}</h3>
                    <h5 class="company_name">
                    <span>${item?.company} - ${item?.location}</span> 
                    <span>${item?.startDate} - ${item?.endDate}</span>
                    </h5>
           
                <div>
                    <p>
                    ${item?.description}
                    </p>
                </div>
            </div>
        </li>
    `)}     

            </ul>
        </div>
        <div class="Education">
            <h2>Education</h2>
            <ul>
            ${formData.resume.education.map((item) => `
            <li class="edu_des">
            <h5>${item.startYear} - ${item.endYear}</span>
            <h4>${item.degree}</h4>
            <p>${item.collegeName}</span> 
            </li>
        `)}
              
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

export default Template_9;
