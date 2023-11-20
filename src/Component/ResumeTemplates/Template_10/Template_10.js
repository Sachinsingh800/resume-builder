import React from "react";
import style from "./Template_10.module.css";
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
  croppedImageState ,
  resumeData, 
  ChooseColorThird,
  fontState,
  fontSizeState,
  imageSizeState
} from "../../../Recoil";

const Template_10 = () => {
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
    <div onClick={()=>setTemplateNo(9)} className={style.main}>
     <div className={style.heading}>
          <h1>{formData.resume.name}</h1>
          <h3>{formData.resume.jobTitle}</h3>
          <p>{formData.resume.contact.email} | {formData.resume.contact.phone}</p>
     </div>
     <div className={style.summary}>
          <h2>Summary</h2>
          <br/>
          <p className={style.para}>{formData.resume.summary}</p>
     </div>
     <div className={style.Experience}>
          <h2>Work Experience</h2>
          <br/>
          <ul>
          {formData?.resume?.work.map((item,id)=>
          <li>
          <div className={style.work_des}>
        <h3 className={style.customerService}><span>{item?.title}</span><h6>{handleDate(item?.startDate)} - {handleDate(item?.endDate)}</h6></h3>
        <h5 className={style.company_name}><span>{item?.company} - {item?.location}</span> </h5>
          <p>
              {item?.description}
          </p>
     
          </div>
          </li>
          )}
            
          </ul>
     </div>


     <div className={style.Experience}>
          <h2>Eucation</h2>
          <br/>
          <ul>
          {formData?.resume?.education.map((item,id)=>
           <li  className={style.education} key={id} style={{ color: color3}}>
          <h4>{item.degree} <span>,{item?.startYear}  - {item.endYear}</span></h4>  
          <span>{item.collegeName}</span>  
             </li>
          )}
          </ul>
     </div>
     <div className={style.Skills}>
          <h2>Skills</h2>
          <br/>
          <ul>
          {formData?.resume?.skillsAndLevel.map((item,id)=>
           <li  key={id} style={{ color: color3}}>
              <span>{item.skills}</span>  
             </li>
          )}
          </ul>
     </div>
    </div>
  );
};

export default Template_10;
