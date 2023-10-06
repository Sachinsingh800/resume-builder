import React from "react";
import style from "./Template_1.module.css";
import dp from "../../Images/dp.png";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { useRecoilState } from "recoil";
import { ChooseColor,chooseTemplates,ChooseColorSecond,resume } from "../../../Recoil";

function Template_1() {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [resumeData, setResumeData] = useRecoilState(resume);
  
  console.log(resumeData.resume,"resume data")

  return (
    <div onClick={()=>setTemplateNo(0)} className={style.main}>
      <div
        className={style.left_section}
        style={{ backgroundColor: color, color: "white" }}
      >
        <div>
          <div className={style.img_container}>
            <div className={style.img_box}>
              <img src={resumeData?.resume?.profilePicture?.url} alt="img" />
            </div>
          </div>

          <div className={style.info_box}>
            <p><AiOutlineMail/>{resumeData?.resume?.contact?.email}</p>
            <p><AiOutlinePhone/>{resumeData?.resume?.contact?.phone}</p>
            <p><CiLocationOn/>{resumeData?.resume?.address?.address},{resumeData?.resume?.address?.postalCode}</p>
          </div>
        </div>
        <br />
        <hr />
        <div className={style.education}>
     
          <h2>Education</h2>
          {resumeData?.resume?.education.map((item,id)=>
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
          <h1>{resumeData?.resume?.name}</h1>
        </div>

        <div className={style.certifications}>
          <h2>CERTIFICATIONS</h2>
          <ul>
          {resumeData?.resume?.certifications.map((item,id)=>
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
          {resumeData?.resume?.skillsAndLevel.map((item,id)=>
           <li  key={id}>{item.skills}</li>
          )}
          </ul>
        </div>
        <br />
        <hr />

        <div className={style.professional_summary}>
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
          {resumeData?.resume?.summary}
          </p>
        </div>
        <br />
        <hr />

        <div className={style.work}>
          <h2>WORK HISTORY</h2>
          <ul className={style.work_history}>
   
          {resumeData?.resume?.work.map((item,id)=>
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
