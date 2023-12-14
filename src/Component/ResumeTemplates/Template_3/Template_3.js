import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
import mail from "../../Images/mail.png"
import call from "../../Images/call.png"
import dp from "../../Images/dp2.jpg"
import { Divider } from "@mui/material";
import style from "./Template_3.module.css";
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

const Template_3= () => {
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
      croppedImage ? croppedImage : dp,
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
  margin:0;
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
  
  .iconContainer {
    width: 1.5625rem ; /* 1.5625rem */
    height: 1.5625rem ; /* 1.5625rem */
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
    align-items:center;
  }
  .skillsHeader {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .skillsHeader h3{
    margin-left: .5rem;
  }
  .skill h3{
    margin-left: 2rem;
  }

  .skillsHeader ul{
   list-style: none;
  padding: 0rem 2rem 0rem 0rem;

  }
  .skillsHeader ul li{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0rem 1rem;

  }
  .skillsHeader2{
    padding: 1.5rem;
  }
  .skillsHeader2 h2{
    display: flex;
    align-items: center;
    gap: .5rem;
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
    padding: 1rem;
    height: 13rem;
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
    margin-top:-4rem;
  }
  .professionalSkillsHeader{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .professionalSkillsHeader h2{
    display: flex;
    align-items: center;
    gap: .5rem;

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
    background-color: white;
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
.contactInfo p{
    margin:0rem;
}
.skill-info li h4,h5,p{
    margin:0rem;
}
.skill-info{
 display:grid;
 grid-template-columns: 1fr ;
gap:.8rem;
}

.divider{
    margin-top:-2rem;
    margin-left: .5rem;
}
.Profile-divider{
  margin-top:-2rem;
}
.work-divider{
    margin-top:-1rem;
}
.objectiveHeader p,h1{
    margin:0rem; 
}

.skill-list  li{
  width:100%;
  padding:.2rem;
  list-style:none;
}
.skill-divider{
  margin-top:-1rem;
  width:80%;
  margin-left: 2rem;
}
.work-ul{
  margin-top:-1rem;
  margin-left: -1rem!important;
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
            <div class="Left_container" style="background-color: #3498db; color: white;     height: 1210px;">
                <div class="img_container">
                    <div class="img_box" style="height: 150px; width: 150px;">
                        <img src=${base64Image3} alt="dp">
                    </div>
                </div>
    
                <div class="info_box">
                    <h3 >CONTACT</h3>
                   <div class="divider"><hr ></div> 
                    <div class="contactInfo">
                        <div class="iconContainer" style="color: black;">
                        <img class="icon" src=${base64Image4} alt="dp" />
                        </div>
                        <p class="email" > ${formData.resume.contact.email}</p>
                    </div>
                    <div class="contactInfo">
                        <div class="iconContainer" style="color: black;">
                        <img class="icon" src=${base64Image5} alt="dp" />
                        </div>
                        <p class="email" > ${formData.resume.contact.phone}</p>
                    </div>
                    <div class="contactInfo">
                        <div class="iconContainer" style="color: black;">
                     
                        <img class="icon" src=${base64Image1} alt="dp" />
                 
                        </div>
                        <p class="email" > 
                        ${formData.resume.address.address},
                        ${formData.resume.address.state },
                        ${formData.resume.address.postalCode }
                        </p>
                    </div>
                </div>
    
                <div class="skillsHeader">
                    <h3 >EDUCATION</h3>
                    <div class="divider"><hr ></div> 
                    <ul class="skill-info">
                    ${formData.resume.education.map((item) => `
                    <div>
                        <h4>${item.degree}</h4>
                        <h5>${item.startYear} - ${item.endYear}</h5>
                        <p>${item.collegeName}</p>
                    </div>
                `)}
                       
                    </ul>
                </div>
    
                <div class="skill">
                    <h3 >PERSONAL SKILLS</h3>
                    <div class="skill-divider"><hr ></div> 
                    <ul class="skill-list">
                    ${formData.resume.skillsAndLevel.map((item) => `
                    <li> ${item.skills}</li>
                    `)}
                        
                    </ul>
                </div>
    
                <div class="skillsHeader">
                    <h3 >LANGUAGES</h3>
                    <div class="divider"><hr ></div> 
                    <ul>
                    ${formData.resume.knownLanguages.map((item) => `
                <li >
                <span>${item?.lang}</span>
                 </li>
            `)}
                       
                    </ul>
                </div>
            </div>
    
            <div>
                <div class="objectiveHeader">
                    <h1 class="person_name" style="color: #2980b9; font-family: 'Arial', sans-serif; ">
                    ${formData.resume.name}
                    </h1>
                    <p class="objectiveText"> ${formData.resume.jobTitle}</p>
                </div>
    
                <div class="skillsHeader2">
                    <h3>PROFILE</h3>
                    <div class="Profile-divider"><hr ></div> 
                    <p>
                    ${formData.resume.summary}
                      </p>
                </div>
    
                <div class="professionalSkillsHeader">
                    <div>
                        <h3>WORKING EXPERIENCE</h3>
                        <div class="work-divider"><hr ></div> 
                    </div>
                    <ul class="work-ul">
                    ${formData.resume.work.map((item) => `
                    <li>
                    <div class="work_des">
                    <h4 class="customerService">${item?.title}</h4>
                    <h5 class="company_name"><span>${item?.company} - ${item?.location}</span> <span>${item?.startDate} - ${item?.endDate}</span>
                    </h5>
                    <p>
                       ${item?.description}
                      </p>
                </div>
                </li>
            `)}     
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
<div className={style.main}>
      <div className={`${style.Left_container} `} style={{ height: "1210px" ,backgroundColor:color ,color:color3}}>
        <div className={style.img_container}>
          <div className={style.img_box} style={{ height: imgSize, width: imgSize }}>
            <img src={base64Image3} alt="dp" />
          </div>
        </div>

        <div className={style.info_box} >
          <h3 className={style.heading}>CONTACT</h3>
          <div className={style.divider}><hr /></div>
          <div className={style.contactInfo}>
            <div className={`${style.iconContainer} `}>
              <img className={style.icon} src={base64Image4} alt="dp" />
            </div>
            <p className={style.email} style={{color:color3}}>{formData.resume.contact.email}</p>
          </div>
          <div className={style.contactInfo}>
            <div className={`${style.iconContainer} ${style.color}`}>
              <img className={style.icon} src={base64Image5} alt="dp" />
            </div>
            <p className={style.email} style={{color:color3}}>{formData.resume.contact.phone}</p>
          </div>
          <div className={style.contactInfo}>
            <div className={`${style.iconContainer} ${style.color}`}>
              <img className={style.icon} src={base64Image1} alt="dp" />
            </div>
            <p className={style.email} style={{color:color3}}>
              {formData.resume.address.address},
              {formData.resume.address.state},
              {formData.resume.address.postalCode}
            </p>
          </div>
        </div>

        <div className={style.skillsHeader}>
          <h3 className={style.heading}>EDUCATION</h3>
          <div className={style.divider}><hr /></div>
          <ul className={style.skillInfo}>
            {formData.resume.education.map((item, index) => (
              <div key={index} className={style.edu}>
                <h4>{item.degree}</h4>
                <h5>{item.startYear} - {item.endYear}</h5>
                <p>{item.collegeName}</p>
              </div>
            ))}
          </ul>
        </div>

        <div className={style.skill}>
          <h3 className={style.heading}>PERSONAL SKILLS</h3>
          <div className={style.skillDivider}><hr /></div>
          <ul className={style.skillList}>
            {formData.resume.skillsAndLevel.map((item, index) => (
              <li key={index}>{item.skills}</li>
            ))}
          </ul>
        </div>

        <div className={style.skillsHeader}>
          <h3 className={style.heading}>LANGUAGES</h3>
          <div className={style.divider}><hr /></div>
          <ul>
            {formData.resume.knownLanguages.map((item, index) => (
              <li key={index}>
                <span>{item?.lang}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className={style.objectiveHeader}>
          <h1 className={style.person_name} style={{ fontFamily: fontStyle ,fontSize: fontSize}} >{formData.resume.name}</h1>
          <p className={style.objectiveText}>{formData.resume.jobTitle}</p>
        </div>

        <div className={style.skillsHeader2}>
          <h3 className={style.heading}>PROFILE</h3>
          <div className={style.ProfileDivider}><hr /></div>
          <p>{formData.resume.summary}</p>
        </div>

        <div className={style.professionalSkillsHeader}>
          <div>
            <h3 className={style.heading}>WORKING EXPERIENCE</h3>
            <div className={style.workDivider}><hr /></div>
          </div>
          <ul className={style.workUl}>
            {formData.resume.work.map((item, index) => (
              <li key={index}>
                <div className={style.work_des}>
                  <h4 className={style.customerService}>{item?.title}</h4>
                  <h5 className={style.company_name} style={{color:color2}}>
                    <span>{item?.company} - {item?.location}</span> <span>{item?.startDate} - {item?.endDate}</span>
                  </h5>
                  <p>{item?.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template_3;
