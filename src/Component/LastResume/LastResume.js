import React, { useEffect, useState } from 'react';
import { getlastResume } from '../../Api/Api';
import Template_1 from '../ResumeTemplates/Template_1/Template_1';
import style from './LastResume.module.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { resumeData, updateButton,resumeTemplates } from '../../Recoil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';


function LastResume() {
  const [updateBtn, setUpdateBtn] = useRecoilState(updateButton);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const templates = useRecoilValue(resumeTemplates);
  const [count ,setCount ] = useState(0)


  useEffect(() => {
    handleLastResume();
  },[]);




  const handleLastResume = async () => {
    try {
      const response = await getlastResume();

      if (response.status === true) {
        setData(response?.data);
        console.log(response,"response")
        localStorage.setItem('resume', JSON.stringify(response?.data));
      
      } else {
        console.error('Error fetching user profile:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }finally{
      setCount(count + 1)
    }
  };


  const handleEditResume = () => {

    setUpdateBtn(true);
    navigate("/CreateResume")
   
  };

  return (
    <div className={style.main}>
      <div className={style.head}>
        <h2>Your Resume</h2>
        <button className={style.edit_btn} onClick={handleEditResume}>
          <EditNoteIcon />
        </button>
      </div>
      <div className={style.container}>
      {templates[data?.tempId]}
      </div>
    </div>
  );
}

export default LastResume;









