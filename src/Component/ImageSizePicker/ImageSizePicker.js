import React from 'react';
import { imageSizeState  } from '../../Recoil';
import style from './ImageSizePicker.module.css';
import { useRecoilState } from 'recoil';

function ImageSizePicker() {
  const [selectedImageSize, setSelectedImageSize] = useRecoilState(imageSizeState );



  const fontSizeOptions = [12, 14, 16, 18, 20, 24, 28];

  return (
    <div className={style.Img_box}>
      <h5>Choose Image Size</h5>
      <input
        type="range"
        min={Math.min(...fontSizeOptions)}
        max={Math.max(...fontSizeOptions)}
        value={selectedImageSize}
        onChange={(e) => setSelectedImageSize(parseInt(e.target.value))}
      />
    </div>
  );
}

export default ImageSizePicker;
