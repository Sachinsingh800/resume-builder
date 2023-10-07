import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ImageModal.module.css"
import CropImage from '../CropImage/CropImage';
import {ResumeTemplates} from '../ResumeTemplates/ResumeTemplates';
import Template_1 from '../ResumeTemplates/Template_1/Template_1';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius:"10px",
  boxShadow: 24,
  p: 4,
};

export default function ImageModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className={styles.btn} onClick={handleOpen}>Upload Image</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className={styles.img_container}>
                <button onClick={() => handleClose()} className={styles.Close_btn}>X</button>
            <div className={styles.left_box}>
            <button onClick={() =>  handleClose()} className={styles.save_button}>Save  </button>
               <CropImage/>
           
               </div>
               <div className={styles.right_box}>
               <div className={styles.Card}>
                <div >
                <Template_1/>
                </div>
                </div>
               </div>
            </div>
        
        </Box>
      </Modal>
    </div>
  );
}
