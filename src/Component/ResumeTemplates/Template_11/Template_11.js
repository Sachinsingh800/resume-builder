import React from "react";
import style from "./Template_11.module.css";
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

const Template_11 = () => {
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
    <div onClick={() => setTemplateNo(10)} className={style.main}>
      <div
        className={style.Left_container}
        style={{ backgroundColor: color, color: "white" }}
      >
        <div className={style.objectiveHeader}>
          <h1
            className={style.person_name}
            style={{ color: color2, fontFamily: fontStyle, fontSize: fontSize }}
          >
            {formData?.resume?.name}
          </h1>
          <p className={style.objectiveText}> {formData?.resume?.jobTitle}</p>
        </div>

        <br />

        <div className={style.info_box}>
          <h3 style={{ color: color3 }}>Personal info</h3>

          <div className={style.contactInfo}>
            <label>E-mail</label>
            <p className={style.email} style={{ color: color3 }}>
              {formData?.resume?.contact?.email}
            </p>
          </div>
          <div className={style.contactInfo}>
            <label>Phone</label>
            <p style={{ color: color3 }} className={style.email}>
              {formData?.resume?.contact?.phone}
            </p>
          </div>

          <div className={style.contactInfo}>
            <label>Address</label>
            <p className={style.email} style={{ color: color3 }}>
              {formData?.resume?.address?.address},
              {formData?.resume?.address?.postalCode}
            </p>
          </div>
        </div>
        <br />

        <div className={style.skillsHeader}>
          <h3 style={{ color: color3 }}>Additional Skills</h3>

          <ul>
            {formData?.resume?.skillsAndLevel.map((item, id) => (
              <li key={id} style={{ color: color3 }}>
                <span>{item.skills}</span>
                <p className={style.ProgressBar}>
                  {" "}
                  <ProgressBar bgcolor="orange" height={5} />
                </p>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className={style.skillsHeader}>
          <h3 style={{ color: color3 }}>LAGNUAGES</h3>

          <ul>
            {formData?.resume?.knownLanguages.map((item, id) => (
              <li key={id} style={{ color: color3 }}>
                <span>{item.lang}</span>
                <p className={style.ProgressBar}>
                  {" "}
                  <ProgressBar bgcolor="orange" height={5} />{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className={style.skillsHeader2}>
          <h2>Skills Summary</h2>

          <p>{formData?.resume?.summary}</p>
        </div>

        <div className={style.professionalSkillsHeader}>
          <div>
            <h2>EXPERIENCE</h2>
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
        <div className={style.skillsHeader2}>
          <h2 style={{ color: color3 }}>Education</h2>

          <ul className={style.education}>
            {formData?.resume?.education.map((item, id) => (
              <li key={id} style={{ color: color3 }}>
                <h4>{item.degree}</h4>
                <span>
                  {item?.startYear} - {item.endYear}
                </span>
                <span>{item.collegeName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template_11;
