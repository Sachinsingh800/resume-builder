import React from 'react'
import style from "./CardTempletes.module.css"
import {ResumeTemplates} from '../ResumeTemplates/ResumeTemplates'
import Resume1 from "../ResumeTemplates/Resume1/Resume1"

export function CardTempletes() {
  return (
    <div className={style.main}>
        <div className={style.template_card}>
          <div >
          <ResumeTemplates/>
          </div>

        </div>
   
    </div>
  )
}
export function CardTempletes1() {
  return (
    <div className={style.main}>
        <div className={style.template_card}>
          <div >
          <Resume1/>
          </div>

        </div>
   
    </div>
  )
}


