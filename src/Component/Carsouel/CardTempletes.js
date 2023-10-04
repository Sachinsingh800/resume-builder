import React from 'react'
import style from "./CardTempletes.module.css"
import { Link } from 'react-router-dom'
import resume_1 from "../Images/Template_1.png"
import resume_2 from "../Images/Template_2.png"
import resume_3 from "../Images/Template_3.png"
import { useRecoilState } from "recoil";
import { chooseTemplates } from '../../Recoil' 


export function CardTempletes1() {
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);

  return (
    <Link to={"/ResumeForm"}> <div onClick={()=>setTemplateNo(0)}  className={style.main}>
         <img src={resume_1} alt='resume1' />
    </div>
    </Link>
  )
}
export function CardTempletes2() {
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  return (
   <Link to={"/ResumeForm"}><div onClick={()=>setTemplateNo(1)}  className={style.main}>
         <img src={resume_2} alt='resume2' />
    </div>
    </Link> 
  )
}
export function CardTempletes3() {
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  return (
    <Link to={"/ResumeForm"}>  <div onClick={()=>setTemplateNo(2)}  className={style.main}>
         <img src={resume_3} alt='resume2' />
    </div>
    </Link> 
  )
}


