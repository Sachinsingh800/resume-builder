import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_14.module.css";
import dp from "../../Images/dp.png";
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

const Template_14 = () => {
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
    <div  onClick={()=>setTemplateNo(13)}  className={style.main}>
      <div className={style.user_header}>
        <div className={style.image_box}>
          <div className={style.img_box}>
            <img src={dp} alt="dp" />
          </div>
          <div className={style.profession_box}>
            <h5 className={style.name}>{formData?.resume?.jobTitle}</h5>
          </div>
        </div>
        <div className={style.name_box}>
          <h2 className={style.name}>{formData?.resume?.name}</h2>
          <p className="section-content">
          {formData?.resume?.summary}
          </p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.right_section}>
          <br />
          <div className={style.contact_info}>
            <div className={style.contact_value}>
              <span className={style.contact_label}>
                <LocalPhoneIcon sx={{ fontSize: "20px" }} />
              </span>
              <p className="contact-value">{formData?.resume?.contact?.phone}</p>
            </div>
            <div className={style.contact_value}>
              <span className={style.contact_label}>
                <EmailIcon sx={{ fontSize: "20px" }} />
              </span>
              <p className="contact-value"> {formData?.resume?.contact?.email}</p>
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

          <div className={style.section}>
            <h2 className="section-title">SKILLS</h2>
            <ul  className={style.skills_list}>
         
         {formData?.resume?.skillsAndLevel.map((item, id) => (
           <li>
             <span>{item?.skills}</span>
                <span className={style.ProgressBar_list}>
                  <ProgressBar bgcolor="black" progress={40} height={5} />
                </span>
           </li>
         ))}
         
         </ul>
           
          </div>

          <div className={style.section}>
            <h2 className="section-title">LANGUAGE</h2>

            <ul className={style.skills_list}>
       
            {formData?.resume?.knownLanguages.map((item, id) => (
              <li>
                <h4>{item?.lang}</h4>
                </li>
            ))}
      
            </ul>
          </div>

          <div className={style.section}>
            <h2 className="section-title">AWARDS</h2>

            <ul >
          
            {formData?.resume?.awards.map((item, id) => (
              <li>
                <h5>{item?.date}</h5>
                <h4>{item?.title}</h4>
                <p>{item?.issuingOrganization}</p>
                </li>
            ))}
       
            </ul>
          </div>
        </div>
        <div className={style.left_section}>
          <div className={style.section}>
            <h2 className={style.section_title}>PROFESSIONAL EXPERIENCE</h2>
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

          <div className={style.sections}>
            <h2 >EDUCATION</h2>
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
      </div>
    </div>
  );
};

export default Template_14;
