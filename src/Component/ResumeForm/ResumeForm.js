import React from 'react'
import style from "./ResumeForm.module.css"
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

function ResumeForm() {
  return (
    <div className={style.main}>
        <NavBar/>
        <h1>How Do you wanna start ?</h1>
        <div className={style.container}>
            <div>
                <h2>Create a New Resume</h2>
               <Link to={"/CreateResume"}><button>Get start</button></Link> 
            </div>
            <div>
                <h2>Create a New CV</h2>
                <button>Get start</button>
            </div>
        </div>
       
    </div>
  )
}

export default ResumeForm
