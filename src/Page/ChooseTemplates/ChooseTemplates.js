import React, { useState } from 'react'
import style from "./ChooseTemplates.module.css"
import NavBar from '../../Component/NavBar/NavBar'
import ResumeTemplates from '../../Component/ResumeTemplates/ResumeTemplates'
import { Link } from 'react-router-dom'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { ChooseColor } from '../../Recoil'

function ChooseTemplates() {
  const [color, setColor] = useRecoilState(ChooseColor);
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
      <div className={style.colorplates_box}>
        <h2>colors</h2>
      <ul >
          <li
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          ></li>
          <li
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          ></li>
          <li
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          ></li>
          <li
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          ></li>
        </ul>
        </div>
<div  className={style.template_box}>
    {template.map((item)=>
    <div className={style.template_card}>
      <Link to={"/ResumeForm"}><div > {item}</div> </Link>   
    </div>
    )}
</div>
            
      </div >
    </div>
  )
}

export default ChooseTemplates
