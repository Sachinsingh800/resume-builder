import React, { useEffect, useState } from "react";
import styles from "./UserResume.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useRecoilState } from "recoil";
import { chooseTemplates, imageresumeTemplates, loadingStatus, updateButton } from "../../Recoil";
import { useNavigate } from "react-router-dom";
import { getAllUserResumes } from "../../Api/Api";

function UserResume() {
  const [loading, setLoading] = useRecoilState(loadingStatus);
  const [updateBtn, setUpdateBtn] = useRecoilState(updateButton);
  const [allUserResume, setAllUserResume] = useState([]);
  const [imgtemplate, setImgTemplateNo] = useRecoilState(imageresumeTemplates);
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const navigate = useNavigate();
  useEffect(() => {
    handleLastResume();
  }, []);

  const handleLastResume = async () => {
    setLoading(true);
    try {
      const response = await getAllUserResumes();
      if (response.status) {
        setAllUserResume(response?.data);
        console.log(response?.data,"stringyfy")
      } else {
        console.error("Error fetching user profile:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditData = (id) => {
    const resumeData = allUserResume.filter((item) => item.tempId === id);
    localStorage.setItem("resume", JSON.stringify(resumeData[1]));
    sessionStorage.setItem("update", true);
    localStorage.setItem("templateid", JSON.stringify(id));
    setTemplateNo(id);
    window.location.href = "/CreateResume";
  };

  return (
    <div className={styles.main}>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.heading}>
        <h1>All Resumes</h1>
      </div>
      <br />
      {loading && <p>Loading...</p>}
      <div className={styles.template_box}>
        {allUserResume.map((resume, index) => {
          const template = imgtemplate.find((img) => img.id === resume.tempId);
          return (
            <div key={resume.tempId} className={styles.template_card_wrapper}>
              <div
                className={styles.template_card}
                onClick={() => handleEditData(resume.tempId)}
              >
                {template && <img src={template.resumeImg} className={styles._card} alt="Resume Template" />}
              </div>
              <p>{resume.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserResume;
