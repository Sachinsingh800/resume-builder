import React from 'react'
import style from "./SecondSection.module.css"
import Carsouel from '../../../Component/Carsouel/Carsouel'
import Slider from '../../../Component/Slider/Slider'


function SecondSection() {
  return (
    <div className={style.main}>
        <div className={style.heading}>
        <h2>Resume Template For Every Kind Of Job Seeker</h2>
      <p>Find the best resume designs for your industry, job title, or experience level. Choose by style, color, or format. No matter your experience, there's a resume template for you.</p>
      <br/>
      <input className={style.search_input} placeholder='🔍 Search here...'    />
        </div>

      <div className={style.Carsouel}>
         <Slider/>
      </div>
    </div>
  )
}

export default SecondSection
