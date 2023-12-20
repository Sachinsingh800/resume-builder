import React, { useState, useEffect } from "react";
import axios from "axios";
import location from "../../Images/location-pin.png";
import linkedin from "../../Images/linkedin.png";
import mail from "../../Images/mail.png";
import call from "../../Images/call.png";
import dp from "../../Images/dp2.jpg";
import { Divider } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { jobApplicationState } from "../../../Recoil";
import styles from "./CoverLetter1.module.css";
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
import downloadimg from "../../Images/download.gif";
import downloadpdf from "../../Images/pdf-download-2617.svg";
import downloaddoc from "../../Images/google-docs-icon-2.svg";
import downloadtext from "../../Images/icons8-text-500.svg";
import Fonts from "../../Fonts/Fonts";
import FontPicker from "../../FontPicker/FontPicker";
import FontSizePicker from "../../FontSizePicker/FontSizePicker";
import ColorPlate from "../../ColorPlate/ColorPlate";
import ColorPlate2 from "../../ColorPlate2/ColorPlate2";

const CoverLetter1 = () => {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [color3, setColor3] = useRecoilState(ChooseColorThird);
  const [fontStyle, setFontStyle] = useRecoilState(fontState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const [imgSize, setImgSize] = useRecoilState(imageSizeState);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  const [formData, setFormData] = useRecoilState(jobApplicationState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [base64Image1, setBase64Image1] = useState("");
  const [base64Image2, setBase64Image2] = useState("");
  const [base64Image3, setBase64Image3] = useState("");
  const [base64Image4, setBase64Image4] = useState("");
  const [base64Image5, setBase64Image5] = useState("");
  const [base64Image6, setBase64Image6] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(formData.resume, "resume data");

  function formatDate(inputDate) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  }

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
          } else if (index === 2) {
            setBase64Image3(base64String);
          } else if (index === 3) {
            setBase64Image4(base64String);
          } else if (index === 4) {
            setBase64Image5(base64String);
          } else if (index === 5) {
            setBase64Image6(base64String);
          }
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    handleImageChange();
  }, []);

  const getCSS = () => {
    return `
    body {
      font-family: 'Readex Pro', sans-serif;
      margin: 0;
      padding: 0;
      color: black;
      width: 850px;
    }
  
    #header {
      width: 100%;
      height:6rem;
      background-color: #003D74;
      padding: 10px 0 0 10px;
      display: flex;
      flex-direction: column;
     justify-content: center;
    }
  
    #header h1 {
      color: white;
      text-decoration: none;
      font-weight: 600;
      margin: 0;
    }
  
    #header p {
      color: white;
      font-weight: 300;
      margin: 0;
    }
  
    #main-content {
      display: flex;
      margin: 0;
      padding: 0;
    }
  
    #left-column {
      width: 65%;
      background-color: white;
      padding: 10px;
    }
  
    #left-column h2,
    #left-column p,
    #left-column .letter-body {
      cursor: pointer;
    }
  
    #right-column {
      width: 35%;
      background-color: #F4F4F4;
      padding: 10px;
      height: 987px;
      margin-right: -10px;
    }
  
    #right-column h2 {
      color: #003D74;
      font-size: 15px;
      font-weight: 600;
    }
  
    #right-column hr {
      border: 0.5px solid #000000;
    }
  
    #personal-info p {
      font-weight: 600;
    }
    `;
  };

  const getHTML = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Title</title>

</head>
<body>
  <div id="header" style="background-color:${color}; color:${color3};">
    <h1  style="color: ${color3}; font-family: ${fontStyle}; font-size:${fontSize}px;">
    ${formData.nameAndContact.firstName} ${formData.nameAndContact.lastName}
    </h1>
    <p style="color: ${color3}; ">${formData.nameAndContact.profession} </p>
  </div>

  <div id="main-content">
    <div id="left-column">
      <h2>${formatDate(formData.date)}</h2>
      <br/>
      <p >
      ${formData.nameAndContact.firstName} ${formData.nameAndContact.lastName}
      </p>
      <p>
      ${formData.nameAndContact.city},${formData.nameAndContact.state},
      ${formData.nameAndContact.zip}</p>
      <p>  Dear  ${formData.recipient.firstName } ${formData.recipient.lastName} </p>
      <br />
      <div class="letter-body">
      <p>${formData.subject}</p>
      <br />
      <p>${formData.greeting}</p>
      <br />
      <p>${formData.opening}</p>
      <p>${formData.letterBody}</p>
      <p>${formData.callToAction}</p>
      <br />
      <p>${formData.closing}</p>
      </div>
      <br/>
      <p> ${formData.recipient.companyName}</p>
      <p>
        ${formData.recipient.city},${formData.recipient.state},
        ${formData.recipient.zip}
      </p>
      <p> ${formData.recipient.email}</p>
      <p> ${formData.recipient.phoneNumber}</p>
    </div>

    <div id="right-column" style="background-color:${color2}; ">
      <h2>Personal Info</h2>
      <hr>
      <div id="personal-info">
      <p>
      ${formData.nameAndContact.city},${formData.nameAndContact.state},
     ${formData.nameAndContact.zip}
    </p>
    <p>${formData.nameAndContact.email}</p>
    <p>+91 ${formData.nameAndContact.phoneNumber}</p>
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
        "http://3.144.48.243/api/convert",
        {
          html: getHTML(),
          cssStyles: getCSS(), // Include your CSS data here
        },
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

  const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {loading ? (
            <div className={styles.down_img_box}>
              <img src={downloadimg} alt="downloading" />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          ) : (
            <div className={styles.download_box}>
              <button className={styles.closeButton} onClick={onClose}>
                Close
              </button>
              <div className={styles.down_btn_box}>
                <div onClick={handleResume} className={styles.icon_download}>
                  <img src={downloadpdf} alt="pdf" />
                  PDF
                </div>
                <div onClick={handleResume} className={styles.icon_download}>
                  <img src={downloaddoc} alt="doc" /> DOC
                </div>
                <div onClick={handleResume} className={styles.icon_download}>
                  <img src={downloadtext} alt="text" />
                  TEXT
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const handleDownloadClick = () => {
    // Handle the download logic
    // For now, let's just open the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.download_btn}>
        <button onClick={handleDownloadClick}>Download</button>
               <FontPicker />
                <FontSizePicker/>
                <ColorPlate2 />
        <ResumeModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>

      <br />
      <br />
      <br />
      <div className={styles.main}>
        <div className={styles.header}  style={{ backgroundColor: color, color: color3 }}>
          <h1 style={{ color: color3, fontFamily: fontStyle ,fontSize: fontSize}}>
            {formData.nameAndContact.firstName}
            {formData.nameAndContact.lastName}
          </h1>
          <p style={{color:color3}}>{formData.nameAndContact.profession}</p>
        </div>

        <div className={styles.main_content}>
          <div className={styles.left_column}>
            <h2>{formatDate(formData.date)}</h2>
            <br />
            <p>
              {formData.nameAndContact.firstName}
              {formData.nameAndContact.lastName}
            </p>
            <p>
              {formData.nameAndContact.city},{formData.nameAndContact.state},
              {formData.nameAndContact.zip}
            </p>
            <p>
              Dear {formData.recipient.firstName} {formData.recipient.lastName}
            </p>
            <br />
            <div className={styles.letter_body}>
              <p>{formData.subject}</p>
              <br />
              <p>{formData.greeting}</p>
              <br />
              <p>{formData.opening}</p>
              <p>{formData.letterBody}</p>
              <p>{formData.callToAction}</p>
              <br />
              <p>{formData.closing}</p>
            </div>

            <br />

            <p> {formData.recipient.companyName}</p>
            <p>
              {formData.recipient.city},{formData.recipient.state},
              {formData.recipient.zip}
            </p>
            <p> {formData.recipient.email}</p>
            <p> {formData.recipient.phoneNumber}</p>
          </div>

          <div className={styles.right_column} style={{ backgroundColor: color2 }}>
            <h2>Personal Info</h2>
            <hr />
            <div className={styles.personal_Info}>
              <p>
                {formData.nameAndContact.city},{formData.nameAndContact.state},
                {formData.nameAndContact.zip}
              </p>
              <p> {formData.nameAndContact.email}</p>
              <p>+91 {formData.nameAndContact.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverLetter1;
