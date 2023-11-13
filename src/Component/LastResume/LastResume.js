import React, { useEffect, useState } from 'react';
import { getlastResume } from '../../Api/Api';
import Template_1 from '../ResumeTemplates/Template_1/Template_1';
import style from './LastResume.module.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { resumeData, updateButton } from '../../Recoil';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

function LastResume() {
  const [formData, setFormData] = useRecoilState(resumeData);
  const [updateBtn, setUpdateBtn] = useRecoilState(updateButton);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const obj = {
    status: true,
    message: 'Resume created successfully',
    resume: data,
  };
console.log(formData,"obj")

  useEffect(() => {
    handleLastResume();
    getResumedata()
  }, []);

const getResumedata=()=>{
  setFormData(obj)
}


  const handleLastResume = async () => {
    try {
      const response = await getlastResume();

      if (response.status === true) {
        setData(response?.data);
        console.log(response,"response")
      } else {
        console.error('Error fetching user profile:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  };

  const handleEditResume = () => {
    setFormData(obj);
    localStorage.setItem('resume', JSON.stringify(obj));
    setUpdateBtn(true);
    navigate('/CreateResume');
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
        <Template_1 />
      </div>
    </div>
  );
}

export default LastResume;
