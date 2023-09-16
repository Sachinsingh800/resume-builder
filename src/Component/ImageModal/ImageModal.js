import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ImageModal.module.css"
import CropImage from '../CropImage/CropImage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
            <div className={styles.left_box}>
               <CropImage/>
               </div>
               <div className={styles.right_box}>
                <h3>jdkjsjdkskjdkjsgjdjsgjd</h3>
                <h3>jdkjsjdkskjdkjsgjdjsgjd</h3>
                <h3>jdkjsjdkskjdkjsgjdjsgjd</h3>
                <h3>jdkjsjdkskjdkjsgjdjsgjd</h3>
               </div>
            </div>
        
        </Box>
      </Modal>
    </div>
  );
}