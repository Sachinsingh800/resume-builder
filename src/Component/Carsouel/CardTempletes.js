import React, { useEffect } from 'react'
import style from "./CardTempletes.module.css"

import resume_1 from "../Images/Template_1.png"
import resume_2 from "../Images/Template_2.png"
import resume_3 from "../Images/Template_3.png"
import resume_4 from "../TemplateImages/1.png"
import resume_5 from "../TemplateImages/2.png"
import resume_6 from "../TemplateImages/3.png"
import resume_7 from "../TemplateImages/4.png"
import resume_8 from "../TemplateImages/5.png"
import resume_9 from "../TemplateImages/6.png"
import resume_10 from "../TemplateImages/7.png"
import resume_11 from "../TemplateImages/8.png"
import resume_12 from "../TemplateImages/9.png"
import resume_13 from "../TemplateImages/10.png"
import resume_14 from "../TemplateImages/11.png"
import resume_15 from "../TemplateImages/12.png"
import resume_16 from "../TemplateImages/13.png"
import resume_17 from "../TemplateImages/14.png"
import resume_18 from "../TemplateImages/15.png"
import resume_19 from "../TemplateImages/16.png"
import resume_20 from "../TemplateImages/17.png"
import resume_21 from "../TemplateImages/18.png"
import resume_22 from "../TemplateImages/19.png"
import resume_23 from "../TemplateImages/20.png"
import resume_24 from "../TemplateImages/21.png"
import resume_25 from "../TemplateImages/22.png"
import resume_26 from "../TemplateImages/23.png"
import resume_27 from "../TemplateImages/24.png"
import resume_28 from "../TemplateImages/25.png"
import resume_29 from "../TemplateImages/26.png"
import resume_30 from "../TemplateImages/27.png"
import { useRecoilState } from "recoil";
import { chooseTemplates } from '../../Recoil' 


export function CardTempletes1() {


const handleTemNo=(no)=>{
  localStorage.setItem("templateid",JSON.stringify(no))
}
  return (
    <div onClick={()=>handleTemNo(0) }  className={style.main}>
      
         <img src={resume_1} alt='resume1' />

    </div>
  )
}
export function CardTempletes2() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
   <div onClick={()=>handleTemNo(1)}  className={style.main}>
         <img src={resume_2} alt='resume2' />
    </div>
  )
}
export function CardTempletes3() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(2)}  className={style.main}>
         
         <img src={resume_3} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes4() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(4)}  className={style.main}>
         
         <img src={resume_4} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes5() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(4)}  className={style.main}>
         
         <img src={resume_5} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes6() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(5)}  className={style.main}>
         
         <img src={resume_6} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes7() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(6)}  className={style.main}>
         
         <img src={resume_7} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes8() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(7)}  className={style.main}>
         
         <img src={resume_8} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes9() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(8)}  className={style.main}>
         
         <img src={resume_9} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes10() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(9)}  className={style.main}>
         
         <img src={resume_10} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes11() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }

  return (
    <div onClick={()=>handleTemNo(10)}  className={style.main}>
         
         <img src={resume_11} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes12() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(11)}  className={style.main}>
         
         <img src={resume_12} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes13() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(12)}  className={style.main}>
         
         <img src={resume_13} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes14() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(13)}  className={style.main}>
         
         <img src={resume_14} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes15() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(14)}  className={style.main}>
         
         <img src={resume_15} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes16() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(15)}  className={style.main}>
         
         <img src={resume_16} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes17() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
  return (
    <div onClick={()=>handleTemNo(16)}  className={style.main}>
         
         <img src={resume_17} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes18() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(17)}  className={style.main}>
         
         <img src={resume_18} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes19() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(18)}  className={style.main}>
         
         <img src={resume_19} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes20() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(19)}  className={style.main}>
         
         <img src={resume_20} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes21() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(20)}  className={style.main}>
         
         <img src={resume_3} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes22() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(21)}  className={style.main}>
         
         <img src={resume_22} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes23() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(22)}  className={style.main}>
         
         <img src={resume_23} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes24() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(23)}  className={style.main}>
         
         <img src={resume_24} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes25() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(24)}  className={style.main}>
         
         <img src={resume_25} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes26() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(25)}  className={style.main}>
         
         <img src={resume_26} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes27() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(26)}  className={style.main}>
         
         <img src={resume_27} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes28() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(27)}  className={style.main}>
         
         <img src={resume_28} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes29() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
 
  return (
    <div onClick={()=>handleTemNo(28)}  className={style.main}>
         
         <img src={resume_29} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes30() {
  const handleTemNo=(no)=>{
    localStorage.setItem("templateid",JSON.stringify(no))
  }
  return (
    <div onClick={()=>handleTemNo(29)}  className={style.main}>
         
         <img src={resume_30} alt='resume2' />


   
    </div>
  )
}


