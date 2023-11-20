import React from "react";
import style from "./Template_6.module.css";
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

const Template_6 = () => {
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
    <div onClick={()=>setTemplateNo(5)} className={style.main}>
      <div
        className={style.Left_container}
        style={{ backgroundColor: color, color: "white" }}
      >
        <div className={style.img_container}>
          <div className={style.img_box} style={{height:imgSize,width:imgSize}}>
          {croppedImage ? (
                     <img src={croppedImage} alt="dp" />
                ) : (
              
                  <img src={formData?.resume?.profilePicture?.url} alt="dp" />
                )}
          </div>
        </div>
        <br />
        <div className={style.skillsHeader2}>
          <h2>
            <CgProfile />
            PROFILE
          </h2>
          <br/>
          <hr className={style.hr} style={{ color: color3}} />
          <p>
          {formData?.resume?.summary}
          </p>
        </div>
        <br/>

        <div className={style.info_box}>
          <h3 style={{ color: color3}}>CONTACT ME
          </h3>
          <br />
          <hr className={style.hr} style={{ color: color3}} />
          <div className={style.contactInfo}>
            <div className={style.iconContainer} style={{ color: "black" }}>
              <p >
                <AiOutlineMail />
              </p>
            </div>
            <p className={style.email} style={{ color: color3}}>{formData?.resume?.contact?.email}</p>
          </div>
          <div className={style.contactInfo}>
            <div className={style.iconContainer} style={{color: "black" }}>
              <p >
                <AiOutlinePhone />
              </p>
            </div>
            <p style={{ color: color3}} className={style.email}>{formData?.resume?.contact?.phone}</p>
          </div>

          <div className={style.contactInfo}>
            <div className={style.iconContainer} style={{ color: "black" }}>
              <p >
                <CiLocationOn />
              </p>
            </div>
            <p className={style.email} style={{ color: color3}}>{formData?.resume?.address?.address},{formData?.resume?.address?.postalCode}</p>
          </div>
        </div>

        <div className={style.skillsHeader}>
          <h3 style={{ color: color3}}>PERSONAL SKILLS</h3>
          <br />
          <hr className={style.hr}  style={{ color: color3}}/>
          <ul>
          {formData?.resume?.skillsAndLevel.map((item,id)=>
           <li  key={id} style={{ color: color3}}>
          <span>{item.skills}</span>  
          <ProgressBar bgcolor="orange" progress="40" height={5} />
             </li>
          )}
          </ul>
        </div>
        <div className={style.skillsHeader}>
          <h3 style={{ color: color3}}>LAGNUAGES</h3>
          <br />
          <hr className={style.hr}  style={{ color: color3}}/>
          <ul>
          {formData?.resume?.knownLanguages.map((item,id)=>
           <li  key={id} style={{ color: color3}}>
          <span>{item.lang}</span>  
          <ProgressBar bgcolor="orange" progress="40" height={5} />
             </li>
          )}
          </ul>
        </div>
      </div>
      <div>
        <div className={style.objectiveHeader}>
          <h1 className={style.person_name}  style={{color:color2,fontFamily:fontStyle,fontSize:fontSize}}>
          {formData?.resume?.name}
          </h1>
          <p className={style.objectiveText}> {formData?.resume?.jobTitle}</p>
        </div>

        <div className={style.skillsHeader}>
          <h2 style={{ color: color3}}>Education</h2>
          <br />
          <hr className={style.hr} style={{ color: color3}} />
          <ul>
          {formData?.resume?.education.map((item,id)=>
           <li  key={id} style={{ color: color3}}>
          <span>{item.degree} <span>{item?.startYear}  - {item.endYear}</span></span>  
          <span>{item.collegeName}</span>  
             </li>
          )}
          </ul>
        </div>
   

        <div className={style.professionalSkillsHeader}>
          <div>
          <h2> EXPERIENCE</h2>
          <br/>
          <br/>
          <hr className={style.hr} style={{ color: color3}} />
          </div>
  
    
          <ul>
          {formData?.resume?.work.map((item,id)=>
          <li>
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
      </div>
    </div>
  );
};

export default Template_6;
