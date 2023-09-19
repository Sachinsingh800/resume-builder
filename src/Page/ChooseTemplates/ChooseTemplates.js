import React, { useState } from 'react'
import style from "./ChooseTemplates.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import ResumeTemplates from '../../Component/ResumeTemplates/ResumeTemplates'
import { Link } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'
import ColorPlate from '../../Component/ColorPlate/ColorPlate'

function ChooseTemplates() {

  const [template,setTempletes] = useState([
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
  ])
  return (
    <div className={style.main}>
        <NavBar/>
     
      <div className={style.container}>
      <h1>What do you want your resume to look like ?</h1>
      <p>View all resume template and select a specific style to customize</p>
   <ColorPlate/>
<div  className={style.template_box}>
    {template.map((item)=>
    <div className={style.template_card}>
      <Link to={"/ResumeForm"}><div className={style._card}> {item}</div> </Link>   
    </div>
    )}
</div>
            
      </div >
      <Footer/>
    </div>
  )
}

export default ChooseTemplates
