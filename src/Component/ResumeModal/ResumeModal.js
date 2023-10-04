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
import { useRecoilValue,useRecoilState } from 'recoil';
import { resumeTemplates,chooseTemplates } from '../../Recoil';


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
  const templates = useRecoilValue(resumeTemplates)
  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
  const targetRef = useRef();

  const pdfOptions = {
    unit: "mm",
    format: "a4",
    orientation: "portrait", // or 'landscape'
    fileName: "Easyryt.pdf",
  };

  const exportHTML = () => {
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    const footer = '</body></html>';

    const sourceHTML =
      header + document.getElementById('content').innerHTML + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement('a');
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
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
               {templates[templateNo]}
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
        <button className={styles.download_btn2}  onClick={exportHTML}>Export to DOC</button>
            <div className={styles.resume_container}>
    
            <button onClick={() => handleClose()} className={styles.Close_btn}>X</button>
            <div className={styles.resume}>
                <div ref={targetRef} id='content'>
                {templates[templateNo]}
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
