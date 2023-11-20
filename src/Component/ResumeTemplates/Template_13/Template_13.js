import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_13.module.css";
import dp from "../../Images/dp.png";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

const Template_13 = () => {
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
    <div  onClick={()=>setTemplateNo(12)}  className={style.main}>
      <div className={style.header}>
        <div>
          <h1 className={style.name}>{formData?.resume?.name}</h1>
          <h5 className={style.name}>{formData?.resume?.jobTitle}</h5>
        </div>
        <div>
          <div className={style.img_box}>
            <img src={dp} alt="dp" />
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.left_section}>
          <div className={style.section}>
            <h2 className={style.section_title}>
              <WorkIcon />
              EXPERIENCE
            </h2>
            <Divider className="divider" />

            <ul className={style.ul}>
              {formData?.resume?.work.map((item, id) => (
                <li>
                  <div className={style.work_entry}>
                    <p className="date">
                      {" "}
                      {handleDate(item?.startDate)} -{" "}
                      {handleDate(item?.endDate)}
                    </p>
                    <div>
                      <h3 className="position">{item?.title}</h3>
                      <p className="company">
                        {item?.company} - {item?.location}
                      </p>

                      <p className="description">{item?.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.section}>
            <h2 className={style.section_title}>
              <SchoolIcon />
              EDUCATION
            </h2>
            <Divider className="divider" />

            <ul  className={style.ul}>
              {formData?.resume?.education.map((item, id) => (
          
                  <li key={id} style={{ color: color3 }}>
                    <div className={style.work_entry}>
                      <p className="date">
                        {item?.startYear} - {item.endYear}
                      </p>
                      <div>
                        <h3 className="degree">{item.degree}</h3>

                        <p className="university">{item.collegeName}</p>
                      </div>
                    </div>
                  </li>
           
              ))}
            </ul>
          </div>
        </div>
        <div className={style.right_section}>
          <div className="section">
            <h2 className="section-title">ABOUT ME</h2>
            <Divider className="divider" />
            <p className="section-content">
            {formData?.resume?.summary}
            </p>
          </div>
          <br />
          <h2 className="section-title">CONTACTS</h2>
          <Divider className="divider" />
          <div className={style.contact_info}>
            <div className={style.contact_value}>
              <span className={style.contact_label}>
                <LocalPhoneIcon sx={{ fontSize: "20px" }} />
              </span>
              <p className="contact-value"> {formData?.resume?.contact?.phone}</p>
            </div>
            <div className={style.contact_value}>
              <span className={style.contact_label}>
                <EmailIcon sx={{ fontSize: "20px" }} />
              </span>
              <p className="contact-value">  {formData?.resume?.contact?.email}</p>
            </div>

            <div className={style.contact_value}>
              <span className={style.contact_label}>
                <LinkedInIcon sx={{ fontSize: "20px" }} />
              </span>
              <p className="contact-value">{formData?.resume?.socialLinks?.linkedin }</p>
            </div>
            <div className={style.contact_value}>
              <span className={style.contact_label}>
                <PlaceIcon sx={{ fontSize: "20px" }} />
              </span>
              <p className="contact-value"> {formData?.resume?.address?.address},
              {formData?.resume?.address?.postalCode}</p>
            </div>
          </div>

          <br />

          <div className="section">
            <h2 className="section-title">SKILLS</h2>
            <Divider className="divider" />
            <ul >
         
            {formData?.resume?.skillsAndLevel.map((item, id) => (
              <li>
                <h4>{item?.skills}</h4>
              </li>
            ))}
            
            </ul>
          </div>
          <br />
          <div className="section">
            <h2 className="section-title">LANGUAGE</h2>
            <Divider className="divider" />
            <ul>
            {formData?.resume?.knownLanguages.map((item, id) => (
              <li>
                <h4>{item?.lang}</h4>
                </li>
            ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Template_13;
