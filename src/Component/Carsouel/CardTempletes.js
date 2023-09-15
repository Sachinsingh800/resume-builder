import React from 'react'
import style from "./CardTempletes.module.css"
import ResumeTemplates from '../ResumeTemplates/ResumeTemplates'

function CardTempletes() {
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

export default CardTempletes
