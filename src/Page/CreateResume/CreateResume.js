import React from 'react'
import style from "./CreateResume.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import CreateResumeForm from '../../Component/CreateResumeForm/CreateResumeForm'
import ResumeTemplates from '../../Component/ResumeTemplates/ResumeTemplates'
import ResumeModal from '../../Component/ResumeModal/ResumeModal'

function CreateResume() {
  return (
    <div className={style.main}>
        <NavBar/>
        <div className={style.container}>
              <div className={style.left_box} >
                <CreateResumeForm/>
              </div>
              <div className={style.right_box} >
            <ResumeModal/>
              </div>
        </div>
      
    </div>
  )
}

export default CreateResume
