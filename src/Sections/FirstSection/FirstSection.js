import React from 'react'
import style from "./FirstSection.module.css"
import Carsouel from '../../Component/Carsouel/Carsouel'
import { Link } from 'react-router-dom'


function FirstSection() {
  return (
    <div className={style.main}>
        <div className={style.heading}>
        <h2>Resume Template For Every Kind Of Job Seeker</h2>
      <p>Find the best resume designs for your industry, job title, or experience level. Choose by style, color, or format. No matter your experience, there's a resume template for you.</p>
      <br/>
      <input className={style.search_input} placeholder='🔍 Search here...'    />
        </div>
       
      <Link to={"/ChooseTemplates"}><button className={style.btn} >Choose Templetes</button></Link>

      <div className={style.Carsouel}>
         <Carsouel/>
      </div>
    </div>
  )
}

export default FirstSection
