import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_12.module.css";
import { useRecoilState } from "recoil";
import { 
  ChooseColor,
  chooseTemplates,
  ChooseColorSecond,
  croppedImageState ,
  resumeData, 
  ChooseColorThird,
  fontState,
  fontSizeState,
  imageSizeState
} from "../../../Recoil";

const Template_12 = () => {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [color3, setColor3] = useRecoilState(ChooseColorThird);
  const [fontStyle, setFontStyle] = useRecoilState(fontState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const [imgSize, setImgSize] = useRecoilState(imageSizeState);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  const [formData, setFormData] = useRecoilState(resumeData);

  console.log(formData.resume,"resume data")

  const handleDate = (data) => {
    console.log(data,"data")
   

    const startYear = new Date(data).getFullYear();
  
    return startYear
  };
  return (
    <div className={style.main}>
      <div className={style.header}>
        <h1 className={style.name}>{formData?.resume?.name}</h1>
        <h5 className={style.name}> {formData?.resume?.jobTitle}</h5>
      </div>
      <div className={style.container}>
        <div className={style.left_section}>
          <div className="section">
            <p className="section-content">
            {formData?.resume?.summary}
            </p>
          </div>
          <div className={style.section}>
            <h2 className="section-title">Experience</h2>
            <Divider className="divider" />
            <ul>
            {formData?.resume?.work.map((item, id) => (
              <li>
            <div className={style.work_entry}>
              
              <p className="date">  {handleDate(item?.startDate)}  -  {handleDate(item?.endDate)}</p>
              <div>
                <h3 className="position">{item?.title}</h3>
                <p className="company">{item?.company} - {item?.location}</p>

                <p className="description">
                {item?.description}
                </p>
              </div>
            </div>
              </li>
            ))}
          </ul>
    
   


   
          </div>
          <div className={style.section}>
            <h2 className="section-title">EDUCATION</h2>
            <Divider className="divider" />
            <ul className={style.education}>
            {formData?.resume?.education.map((item, id) => (
              <>
                 <li key={id} style={{ color: color3 }}>
           <div className="education-entry">
              <h3 className="degree">{item.degree}</h3>
              <p className="university">{item.collegeName}</p>
              <p className="date">{item?.startYear} - {item.endYear}</p>
      
            </div>
              </li>
    
              </>
           
            ))}
          </ul>
        
          </div>
          <div className={style.section}>
            <h2 className="section-title">Certification</h2>
            <Divider className="divider" />
            <ul className={style.education}>
            {formData?.resume?.certifications.map((item, id) => (
              <li key={id} style={{ color: color3 }}>
           <div className="education-entry">
              <h3 className="degree">{item.title}</h3>
              <p className="university">{item.issuingOrganization}</p>
              <p className="date">{item?.date}</p>
      
            </div>
              </li>
            ))}
          </ul>
        
          </div>
        </div>
        <div
          className={style.right_section}
          style={{ backgroundColor: "#D3D3D3" }}
        >
          <h2 className="section-title">Personal Info</h2>
          <Divider className="divider" />
          <div className="contact-info">
            <div className="contact-entry">
              <h4 className="contact-label">Address</h4>
              <p className="contact-value">         {formData?.resume?.address?.address},
              {formData?.resume?.address?.postalCode}</p>
            </div>
            <div className="contact-entry">
              <h4 className="contact-label">Phone</h4>
              <p className="contact-value">  {formData?.resume?.contact?.phone}</p>
            </div>
            <div className="contact-entry">
              <h4 className="contact-label">E-mail</h4>
              <p className="contact-value">      {formData?.resume?.contact?.email}</p>
            </div>
            <div className="contact-entry">
              <h4 className="contact-label">LinkedIn</h4>
              <p className="contact-value"> {formData?.resume?.socialLinks?.linkedin }</p>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">SKILLS</h2>
            <Divider className="divider" />
            <ul>
            {formData?.resume?.skillsAndLevel.map((item, id) => (
              <li>
                <h4>{item?.skills}</h4>
                <p>{item?.level}</p>
              </li>
            ))}
            </ul>
     
          </div>
          <div className="section">
            <h2 className="section-title">Language</h2>
            <Divider className="divider" />
            <ul>
            {formData?.resume?.knownLanguages.map((item, id) => (
              <li>
                <h4>{item?.lang}</h4>
                </li>
            ))}
            </ul>
          </div>
          <div className="section">
            <h2 className="section-title">Awards</h2>
            <Divider className="divider" />
            <ul>
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
      </div>
    </div>
  );
};

export default Template_12;
