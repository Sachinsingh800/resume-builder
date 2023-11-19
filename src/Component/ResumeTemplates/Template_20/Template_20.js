import React from "react";
import style from "./Template_20.module.css";
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

const Template_20 = () => {
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
        <div>
        <h1>{formData.resume.name}</h1>
        <p>{formData?.resume?.jobTitle}</p>
     
        </div>
          <div className={style.contact_info}>
          <p>{formData.resume.contact.email} </p>
          <p>{formData.resume.contact.phone} </p>
          <p>{formData.resume.address.address} | {formData.resume.address.country}</p>
          <p>{formData.resume.socialLinks.linkedin} </p>
          </div>

     </div>
<div className={style.description_box}>

        <p>{formData.resume.summary}</p>
</div>
     <div className={style.Skills}>
          <h2>RELEVANT SKILLS</h2>
          <ul>
          {formData?.resume?.skillsAndLevel.map((item,id)=>
           <li  key={id} style={{ color: color3}}>
          <span>{item.skills}</span>  
             </li>
          )}
          </ul>
     </div>
     <div className={style.Experience}>
          <h2>PROFESSIONAL EXPERIENCE</h2>
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
          <h2>EDUCATION</h2>
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

export default Template_20;
