import React from 'react'
import style from "./Card.module.css"
import ResumeTemplates from '../ResumeTemplates/ResumeTemplates'

function Card() {
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

export default Card
