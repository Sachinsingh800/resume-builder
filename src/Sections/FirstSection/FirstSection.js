import React from 'react'
import style from "./FirstSection.module.css"
import Carsouel from '../../Component/Carsouel/Carsouel'


function FirstSection() {
  return (
    <div className={style.main}>
        <div className={style.heading}>
        <h2>Resume Template For Every Kind Of Job Seeker</h2>
      <p>Find the best resume designs for your industry, job title, or experience level. Choose by style, color, or format. No matter your experience, there's a resume template for you.</p>
        </div>

      <div className={style.Carsouel}>
         <Carsouel/>
      </div>
    </div>
  )
}

export default FirstSection
