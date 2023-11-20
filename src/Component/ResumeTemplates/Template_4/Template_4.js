import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_4.module.css"
import { ChooseColor, ChooseColorSecond, ChooseColorThird, chooseTemplates, croppedImageState, fontSizeState, fontState, imageSizeState, resumeData } from "../../../Recoil";
import { useRecoilState } from "recoil";

const Template_4 = () => {
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
    <div  onClick={()=>setTemplateNo(3)}  className={style.main}>
      <div className={style.left_section}>
        <h1 className={style.name}>{formData?.resume?.name}</h1>
        <Divider className="divider" />
        <div className="section">
          <h2 className="section-title"> {formData?.resume?.jobTitle}</h2>
          <Divider className="divider" />
          <p className="section-content">
          {formData?.resume?.summary}
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">WORK HISTORY</h2>
          <Divider className="divider" />
          <ul>
          {formData?.resume?.work.map((item,id)=>
          <li className={style.li}> 
          <div className={style.work_des}>
        <h3 className={style.customerService}>{item?.title}</h3>
        <h5 className={style.company_name}><span>{item?.company} - {item?.location}</span> <span>{handleDate(item?.startDate)} - {handleDate(item?.endDate)}</span></h5>
          <p>
              {item?.description}
          </p>
     
          </div>
          </li>
          )}
            
          </ul>

        </div>
        <div className="section">
          <h2 className="section-title">EDUCATION</h2>
          <Divider className="divider" />
          <ul>
          {formData?.resume?.education.map((item,id)=>
      <li className={style.li}> 
          <div className={style.work_des}>
        <h3 className={style.customerService}>{item?.degree}</h3>
        <h5 className={style.company_name}><span>{item?.collegeName} - {item?.location}</span> <span>{handleDate(item?.startYear)} - {handleDate(item?.endYear)}</span></h5>
          <p>
              {item?.description}
          </p>
     
          </div>
          </li>
          )}
            
          </ul>
    

        </div>
      </div>
      <div className={style.right_section} style={{backgroundColor:"grey",color:"white"}}>
        <div className="contact-info">
          <div className="contact-entry">
            <h4 className="contact-label">Address</h4>
            <p className="contact-value">{formData?.resume?.address?.address},{formData?.resume?.address?.postalCode}</p>
          </div>
          <div className="contact-entry">
            <h4 className="contact-label">Phone</h4>
            <p className="contact-value">{formData?.resume?.contact?.phone}</p>
          </div>
          <div className="contact-entry">
            <h4 className="contact-label">E-mail</h4>
            <p className="contact-value">{formData?.resume?.contact?.email}</p>
          </div>

        </div>
        <Divider className="divider" />
        <div className="section">
          <h2 className="section-title">SKILLS</h2>
          <Divider className="divider" />
          <ul>
          {formData?.resume?.skillsAndLevel.map((item,id)=>
      <li > 
                 {item?.skills}
          </li>
          )}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template_4;
