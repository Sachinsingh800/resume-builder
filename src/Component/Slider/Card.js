import React from 'react'
import style from "./Card.module.css"
import {ResumeTemplates} from '../ResumeTemplates/ResumeTemplates'
import Resume1 from '../ResumeTemplates/Resume1/Resume1'


export function Card() {
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
export function Card1() {
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

