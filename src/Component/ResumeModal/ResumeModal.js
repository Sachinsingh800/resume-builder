import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ResumeModal.module.css"
import CropImage from '../CropImage/CropImage';
import ResumeTemplates from '../ResumeTemplates/ResumeTemplates';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 880,
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

  return (
    <div>
      
      <div className={style.Card} onClick={handleOpen}>
      <div className={styles.Card}>
                  <div className={styles.preview_btn}>
                    <h1 className={styles.preview}>Preview</h1>
                  </div>
                <div >
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
            <div className={styles.resume_container}>
            <button onClick={() => handleClose()} className={styles.Close_btn}>X</button>
            <div className={styles.resume}>
                <div >
                <ResumeTemplates/>
                </div>
                </div>
            </div>
        
        </Box>
      </Modal>
    </div>
  );
}
