import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_1.module.css";
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

const Template_1= () => {
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
    padding: 3rem 1rem;
    height: 1112px;
    text-align: left;

}

.info_box{
    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 1rem 1rem;
}
.education{
    width: 100%;
    display: flex;
    flex-direction: column;

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
    margin:0rem;
}
.certifications ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
   
}
.edu{
    flex-direction: column;
    display: flex;
    gap:.5rem;
}
.edu h4,p{
    margin:0rem; 
}
.certi-ul {
    margin-top:-1rem;
    margin-left:-2.7rem;
    flex-direction: column;
    display: flex;
    gap:.5rem;
}
.certi-ul li h5,p{
    margin:0rem; 
}
.skill-ul{
    margin-top:-1rem;
    margin-left:-2.7rem;
}
.line{
    margin-top:-1rem;
    width:98%;
}
.work-ul{
  
    margin-top:-1rem;
    margin-left:-2.7rem;
    flex-direction: column;
    display: flex;
    gap:.5rem;
    
}
.work-ul li h4,p{
    margin:0rem;  
}
        </style>
        <title>Your Page Title</title>
    </head>
    
    <body>
        <div class="main">
            <div class="left_section" style="background-color: #3498db; color: white;">
                <div>
                    <div class="img_container">
                        <div class="img_box" style="height: 150px; width: 150px;">
                            <!-- Replace the image source with your actual 
                            image URL -->
                            <img src=${base64Image3} alt="dp" />
                        </div>
                    </div>
    
                    <div class="info_box">
                        <p>
                            <span>Email: </span>
                            john.doe@example.com
                        </p>
                        <p>
                            <span>Phone: </span>
                            123-456-7890
                        </p>
                        <p>
                            <span>Location: </span>
                            123 Main Street, 56789
                        </p>
                    </div>
                </div>
               <div><hr /></div> 
                <div class="education">
                    <h3>Education</h3>
                    <div class="edu">
                    <div>
                    <h4>University of Example</h4>
                    <p>Master's Degree</p>
                    <p>2015 - 2019</p>
                    </div>
                    <div>
                    <h4>University of Example</h4>
                    <p>Master's Degree</p>
                    <p>2015 - 2019</p>
                    </div>
                       
                    </div>
                    <!-- Add more education items as needed -->
                </div>
            </div>
    
            <div class="right_section">
                <div class="heading" style="background-color:#3498db;">
                    <h1 style="color: white; font-family: 'Arial', sans-serif; ">
                        John Doe
                    </h1>
                </div>
    
                <div class="certifications">
                    <h3>Certifications</h3>
                    <ul class="certi-ul">
                        <li>
                            <h5>Example Certification</h5>
                            <p>Organization: Certification Organization</p>
                        </li>
                        <li>
                            <h5>Example Certification</h5>
                            <p>Organization: Certification Organization</p>
                        </li>
                        <li>
                            <h5>Example Certification</h5>
                            <p>Organization: Certification Organization</p>
                        </li>
                        <!-- Add more certification items as needed -->
                    </ul>
                </div>
    
             <div class="line"> <hr /></div>  
    
                <div class="skills">
                    <h3>Skills</h3>
                    <ul class="skill-ul">
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <!-- Add more skills as needed -->
                    </ul>
                </div>
    
                <div class="line"> <hr /></div>  
    
                <div class="professional_summary">
                    <h3>Professional Summary</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet quam at purus varius bibendum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet quam at purus varius bibendum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet quam at purus varius bibendum.
                    </p>
                </div>
    
                <div class="line"> <hr /></div>  
    
                <div class="work">
                    <h3>Work History</h3>
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

export default Template_1;
