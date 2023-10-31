import React, { useEffect } from 'react'
import { getlastResume } from '../../Api/Api';
import Template_1 from '../ResumeTemplates/Template_1/Template_1';
import style  from "./LastResume.module.css"
import EditNoteIcon from '@mui/icons-material/EditNote';




function LastResume() {

    useEffect(()=>{
        handleLastResume()
    },[])

    const handleLastResume = async () => {
        try {
          const response = await getlastResume();
    
          if (response.status === true) {
             console.log(response,"response")
          } else {
            console.error("Error fetching user profile:", response.data.message);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error.message);
        }
      };
  return (
    <div className={style.main}>
        <div className={style.head}>
            <h2>Your Resume</h2>
            <button className={style.edit_btn}><EditNoteIcon/></button>
        </div>
        <div className={style.container}>
        <Template_1/>
        </div>
       
    </div>
  )
}

export default LastResume
