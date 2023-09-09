import React from 'react'
import style from "./ChooseTemplates.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import ResumeTemplates from '../../Component/ResumeTemplates/ResumeTemplates'
import { Link } from 'react-router-dom'

function ChooseTemplates() {
  return (
    <div className={style.main}>
        <NavBar/>
     
      <div className={style.container}>
      <h1>Choose Templates</h1>

            <Link to={"/ResumeForm"}><ResumeTemplates/></Link>
      </div>
    </div>
  )
}

export default ChooseTemplates
