import React from 'react'
import style from "./CreateResume.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import CreateResumeForm from '../../Component/CreateResumeForm/CreateResumeForm'
import ResumeTemplates from '../../Component/ResumeTemplates/ResumeTemplates'
import ResumeModal from '../../Component/ResumeModal/ResumeModal'
import ColorPlate from '../../Component/ColorPlate/ColorPlate'
import CreateResumeFormForFresher from '../../Component/CreateResumeFormForFresher/CreateResumeFormForFresher'
import { resumeType,resumeTemplates } from '../../Recoil'
import { useRecoilValue } from 'recoil'


function CreateResume() {
  const type = useRecoilValue(resumeType)

  
  return (
    <div className={style.main}>
        <NavBar/>
        <div className={style.container}>
              <div className={style.left_box} >
               
                {type === "Fresher" ? <CreateResumeFormForFresher/> : <CreateResumeForm/>}
            
              
                
              </div>
              <div className={style.right_box} >
                {/* <div className={style.color_plate}>
                <ColorPlate/>
                </div> */}
                <div className={style.preview_template}>
                <ResumeModal/>
                </div>
   
              </div>
        </div>
      
    </div>
  )
}

export default CreateResume
