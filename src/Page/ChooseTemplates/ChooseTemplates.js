import React from 'react'
import style from "./ChooseTemplates.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import ResumeTemplates from '../../Component/ResumeTemplates/ResumeTemplates'

function ChooseTemplates() {
  return (
    <div className={style.main}>
        <NavBar/>
        <h1>Choose Templates</h1>
      <div className={style.container}>
            <ResumeTemplates/>
      </div>
    </div>
  )
}

export default ChooseTemplates
