import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useRecoilState,
} from 'recoil';
import {
  ChooseColor,
  ChooseColorSecond,
  ChooseColorThird,
  chooseTemplates,
  croppedImageState,
  fontState,
  fontSizeState,
  imageSizeState,
  resumeData,
} from '../../Recoil';
import dp from "../Images/dp2.jpg";

function HtmlToPdf() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [color3, setColor3] = useRecoilState(ChooseColorThird);
  const [fontStyle, setFontStyle] = useRecoilState(fontState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const [imgSize, setImgSize] = useRecoilState(imageSizeState);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [formData, setFormData] = useRecoilState(resumeData);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  const [base64Image, setBase64Image] = useState('');

  useEffect(() => {
    const handleImageChange = async () => {
      try {
        const response = await fetch(dp);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          // The result property contains the base64-encoded string
          const base64String = reader.result;
          setBase64Image(base64String);
        };

        // Read the image file as a data URL
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error loading image:', error);
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
          <title>Your Page Title</title>
          <style>
              body {
                  margin: 0;
                  padding: 0;
              }
      
              .main {
                  display: flex;
                  flex-direction: column;
                  width: 21cm;
                  height: 29.7cm;
                  margin: 0 auto;
                  background-color: white;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
              }
      
              .container {
                  display: grid;
                  grid-template-columns: 1fr 2fr;
              }
      
              .img_box {
                  height: 7rem;
                  width: 7rem;
                  overflow: hidden;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50%;
              }
      
              .img_box img {
                  height: 100%;
                  width: 100%;
              }
      
              .left_section {
                  display: flex;
                  flex-direction: column;
                  padding: 2rem 1rem;
                  gap: 2rem;
                  text-align: left;
              }
      
              .info_box {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                  padding: 1rem 1rem;
              }
      
              .education {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                  padding: 1rem 1rem;
              }
      
              .img_container {
                  display: flex;
                  align-items: center;
                  justify-content: center;
              }
      
              .right_section {
                  display: flex;
                  flex-direction: column;
                  gap: .5rem;
                  width: 15rem;
                  padding: 2rem 1rem;
                  height: 28.7cm;
                  margin-left: 1rem;
                  margin-top: -13rem;
                  background-color: rgb(178, 176, 181);
              }
      
              .right_section p {
                  width: 95%!important;
                  display: flex;
                  flex-direction: column;
                  text-align: left;
                  list-style: none;
              }
      
              .right_section ul li {
                  margin-left: 1.5rem;
              }
      
              .right_section ul li {
                  width: 95%!important;
              }
      
              .work_history {
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
              }
      
              .heading {
                  padding: 3rem 1rem;
              }
      
              .certifications {
                  padding: 1rem;
                  display: flex;
                  flex-direction: column;
                  gap: .5rem;
              }
      
              .skills {
                  padding: 1rem;
                  display: flex;
                  flex-direction: column;
                  gap: .5rem;
              }
      
              .skills ul {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 1rem;
              }
      
              .professional_summary {
                  padding: 1rem;
                  display: flex;
                  flex-direction: column;
                  gap: .5rem;
              }
      
              .work {
                  padding: 1rem;
                  display: flex;
                  flex-direction: column;
                  gap: .5rem;
              }
      
              hr {
                  margin-left: 1rem;
              }
      
              .info_box p {
                  display: flex;
                  gap: .5rem;
                  align-items: center;
              }
      
              .certifications ul {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 1rem;
              }
      
              .header {
                  height: 15rem;
                  display: flex;
                  align-items: center;
                  justify-content: end;
                  padding: 0rem 1rem;
                  background-color: grey;
              }
      
              .img_box {
                  border-radius: 0;
                  width: 12.5rem;
                  height: 12rem;
                  margin-top: -1rem;
                  background-color: rgb(31, 0, 110);
                  overflow: hidden;
                  background-color: white;
              }
      
              .img_box img {
                  height: 100%;
                  width: 100%;
              }
      
              .section {
                  display: flex;
                  flex-direction: column;
                  gap: .5rem;
              }
      
              .work_entry {
                  display: grid;
                  grid-template-columns: 1fr;
              }
      
              .title_ {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 90%;
              }
      
              .section_title {
                  display: flex;
                  align-items: center;
                  gap: 2.7rem;
                  color: black!important;
              }
      
              .description {
                  width: 25rem;
              }
      
              .contact_value {
                  display: flex;
                  align-items: center;
                  gap: .3rem;
              }
      
              .contact_label {
                  font-size: small;
              }
      
              .contact_info {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: .5rem;
              }
      
              .skills_list {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: .5rem;
                  list-style: none;
                  padding-top: 1rem;
              }
      
              .skills_list li {
                  display: flex;
                  align-items: center;
              }
      
              .ul {
                  display: flex;
                  flex-direction: column;
                  gap: .5rem;
                  list-style: none;
              }
      
              .section_title {
                  padding: 0rem 1rem;
                  color: white;
                  display: flex;
                  gap: .5rem;
              }
      
              .name {
                  font-size: 4rem;
              }
      
              .name_box {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 70%;
                  color: white;
              }
          </style>
      </head>
      
      <body>
          <div onclick="setTemplateNo(22)" class="main">
              <div class="header">
                  <div class="name_box">
                      <h1 class="name">JESSICA CLAIRE</h1>
                      <h4>frontend Developer</h4>
                  </div>
              </div>
      
              <div class="container">
                  <div class="right_section">
                      <div class="img_box">
                          <img src="${base64Image}" alt="dp">
                      </div>
      
                      <div class="contact_info">
                          <h2 class="section_title">Contact</h2>
                          <hr class="divider">
                          <div class="contact_value">
                              <span class="contact_label">
                                  <span style="font-size:20px">📞</span>
                              </span>
                              <p class="contact-value">+91 9503942697</p>
                          </div>
                          <div class="contact_value">
                              <span class="contact_label">
                                  <span style="font-size:20px">✉️</span>
                              </span>
                              <p class="contact-value">ss20010126@gmail.com</p>
                          </div>
                          <div class="contact_value">
                              <span class="contact_label">
                                  <span style="font-size:20px">🔗</span>
                              </span>
                              <p class="contact-value">linkedin.com/en/5hubzzz</p>
                          </div>
                          <div class="contact_value">
                              <span class="contact_label">
                                  <span style="font-size:20px">📍</span>
                              </span>
                              <p class="contact-value">Enter Your Address here</p>
                          </div>
                      </div>
      
                      <div class="section">
                          <h2 class="section_title">SKILLS</h2>
                          <hr class="divider">
                          <ul class="skills_list">
                              <li>javascript</li>
                              <li>javascript</li>
                              <li>javascript</li>
                              <li>javascript</li>
                              <li>javascript</li>
                              <li>javascript</li>
                              <li>javascript</li>
                          </ul>
                      </div>
      
                      <br>
      
                      <div class="section">
                          <h2 class="section_title">LANGUAGE</h2>
                          <hr class="divider">
                          <ul class="skills_list">
                              <li>Hindi</li>
                              <li>English</li>
                              <li>Urdu</li>
                          </ul>
                      </div>
      
                      <br>
      
                      <div class="section">
                          <h2 class="section_title">INTEREST</h2>
                          <hr class="divider">
                          <ul class="skills_list">
                              <li>Hindi</li>
                              <li>English</li>
                              <li>Urdu</li>
                          </ul>
                      </div>
                  </div>
      
                  <div class="left_section">
                      <div class="section">
                          <h2 class="section_title">
                              <span>👤</span> ABOUT
                          </h2>
                          <hr class="divider">
                          <p class="section-content">
                              Lorem Ipsum is simply dummy text of scrambled it to make a ty It was popularised in the 1960s
                              with the release of Letraset sheets containing Lorem Ipsum passages, and more.
                          </p>
                      </div>
      
                      <div class="section">
                          <h2 class="section_title">
                              <span>💼</span> EXPERIENCE
                          </h2>
                          <hr class="divider">
                          <ul class="ul">
                              <li>
                                  <div class="work_entry">
                                      <div>
                                          <div class="title_">
                                              <h3 class="position">Software Engineer </h3>
                                              <p class="date">2019.08 - Present</p>
                                          </div>
      
                                          <p class="company">ABC Company</p>
                                          <p class="description">
                                              Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                                              including versions of Lorem Ipsum.
                                          </p>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="work_entry">
                                      <div>
                                          <div class="title_">
                                              <h3 class="position">Software Engineer </h3>
                                              <p class="date">2019.08 - Present</p>
                                          </div>
      
                                          <p class="company">ABC Company</p>
                                          <p class="description">
                                              Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and Aldus PageMaker
                                              including versions of Lorem Ipsum.
                                          </p>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
      
                      <div class="section">
                          <h2 class="section_title">
                              <span>🎓</span> EDUCATION
                          </h2>
                          <hr class="divider">
                          <ul class="ul">
                              <li>
                                  <div class="work_entry">
                                      <div class="title_">
                                          <h3 class="degree">Masters in Data Science</h3>
                                          <p class="date">2019.08 - 2023.09</p>
                                      </div>
      
                                      <div>
                                          <p class="university">ABC College</p>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="work_entry">
                                      <div class="title_">
                                          <h3 class="degree">Masters in Data Science</h3>
                                          <p class="date">2019.08 - 2023.09</p>
                                      </div>
      
                                      <div>
                                          <p class="university">ABC College</p>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="work_entry">
                                      <div class="title_">
                                          <h3 class="degree">Masters in Data Science</h3>
                                          <p class="date">2019.08 - 2023.09</p>
                                      </div>
      
                                      <div>
                                          <p class="university">ABC College</p>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </body>
      
      </html>
    `;
  };

  let data = {
    htmlContent: getHTML(),
  };

  const handleResume = async () => {
    setLoading(true);
    setError('');

    const axiosConfig = {
      responseType: 'arraybuffer',
      headers: {
        Accept: 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'https://whihtmltopdf.onrender.com/convertToPdf',
        data,
        axiosConfig
      );

      setLoading(false);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'receipt.pdf');
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
      <div dangerouslySetInnerHTML={{ __html: getHTML() }} />
    </div>
  );
}

export default HtmlToPdf;
