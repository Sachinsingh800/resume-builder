import * as React from 'react';
import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./ResumeModal.module.css"
import generatePDF from "react-to-pdf";
import { useState } from 'react';
import ColorPlate from '../ColorPlate/ColorPlate';
import { useRecoilValue, useRecoilState } from 'recoil';
import { resumeTemplates, chooseTemplates, imageresumeTemplates, modalValue, resumeTemplatesForFresher } from '../../Recoil';
import Fonts from '../Fonts/Fonts';
import CustomCursor from '../CustomCursor/CustomCursor';

const style = {
  position: 'absolute',
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1,
  height: 1,
  bgcolor: 'background.paper',
  border: 'none',
  outline: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function ResumeModal() {
  const [modal, setModal] = useRecoilState(modalValue);
  const [templateNo, setTemplateNo] = useState(JSON.parse(localStorage.getItem("templateid")));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setModal(false)
  };
  const resumeType= JSON.parse(localStorage.getItem("resumetype"))
  const templates = useRecoilValue(resumeTemplates);
  const templates2 = useRecoilValue(resumeTemplatesForFresher);
  const [imgtemplate, setImgTemplateNo] = useRecoilState(imageresumeTemplates);
  console.log(templateNo,"temp no modal")
  const targetRef = useRef();



  useEffect(() => {
    if (modal === true) {
      handleOpen() // Call your function when `modal` becomes true
    }
  }, [modal]);

  useEffect(() => {
    const storedTemplateId = JSON.parse(localStorage.getItem("templateid"));
    if (storedTemplateId !== templateNo) {
      setTemplateNo(storedTemplateId);
    }
  }, []);





  const handleFilterTemplates = (index) => {
    localStorage.setItem("templateid", JSON.stringify(index));
    setTemplateNo(index);
  }

  

  return (
    <div>
      <div className={styles.preview_box} onClick={handleOpen}>
        <div className={styles.preview_btn}>
          <h1 className={styles.preview}>Preview</h1>
        </div>
        <div className={styles.preview_template} >
          <img src={imgtemplate[templateNo]} alt={`template-${templateNo}`} />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
  
          <div className={styles.resume_container}>
            <button onClick={() => handleClose()} className={styles.Close_btn}>X</button>
            <div className={styles.resume}>
              <div ref={targetRef} id='content'>
                {resumeType === "Fresher" ? templates2[templateNo]  : templates[templateNo] }
              </div>
            </div>
          </div>
          <div className={styles.tools_box}>
            <h3>Customized Your Resume</h3>
            <div className={styles.ColorPlate}>
              <ColorPlate />
            </div>
            <div>
              <Fonts />
            </div>
            <div className={styles.template_box}>
              {imgtemplate.map((item, index) =>
                <div className={styles.template_card} key={index} onClick={() => handleFilterTemplates(index)}>
                  <img className={styles._card} src={item} alt={`template-${index}`} />
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
