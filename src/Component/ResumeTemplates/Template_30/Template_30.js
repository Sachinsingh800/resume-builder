import React from "react";
import style from "./Template_30.module.css";
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

const Template_30 = () => {
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
    <div onClick={()=>setTemplateNo(7)} className={style.main}>
     <div className={style.heading}>
          <h1>{formData.resume.name}</h1>
          <p>{formData.resume.contact.email} | {formData.resume.contact.phone}</p>
     </div>
     <div className={style.summary}>
        <div className={style.title_section}>
        <h2>Professional Summary </h2>
        <hr className={style.line}/>
        </div>
          
          <br/>
          <p className={style.para}>{formData.resume.summary}</p>
     </div>
     <div className={style.Skills}>
     <div className={style.title_section}>
     <h2>Skills</h2>
        <hr className={style.line2}/>
        </div>
         
          <br/>
          <ul>
          {formData?.resume?.skillsAndLevel.map((item,id)=>
           <li  key={id} >
          <span>{item.skills}</span>  
             </li>
          )}
          </ul>
     </div>
     <div className={style.Experience}>
    
          <div className={style.title_section}>
          <h2>Work History</h2>
        <hr className={style.line3}/>
        </div>
          <br/>
          <ul>
          {formData?.resume?.work.map((item,id)=>
          <li>
          <div className={style.work_des}>
            <div>
            <h3 className={style.customerService}>{item?.title}</h3>
        <h5 className={style.company_name}><span>{item?.company} - {item?.location}</span> <span>{handleDate(item?.startDate)} - {handleDate(item?.endDate)}</span></h5>
            </div>
<div>
<p>
              {item?.description}
          </p>
</div>
      
     
          </div>
          </li>
          )}
            
          </ul>
          <ul>
          {formData?.resume?.work.map((item,id)=>
          <li>
          <div className={style.work_des}>
            <div>
            <h3 className={style.customerService}>{item?.title}</h3>
        <h5 className={style.company_name}><span>{item?.company} - {item?.location}</span> <span>{handleDate(item?.startDate)} - {handleDate(item?.endDate)}</span></h5>
            </div>
<div>
<p>
              {item?.description}
          </p>
</div>
      
     
          </div>
          </li>
          )}
            
          </ul>
          <ul>
          {formData?.resume?.work.map((item,id)=>
          <li>
          <div className={style.work_des}>
            <div>
            <h3 className={style.customerService}>{item?.title}</h3>
        <h5 className={style.company_name}><span>{item?.company} - {item?.location}</span> <span>{handleDate(item?.startDate)} - {handleDate(item?.endDate)}</span></h5>
            </div>
<div>
<p>
              {item?.description}
          </p>
</div>
      
     
          </div>
          </li>
          )}
            
          </ul>
     </div>
     <div className={style.Eucation}>
        
          <div className={style.title_section}>
          <h2>Eucation</h2>
        <hr className={style.line4}/>
        </div>
          <br/>
          <ul>
          {formData?.resume?.education.map((item,id)=>
           <li  key={id} style={{ color: color3}}>
            <span>{item?.startYear}  - {item.endYear}</span>
          <h4>{item.degree} </h4>  
          <span>{item.collegeName}</span>  
             </li>
          )}
          </ul>
     </div>

    </div>
  );
};

export default Template_30;
