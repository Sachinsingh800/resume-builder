import React from "react";
import style from "./Template_28.module.css";
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

const Template_28 = () => {
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
    <div onClick={() => setTemplateNo(27)} className={style.main}>
      <div
        className={style.Left_container}
        style={{ backgroundColor: "	#D3D3D3", color: "white" }}
      >
        <div className={style.img_container}>
           <div >
           <h6
            className={style.person_name}
            style={{ fontFamily: fontStyle, fontSize: fontSize }}
          >
            {formData?.resume?.name}
          </h6>
          <p className={style.objectiveText}> {formData?.resume?.jobTitle}</p>
           </div>
           <div >
          <div className={style.contactInfo}>
            <p className={style.email} style={{ color: "white" }}>
              <AiOutlineMail />&nbsp; 
              {formData?.resume?.contact?.email}
            </p>
          </div>
          <div className={style.contactInfo}>
            <p style={{  color: "white" }} className={style.email}>
              <AiOutlinePhone/>&nbsp; 
              {formData?.resume?.contact?.phone}
            </p>
          </div>

          <div className={style.contactInfo}>
            <p className={style.email} style={{  color: "white"}}>
              < CiLocationOn/>&nbsp; 
              {formData?.resume?.address?.address},
              {formData?.resume?.address?.postalCode}
            </p>
          </div>
        </div>
        </div>

        <br/>
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
        
  
         <br/>
        <div className={style.skillsHeader2}>
          <div
            className={style.title_box2}
            style={{
              fontFamily: fontStyle,
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

export default Template_28;
