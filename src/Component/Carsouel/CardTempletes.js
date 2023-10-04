import React from 'react'
import style from "./CardTempletes.module.css"

import resume_1 from "../Images/Template_1.png"
import resume_2 from "../Images/Template_2.png"
import resume_3 from "../Images/Template_3.png"


export function CardTempletes1() {
  return (
    <div className={style.main}>
      
         <img src={resume_1} alt='resume1' />

    </div>
  )
}
export function CardTempletes2() {
  return (
    <div className={style.main}>
    
         <img src={resume_2} alt='resume2' />


   
    </div>
  )
}
export function CardTempletes3() {
  return (
    <div className={style.main}>
         
         <img src={resume_3} alt='resume2' />


   
    </div>
  )
}


