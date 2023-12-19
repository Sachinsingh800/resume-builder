import React, { useEffect, useState } from 'react';
import { getlastResume } from '../../Api/Api';
import Template_1 from '../ResumeTemplates/Template_1/Template_1';
import style from './LastResume.module.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { resumeData, updateButton } from '../../Recoil';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Template_2 from '../ResumeTemplates/Template_2/Template_2';

function LastResume() {
  const [formData, setFormData] = useRecoilState(resumeData);
  const [updateBtn, setUpdateBtn] = useRecoilState(updateButton);
  const [data, setData] = useState([]);
  const navigate = useNavigate();





  const obj =  {
    status: true,
    message: "Resume created successfully",
    resume: {
      userId: data?._id,
      jobTitle:data?.jobTitle ,
      name: data?.name,
      summary: data?.summary,
      contact: data?.contact,
      address: data?.address,
      dob: data?.dob,
      gender: data?.gender,
      profilePicture:data?.profilePicture ,
      education: data?.education,
      work: data?.work,
      skillsAndLevel: data?.skillsAndLevel ,
      internShips: data?.internShips,
      projects: data?.projects,
      socialLinks: data?.socialLinks,
      knownLanguages: data?.knownLanguages,
      certifications:data?.certifications,
      awards: data?.awards,
      volunteerExperience: data?.volunteerExperience,
      areaOfInterest: data?.areaOfInterest,
      references:data?.references,
      interestedIn: "job",

    },
  }
  console.log(obj,"obj")
  console.log(formData,"obj2")

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
    // setFormData(obj);
    // localStorage.setItem('resume', JSON.stringify(obj));
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
