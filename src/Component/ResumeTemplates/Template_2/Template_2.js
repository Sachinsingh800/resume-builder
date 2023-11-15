import React from 'react';
import style from "./Template_2.module.css"
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { useRecoilState } from "recoil";
import { ChooseColor,chooseTemplates,ChooseColorSecond,croppedImageState, resumeData, imageSizeState, fontSizeState, fontState } from "../../../Recoil";

const Template_2= () => {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [fontStyle, setFontStyle] = useRecoilState(fontState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const [imgSize, setImgSize] = useRecoilState(imageSizeState);
  const [formData, setFormData] = useRecoilState(resumeData);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
console.log(formData,"formdata")
  
  return (
    <div onClick={()=>setTemplateNo(0)} className={style.main}>
      <div className={style.Left_container} style={{ backgroundColor: color }}>
     <div className={style.name_container} style={{ backgroundColor: color2 }}>
     <h1 className={style.name} >
     {formData?.resume?.name}
          </h1>
          <br/>
          <hr className={style.hr} />
  <div className={style.info_box} >
  <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p className="material-icons icon" style={{ color: 'black' }}>
               <AiOutlineMail/>
              </p>
            </div>
            <p className={style.email}>
            {formData?.resume?.contact?.email}
            </p>
          </div>
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p className="material-icons phoneIcon icon" style={{ color: 'black' }}>
         <AiOutlinePhone/>
              </p>
            </div>
            <p className={style.email}>
            {formData?.resume?.contact?.phone}
            </p>
          </div>
          
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p className="material-icons addressIcon icon" style={{ color: 'black' }}>
               <CiLocationOn/>
              </p>
            </div>
            <p className={style.email}>
            {formData?.resume?.address?.address},{formData?.resume?.address?.postalCode}
            </p>
          </div>

  </div>
     </div>
      
      
   
        
        <div className={style.skillsHeader}>
          <h2 >SKILLS</h2>
          <ul>
          {formData?.resume?.skillsAndLevel?.map((item,id)=>
           <li  key={id}>{item?.skills}</li>
          )}
          </ul>

        </div>
        <div className={style.educationHeader}>
          <h2 >EDUCATION</h2>
          {formData?.resume?.education?.map((item,id)=>
          <div key={id}>
           <h3>{item?.collegeName}</h3>
           <p>{item?.degree}</p>
           <p>{item?.startYear} - {item?.endYear}</p>
           </div>
          )}
        </div>
      </div>
      <div>
        <div className={style.objectiveHeader} style={{ backgroundColor: '#E5E5E5' }}>

            <h2 >CAREER OBJECTIVE</h2>
            <p className={style.objectiveText}>
            {formData?.resume?.summary}
            </p>
         
        </div>
        <div className={style.workHeader}>
          <h2 >WORK HISTORY</h2>
          <ul className={style.work_history}>
   
   {formData?.resume?.work?.map((item,id)=>
    <li  key={id}>
     <h3>{item?.title}</h3>
     <p>{item?.company} , {item?.location}</p>
     <p>{item?.description}</p>
 
     </li>
   )}
  
   </ul>
        </div>
        <div className={style.workHeader}>
          <h2>Projects</h2>
          <ul className={style.Projects}>
   
          {formData?.resume?.projects?.map((item,id)=>
           <li  key={id}>
            <h3 className={style.project_title}><span>{item?.title}</span> <span>{item?.year}</span></h3>
            <p>{item?.link} </p>
            <p>{item?.description}</p>
        
            </li>
          )}
         
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Template_2;
