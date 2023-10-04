import React, { useState } from 'react'
import style from "./ChooseTemplates.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import {ResumeTemplates} from '../../Component/ResumeTemplates/ResumeTemplates'
import { Link } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'
import ColorPlate from '../../Component/ColorPlate/ColorPlate'
import Template_1 from '../../Component/ResumeTemplates/Template_1/Template_1'
import Template_2 from '../../Component/ResumeTemplates/Template_2/Template_2'
import Template_3 from '../../Component/ResumeTemplates/Template_3/Template_3'
import SmallSizeTemplates from '../../Component/SmallSizeTemplates/SmallSizeTemplates'



function ChooseTemplates() {

  const [template,setTempletes] = useState([
    <Template_1/>,
    <Template_2/>,
    <Template_3/>,


  ])
  return (
    <div className={style.main}>
        <NavBar/>
     
      <div className={style.container}>
      <h1>What do you want your resume to look like ?</h1>
      <p>View all resume template and select a specific style to customize</p>
   <ColorPlate/>
        <SmallSizeTemplates/>
            
      </div >
      <Footer/>
    </div>
  )
}

export default ChooseTemplates
