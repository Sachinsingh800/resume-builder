import React from "react";
import style from "./Template_1.module.css";
import dp from "../../Images/dp.png";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { useRecoilState } from "recoil";
import { ChooseColor,chooseTemplates,ChooseColorSecond,resumeData,croppedImageState, ChooseColorThird, fontState, fontSizeState, imageSizeState } from "../../../Recoil";

function Template_1() {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [color3, setColor3] = useRecoilState(ChooseColorThird);
  const [fontStyle, setFontStyle] = useRecoilState(fontState);
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const [imgSize, setImgSize] = useRecoilState(imageSizeState);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [formData, setFormData] = useRecoilState(resumeData);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  
 

  return (
    <div onClick={()=>setTemplateNo(0)} className={style.main}>
      <div
        className={style.left_section}
        style={{ backgroundColor: color, color: "white" }}
      >
        <div>
          <div className={style.img_container}>
            <div className={style.img_box} style={{height:imgSize,width:imgSize}}>
            {croppedImage ? (
                     <img src={croppedImage} alt="dp" />
                ) : (
              
                  <img src={formData?.resume?.profilePicture?.url} alt="dp" />
                )}
            </div>
          </div>

          <div className={style.info_box}>
            <p><AiOutlineMail/>{formData?.resume?.contact?.email}</p>
            <p><AiOutlinePhone/>{formData?.resume?.contact?.phone}</p>
            <p><CiLocationOn/>{formData?.resume?.address?.address},{formData?.resume?.address?.postalCode}</p>
          </div>
        </div>
        <br />
        <hr />
        <div className={style.education}>
     
          <h2>Education</h2>
          {formData?.resume?.education.map((item,id)=>
          <div key={id}>
           <h3>{item?.collegeName}</h3>
           <p>{item?.degree}</p>
           <p>{item?.startYear} - {item?.endYear}</p>
           </div>
          )}
         
        </div>
      </div>

      <div className={style.right_section}>
        <div className={style.heading} style={{ backgroundColor: color2}}>
          <h1  style={{color:color3,fontFamily:fontStyle,fontSize:fontSize}}>
            {formData?.resume?.name}
            </h1>
        </div>

        <div className={style.certifications}>
          <h2>CERTIFICATIONS</h2>
          <ul>
          {formData?.resume?.certifications.map((item,id)=>
           <li  key={id}>
            <h5>{item?.title}</h5>
            <p>Organization: {item?.issuingOrganization}</p>
           </li>
          )}
           
       
          </ul>
        </div>
        <br />
        <hr />

        <div className={style.skills}>
          <h2>SKILLS</h2>
          <ul>
          {formData?.resume?.skillsAndLevel.map((item,id)=>
           <li  key={id}>{item.skills}</li>
          )}
          </ul>
        </div>
        <br />
        <hr />

        <div className={style.professional_summary}>
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
          {formData?.resume?.summary}
          </p>
        </div>
        <br />
        <hr />

        <div className={style.work}>
          <h2>WORK HISTORY</h2>
          <ul className={style.work_history}>
   
          {formData?.resume?.work.map((item,id)=>
           <li  key={id}>
            <h3>{item?.title}</h3>
            <p>{item?.company} , {item?.location}</p>
            <p>{item?.description}</p>
        
            </li>
          )}
         
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Template_1;
