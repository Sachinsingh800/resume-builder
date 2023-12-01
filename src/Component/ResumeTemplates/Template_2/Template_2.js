import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_2.module.css";
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

const Template_2= () => {
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
    <link rel="stylesheet" href="styles.css"> <!-- You may link your stylesheet if you have one -->
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
    gap: 1rem;
    height: 1210px;
}
  
.name_container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background-color: #c2c3c4;
    height: 14rem;
}
  .container {
    padding: 13px 0 0 0;
  }
  
  .name {
    color: white;
  }
  
  .hr {
    margin-left: 2px;
    margin-right: 30px;
    color: #A2A2A2;
    margin-top:-1rem;
  }
  
  .iconContainer {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon {
    color: black;
  }
  
  .email {
    color: white;
  }
  
  .phoneIcon {
    font-size: 12px;
  }

  
  .contactInfo {
    display: flex;
    gap: .5rem;

  }
  .skillsHeader {
    padding: 0rem 1.5rem;
  }


  .skillsHeader ul{
   margin-left: -1.2rem;
    

  }

  .skillsHeader2 ul{
    margin-left: -1.5rem;
  }
  .professionalSkillsHeader ul{
    margin-left: 1.5rem;
  }

  .info_box{
    display: flex;
    flex-direction: column;
    gap:.5rem;
  }
  
  .educationHeader{
    padding: 1.5rem;
  }
  .objectiveHeader{
    padding: 1rem;
   height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
  }
  .work_history{
    list-style: none;
    padding: 0rem 1rem;
  }
  .Projects{
    list-style: none;
    padding: 0rem 1rem;
  }
  .project_title{
    display:flex ;
    justify-content: space-between;
  }
  .contactInfo p{
      margin:0rem;
  }
  .edu-ul h4,p{
    margin:0rem; 
  }
  .work-ul li h4,p{
    margin:0rem; 
  } 
  .work-ul {
      margin:-1rem;
      flex-direction: column;
      display: flex;
      gap:.5rem;
  }
    .edu-ul{
        flex-direction: column;
        display: flex;
        gap:.5rem;
    }
  .Projects-ul li h4,p{
    margin:0rem; 
  }

  .Projects-ul{
      margin-top:-1rem;
      flex-direction: column;
      display: flex;
      gap:.5rem;
  }
  .icon{
    height:1rem;
    width:1rem;
  
  }

    </style>
    <title>Your Page Title</title>
</head>

<body>
    <div class="main">
        <div class="Left_container" style="background-color: grey; color:white;">
            <div class="name_container">
                <h1 class="name">
                    John Doe
                </h1>
                <hr class="hr" />
                <div class="info_box">
                    <div class="contactInfo">
                    <div class="iconContainer" style="color: black;">
                    <img class="icon" src=${base64Image4} alt="dp" />
                    </div>
                        <p class="email">
                            john.doe@example.com
                        </p>
                    </div>
                    <div class="contactInfo">
                    <div class="iconContainer" style="color: black;">
                    <img class="icon" src=${base64Image5} alt="dp" />
                    </div>
                        <p class="email">
                            123-456-7890
                        </p>
                    </div>
                    <div class="contactInfo">
                    <div class="iconContainer" style="color: black;">
                    <img class="icon" src=${base64Image1} alt="dp" />
                    </div>
                        <p class="email">
                            123 Main Street, 56789
                        </p>
                    </div>
                </div>
            </div>
            <div class="skillsHeader">
                <h3>SKILLS</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <!-- Add more skills as needed -->
                </ul>
            </div>
            <div class="educationHeader">
                <h3>EDUCATION</h3>
                <div class="edu-ul">
                    <h4>University of Example</h4>
                    <p>Master's Degree</p>
                    <p>2015 - 2019</p>
                </div>
                <div class="edu-ul">
                    <h4>University of Example</h4>
                    <p>Master's Degree</p>
                    <p>2015 - 2019</p>
                </div>
                <div class="edu-ul">
                    <h4>University of Example</h4>
                    <p>Master's Degree</p>
                    <p>2015 - 2019</p>
                </div>
                <!-- Add more education items as needed -->
            </div>
        </div>
        <div>
            <div class="objectiveHeader" style="background-color: #E5E5E5;">
                <h3>CAREER OBJECTIVE</h3>
                <p class="objectiveText">
                    Experienced web developer with expertise in JavaScript and React, seeking challenging projects to contribute my skills and experience.
                    Experienced web developer with expertise in JavaScript and React, seeking challenging projects to contribute my skills and experience.
                    Experienced web developer with expertise in JavaScript and React, seeking challenging projects to contribute my skills and experience.
                </p>
            </div>
            <div class="workHeader">
                <h3>WORK HISTORY</h3>
                <ul class="work-ul">
                    <li>
                        <h4>Front-End Developer</h4>
                        <p>Example Company, New York</p>
                        <p>Responsible for developing and maintaining user interfaces...</p>
                    </li>
                    <li>
                        <h4>Front-End Developer</h4>
                        <p>Example Company, New York</p>
                        <p>Responsible for developing and maintaining user interfaces...</p>
                    </li>
                    <li>
                        <h4>Front-End Developer</h4>
                        <p>Example Company, New York</p>
                        <p>Responsible for developing and maintaining user interfaces...</p>
                    </li>
                    <!-- Add more work history items as needed -->
                </ul>
            </div>
            <div class="workHeader">
                <h3>Projects</h3>
                <ul class="Projects-ul">
                    <li>
                        <h4 class="project_title">
                            <span>Project A</span> <span>2022</span>
                        </h4>
                        <p>Project link</p>
                        <p>Project description</p>
                    </li>
                    <li>
                        <h4 class="project_title">
                            <span>Project A</span> <span>2022</span>
                        </h4>
                        <p>Project link</p>
                        <p>Project description</p>
                    </li>
                    <li>
                        <h4 class="project_title">
                            <span>Project A</span> <span>2022</span>
                        </h4>
                        <p>Project link</p>
                        <p>Project description</p>
                    </li>
                    <!-- Add more project items as needed -->
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

export default Template_2;
