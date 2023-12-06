import React, { useState,useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png"
import linkedin from "../../Images/linkedin.png"
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

const Template_25 = () => {
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
  
  useEffect(() => {
    const imageLocations = [
      location,
      linkedin,
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
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f0f0;
             box-sizing: border-box;
        }
    
        .main {
            width: 794px ;
            height: 1130px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    
        .header {
          background-color: #333;
          color: white;
          padding: 20px;
          text-align: center;
          // border:1px red solid;
        }
    
        .name_box {
          text-align: center;
        }
    
        .name {
          color: white;
        }
    
        .container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          padding: 20px;
          // border:1px red solid;
        }
        .section {
          margin-bottom: 20px;
          // border:1px red solid;
        }
    
        .section_title {
          position: relative;
          font-size: 1.5em;
          margin-bottom: 10px;
        }
    
        .section_title span {
          font-size: 1.2em;
          margin-right: 5px;
        }
    
        .divider {
          border: 1px solid #333;
          margin: 5px 0;
        }
    
        .skills_list,
        .ul {
          list-style: none;
          padding: 0;
        }
    
        .skills_list li,
        .ul li {
          margin-bottom: 5px;
        }
    
        .ul .work_entry {
          margin-bottom: 10px;
        }
    
        .ul .title_ {
          display: flex;
          justify-content: space-between;
        }
    
        .ul .position,
        .ul .degree {
          margin: 0;
        }
    
        .university,
        .company,
        .date,
        .description {
          margin: 0;
        }
    
        .section-content {
          line-height: 1.6;
        }
    
        .contact_info,
        .work_entry,
        .contact_value {
      
          align-items: center;
        }
    
        .contact_label {
          margin-right: 10px;
          display: flex;
          align-items: center;
          gap: .5rem;
          padding:.5rem .5rem .5rem 0rem  ;
        }
    
        .contact-value {
          margin: 0;
 
        }
        .left_section{
          // border:1px red solid;
          width:30rem;
        }
        .img_box {
  height:1rem;
  width:1rem;
        }
        .img_box  img{
          height:1rem;
          width:1rem;
        }
        
      </style>
    </head>
    
    <body>
    
      <div class="main">
          <div class="header">
             <div class="name_box">
                 <h1 class="name">${formData.resume.name}</h1>
                       <h4> ${formData.resume.jobTitle}</h4>
          </div>
        </div>
    
        <div class="container">
          <div class="left_section">
            <div class="section">
                <h3 class="section_title">
                    ABOUT
                </h3>
                <hr class="divider">
                <p class="section-content">
                ${formData.resume.summary}
                </p>
            </div>

              <div class="section">
                   <h3 class="section_title">
                    EXPERIENCE
                    </h3>
                    <hr class="divider">
                      <ul class="ul">
                      ${formData.resume.work.map((item) => `
           
                  <li>
                  <div class="work_entry">
                      <div>
                          <div class="title_">
                              <h4 class="position">${item?.title}</h4>
                              <p class="date">${item?.startDate} - ${item?.endDate}</p>
                          </div>

                          <p class="company">${item?.company} - ${item?.location}</p>
                          <p class="description">
                          ${item?.description}
                          </p>
                      </div>
                  </div>
              </li>
                  `)}   
                  
                </ul>
            </div>
              <div class="section">
                   <h3 class="section_title">
                    PROJECTS
                    </h3>
                    <hr class="divider">
                      <ul class="ul">
                      ${formData.resume.projects.map((item) => `
                  
                  <li>
                  <div class="work_entry">
                      <div>
                          <div class="title_">
                              <h4 class="position">${item?.title}</h4>
                              <p class="date">${item?.year}</p>
                          </div>

                          <p class="company">${item?.link} </p>
                          <p class="description">
                          ${item?.description}
                          </p>
                      </div>
                  </div>
              </li>
                      `)}  
                   
                </ul>
            </div>

            <div class="section">
                <h3 class="section_title">
                   EDUCATION
                </h3>
                <hr class="divider">
                <ul class="ul">
                ${formData.resume.education.map((item) => `

                <li>
                <div class="work_entry">
                    <p class="date">${item.startYear} - ${item.endYear}</p>
                    <div>
                        <h3 class="degree">${item.degree}</h3>
                        <p class="university">${item.collegeName}</p>
                    </div>
                </div>
            </li>
                `)}
                  
                </ul>
            </div>
        </div>
        <div class="right_section">
  
        <div class="contact_info">
            <h3 class="section_title">Contact</h3>
            <hr class="divider">
            <div class="contact_value">
                <span class="contact_label">
                    <span style="font-size:20px">&#9990;</span>
                    <p class="contact-value">${formData.resume.contact.phone}</p>
                </span>
          
            </div>
            <div class="contact_value">
                <span class="contact_label">
                    <span style="font-size:20px">&#9993;</span>
                    <p class="contact-value">${formData.resume.contact.email}</p>
                </span>
              
            </div>
            <div class="contact_value">
                <span class="contact_label">
                <span style="font-size:20px"  class="img_box"><img src=${base64Image2} /></span>
                <p class="contact-value">${formData.resume.socialLinks.linkedin}</p>
                </span>
         
            </div>
            <div class="contact_value">
                <span class="contact_label">
                    <span style="font-size:20px"  class="img_box"><img src=${base64Image1} /></span>
                    <p class="contact-value">
                    ${formData.resume.address.address},
                    ${formData.resume.address.state },
                    ${formData.resume.address.postalCode }
                    </p>
                </span>
               
            </div>
        </div>

        <div class="section">
            <h3 class="section_title">SKILLS</h3>
            <hr class="divider">
            <ul class="skills_list">
            ${formData.resume.skillsAndLevel.map((item) => `
            <li> ${item.skills}</li>
            `)}
            </ul>
        </div>

        <br>

        <div class="section">
            <h3 class="section_title">LANGUAGE</h3>
            <hr class="divider">
            <ul class="skills_list">
            ${formData.resume.knownLanguages.map((item) => `
            <li>
            ${item?.lang}
          </li>
       `)}
            </ul>
        </div>

        <br>

        <div class="section">
            <h3 class="section_title">AWARDS</h3>
            <hr class="divider">
            <ul class="skills_list">
            ${formData.resume.awards.map((item) => `
            <li class="award-list">
                   <h5>${item?.date}</h5>
                   <h4>${item?.title}</h4>
                   <p>${item?.issuingOrganization}</p>
               </li>
       `)}  
            </ul>
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

export default Template_25;
