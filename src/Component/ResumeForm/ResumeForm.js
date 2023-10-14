import React, { useState } from 'react'
import style from "./ResumeForm.module.css"
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { resumeType } from '../../Recoil'
import { useRecoilState } from 'recoil'

function ResumeForm() {
  const [type ,setType] = useRecoilState(resumeType)
  return (
    <div className={style.main}>
        <NavBar/>
        <h1>How Do you wanna start ?</h1>
        <div className={style.container}>
            <div>
                <h2>Create Resume for Fresher</h2>
               <Link to={"/CreateResume"}><button>Get start</button></Link> 
            </div>
            <div>
                <h2>Create Resume for Professional</h2>
                <Link to={"/CreateResume"}><button >Get start</button></Link> 
            </div>
        </div>
       
    </div>
  )
}

export default ResumeForm
