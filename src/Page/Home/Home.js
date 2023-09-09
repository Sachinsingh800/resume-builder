import React from 'react'
import style from "./Home.module.css"
import resume  from "../../Component/Images/resume.png"

function Home() {
  return (
    <div className={style.main}>
     
            <div className={style.heading}>
            <h1><span style={{color:"red"}}>Unlock </span>Your Potential, One Resume at a Time</h1>
             <h4>Create Your Resume For Free</h4>
             <button>Create Resume</button>
            </div>

    
        <div className={style.right_box}>
            <div className={style.img_box}>
                <img src={resume} alt='resume' />
            </div>
        </div>
   
    </div>
  )
}

export default Home
