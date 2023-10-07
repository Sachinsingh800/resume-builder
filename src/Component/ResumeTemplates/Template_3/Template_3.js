import React from "react";
import style from "./Template_3.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import dp from "../../Images/dp.png";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useRecoilState } from "recoil";
import { ChooseColor,chooseTemplates,ChooseColorSecond,croppedImageState } from "../../../Recoil";

const Template_3 = () => {
  const [color, setColor] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  
  return (
    <div onClick={()=>setTemplateNo(2)} className={style.main}>
      <div
        className={style.Left_container}
        style={{ backgroundColor: color, color: "white" }}
      >
        <div className={style.img_container}>
          <div className={style.img_box}>
          {croppedImage ? (
                     <img src={croppedImage} alt="dp" />
                ) : (
              
                  <img src={croppedImage} alt="dp" />
                )}
          </div>
        </div>
        <br />

        <div className={style.info_box}>
          <h3>CONTACT</h3>
          <br />
          <hr className={style.hr} />
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p style={{ color: "black" }}>
                <AiOutlineMail />
              </p>
            </div>
            <p className={style.email}>randfe@gmail.com</p>
          </div>
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p style={{ color: "black" }}>
                <AiOutlinePhone />
              </p>
            </div>
            <p className={style.email}>+91 2842 59630</p>
          </div>

          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p style={{ color: "black" }}>
                <CiLocationOn />
              </p>
            </div>
            <p className={style.email}>New Delhi, India 110034</p>
          </div>
        </div>

        <div className={style.skillsHeader}>
          <h3>PROFESSIONAL SKILLS</h3>
          <br />
          <hr className={style.hr} />
          <ul>
            <li>
              <span>React js </span>{" "}
              <ProgressBar bgcolor="orange" progress="10" height={5} />
            </li>
            <li>
              <span>Express </span>{" "}
              <ProgressBar bgcolor="orange" progress="20" height={5} />
            </li>
            <li>
              <span>Node js </span>{" "}
              <ProgressBar bgcolor="orange" progress="70" height={5} />
            </li>
            <li>
              <span>Python </span>{" "}
              <ProgressBar bgcolor="orange" progress="90" height={5} />
            </li>
            <li>
              <span>Flutter </span>{" "}
              <ProgressBar bgcolor="orange" progress="40" height={5} />
            </li>
          </ul>
        </div>
        <div className={style.skillsHeader}>
          <h3>PERSONAL SKILLS</h3>
          <br />
          <hr className={style.hr} />
          <ul>
            <li>
              <span>React js </span>{" "}
              <ProgressBar bgcolor="orange" progress="10" height={5} />
            </li>
            <li>
              <span>Express </span>{" "}
              <ProgressBar bgcolor="orange" progress="20" height={5} />
            </li>
            <li>
              <span>Node js </span>{" "}
              <ProgressBar bgcolor="orange" progress="70" height={5} />
            </li>
            <li>
              <span>Python </span>{" "}
              <ProgressBar bgcolor="orange" progress="90" height={5} />
            </li>
            <li>
              <span>Flutter </span>{" "}
              <ProgressBar bgcolor="orange" progress="40" height={5} />
            </li>
          </ul>
        </div>
        <div className={style.skillsHeader}>
          <h3>LAGNUAGES</h3>
          <br />
          <hr className={style.hr} />
          <ul>
            <li>
              <span>ENGLISH </span>{" "}
              <ProgressBar bgcolor="orange" progress="10" height={5} />
            </li>
            <li>
              <span>HINDI </span>{" "}
              <ProgressBar bgcolor="orange" progress="20" height={5} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={style.objectiveHeader}>
          <h1 className={style.person_name}>
            SMITH <span style={{color:color2}}>MATTHEW</span>
          </h1>
          <p className={style.objectiveText}>CREATIVE DIRECTOR</p>
        </div>

        <div className={style.skillsHeader2}>
          <h2>
            <CgProfile />
            PROFILE
          </h2>
          <br/>
          <hr className={style.hr} />
          <p>
            A Professional Summary is a brief, carefully crafted statement that
            highlights your key qualifications and career objectives. It serves
            as a snapshot of your professional background, summarizing your
            relevant skills, experiences, and career aspirations. A well-written
            Professional Summary can capture the attention of potential
            employers and offer them insight into what you can bring to their
            organization.
          </p>
        </div>

        <div className={style.professionalSkillsHeader}>
          <div>
          <h2><MdOutlineWorkHistory/>WORKING EXPERIENCE</h2>
          <br/>
          <br/>
          <hr className={style.hr} />
          </div>
  
    

          <div className={style.work_des}>
          <h3 className={style.customerService}>WRITE YOUR JOB TITLE HERE</h3>
          <h5 className={style.company_name}><span>Company Name - Location</span> <span>2020-2023</span></h5>
            <p>
            A Professional Summary is a brief, carefully crafted statement that
            highlights your key qualifications and career objectives. It serves
            as a snapshot of your professional background, summarizing your
            relevant skills, experiences, and career aspirations. 
            </p>
             <ul>
              <li>It serves as a snapshot of your professional background</li>
              <li>It serves as a snapshot of your professional background</li>
             </ul>
            </div>
          <div className={style.work_des}>
          <h3 className={style.customerService}>WRITE YOUR JOB TITLE HERE</h3>
          <h5 className={style.company_name}><span>Company Name - Location</span> <span>2020-2023</span></h5>
            <p>
            A Professional Summary is a brief, carefully crafted statement that
            highlights your key qualifications and career objectives. It serves
            as a snapshot of your professional background, summarizing your
            relevant skills, experiences, and career aspirations. 
            </p>
             <ul>
              <li>It serves as a snapshot of your professional background</li>
              <li>It serves as a snapshot of your professional background</li>
             </ul>
            </div>
          <div className={style.work_des}>
          <h3 className={style.customerService}>WRITE YOUR JOB TITLE HERE</h3>
          <h5 className={style.company_name}><span>Company Name - Location</span> <span>2020-2023</span></h5>
            <p>
            A Professional Summary is a brief, carefully crafted statement that
            highlights your key qualifications and career objectives. It serves
            as a snapshot of your professional background, summarizing your
            relevant skills, experiences, and career aspirations. 
            </p>
             <ul>
              <li>It serves as a snapshot of your professional background</li>
              <li>It serves as a snapshot of your professional background</li>
             </ul>
            </div>
        
          

        </div>
      </div>
    </div>
  );
};

export default Template_3;
