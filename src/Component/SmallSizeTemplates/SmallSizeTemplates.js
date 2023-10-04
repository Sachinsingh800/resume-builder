import React ,{useState} from 'react'
import Template_1 from '../../Component/ResumeTemplates/Template_1/Template_1'
import Template_2 from '../../Component/ResumeTemplates/Template_2/Template_2'
import Template_3 from '../../Component/ResumeTemplates/Template_3/Template_3'
import style from "./SmallSizeTemplates.module.css"
import { Link } from 'react-router-dom'
import imgae from "../Images/Template_1.png"

function SmallSizeTemplates() {
    const [template,setTempletes] = useState([
        <Template_1/>,
        <Template_2/>,
        <Template_3/>,
        <Template_3/>,
        <Template_2/>,
        <Template_1/>,
      ])
  return (
    <div className={style.main}>
<div  className={style.template_box}>
   
    {template.map((item)=>
    <div className={style.template_card}>

      <Link to={"/ResumeForm"}><div className={style._card}> {item}</div> </Link>   

    </div>
    )}
</div>

    </div>
  )
}

export default SmallSizeTemplates
