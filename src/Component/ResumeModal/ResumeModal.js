import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ResumeModal.module.css"
import CropImage from '../CropImage/CropImage';
import {ResumeTemplates} from '../ResumeTemplates/ResumeTemplates';
import generatePDF from "react-to-pdf";
import { useRef,useState } from 'react';
import ColorPlate from '../ColorPlate/ColorPlate';


const style = {
  position: 'absolute',
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1,
  height:1,
  bgcolor: 'background.paper',
  border: 'none',
  outline:"none",
  borderRadius:"10px",
  boxShadow: 24,
  p: 4,
};



export default function ResumeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const targetRef = useRef();

  const pdfOptions = {
    unit: "mm",
    format: "a4",
    orientation: "portrait", // or 'landscape'
    fileName: "Easyryt.pdf",
  };
  const [template,setTempletes] = useState([
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
    <ResumeTemplates/>,
  ])
  
  return (
    <div>
      
      <div className={style.Card} onClick={handleOpen}>
      <div className={styles.Card}>
                  <div className={styles.preview_btn}>
                    <h1 className={styles.preview}>Preview</h1>
                  </div>
                <div  >
                <ResumeTemplates/>
                </div>
                </div>
                </div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <button className={styles.download_btn} onClick={() => generatePDF(targetRef, pdfOptions)}>
          Download 
        </button>
            <div className={styles.resume_container}>
    
            <button onClick={() => handleClose()} className={styles.Close_btn}>X</button>
            <div className={styles.resume}>
                <div ref={targetRef}>
                <ResumeTemplates/>
                </div>
                </div>

            </div>
        
            <div className={styles.tools_box}>
                  <h3>Customized Your Resume</h3>
      
                  <div className={styles.ColorPlate}>
                    <div>
                    <ColorPlate/>
                    </div>
                
                  </div>
                  <div  className={styles.template_box}>
    {template.map((item)=>
    <div className={styles.template_card}>
      <div className={styles._card}> {item}</div> 
    </div>
    )}
</div>
                </div>
        </Box>
      </Modal>
    </div>
  );
}
