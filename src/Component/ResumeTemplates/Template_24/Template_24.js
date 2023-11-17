import React from "react";
import style from "./Template_24.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import dp from "../../Images/dp.png";
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

const Template_24 = () => {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [color3, setColor3] = useRecoilState(ChooseColorThird);
  const [fontStyle, setFontStyle] = useRecoilState(fontState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const [imgSize, setImgSize] = useRecoilState(imageSizeState);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  const [formData, setFormData] = useRecoilState(resumeData);

  console.log(formData.resume, "resume data");

  const handleDate = (data) => {
    console.log(data, "data");

    const startYear = new Date(data).getFullYear();

    return startYear;
  };
  return (
    <div onClick={() => setTemplateNo(5)} className={style.main}>
      <div
        className={style.Left_container}
        style={{ backgroundColor: color, color: "white" }}
      >
        <d7iv className={style.img_container}>
          <div
            className={style.img_box}
            style={{ height: imgSize, width: imgSize }}
          >
            {croppedImage ? (
              <img src={croppedImage} alt="dp" />
            ) : (
              <img src={formData?.resume?.profilePicture?.url} alt="dp" />
            )}
          </div>
        </d7iv>
        <br />
        <div className={style.skillsHeader}>
      
            <h3 style={{ color: color3 }}>EDUCATION</h3>
     

          <ul>
            {formData?.resume?.education.map((item, id) => (
              <li key={id} style={{ color: color3 }}>
                <span>
                  {item.degree}{" "}
                  <span>
                    {item?.startYear} - {item.endYear}
                  </span>
                </span>
                <span>{item.collegeName}</span>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className={style.skillsHeader}>
  
            <h3 style={{ color: color3 }}>CONTACT</h3>
   

          <div className={style.contactInfo}>
            <p className={style.email} style={{ color: color3 }}>
              {formData?.resume?.contact?.email}
            </p>
          </div>
          <div className={style.contactInfo}>
            <p style={{ color: color3 }} className={style.email}>
              {formData?.resume?.contact?.phone}
            </p>
          </div>

          <div className={style.contactInfo}>
            <p className={style.email} style={{ color: color3 }}>
              {formData?.resume?.address?.address},
              {formData?.resume?.address?.postalCode}
            </p>
          </div>
        </div>

        <br />

        <div className={style.skillsHeader}>
       
            <h3 style={{ color: color3 }}>REFERENCES</h3>
     

          <ul>
            {formData?.resume?.references.map((item, id) => (
              <li key={id} style={{ color: color3 }}>
                <h4>{item.name}</h4>
                <span>
                  {item.position} | {item.company}
                </span>
                <span>{item.phone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        
        <div
          className={style.objectiveHeader}
          style={{ backgroundColor: color2 }}
        >
                 
          <h1
            className={style.person_name}
            style={{ fontFamily: fontStyle, fontSize: fontSize }}
          >
            {formData?.resume?.name}
          </h1>
          <p className={style.objectiveText}> {formData?.resume?.jobTitle}</p>
        </div>

        <div className={style.skillsHeader2}>
          <div
            className={style.title_box2}
            style={{
              fontFamily: fontStyle,
              backgroundColor: color2,
            }}
          >
            <h3>About Me</h3>
          </div>

          <p>{formData?.resume?.summary}</p>
        </div>

        <div className={style.professionalSkillsHeader}>
          <div
            className={style.title_box2}
            style={{
              fontFamily: fontStyle,
              backgroundColor: color2,
            }}
          >
        
            <h3>WORKING EXPERIENCE</h3>
          </div>

          <ul>
            {formData?.resume?.work.map((item, id) => (
              <li>
                <div className={style.work_des}>
                  <h3 className={style.customerService}>{item?.title}</h3>
                  <h5 className={style.company_name}>
                    <span>
                      {item?.company} - {item?.location}
                    </span>{" "}
                    <span>
                      {handleDate(item?.startDate)} -{" "}
                      {handleDate(item?.endDate)}
                    </span>
                  </h5>
                  <p>{item?.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className={style.professionalSkillsHeader}>
          <div
            className={style.title_box2}
            style={{
              fontFamily: fontStyle,
              backgroundColor: color2,
            }}
          >
          
            <h3>SOFTWARE SKILL</h3>
          </div>

          <ul className={style.skillsAndLevel}>
            {formData?.resume?.skillsAndLevel.map((item, id) => (
              <li>
                <span>{item.skills}</span>
                <span>
                  <ProgressBar bgcolor="orange" progress="40" height={4} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template_24;
