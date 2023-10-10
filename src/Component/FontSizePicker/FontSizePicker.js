import React from 'react';
import { fontSizeState } from '../../Recoil';
import style from './FontSizePicker.module.css';
import { useRecoilState } from 'recoil';

function FontSizePicker() {
  const [selectedFontSize, setSelectedFontSize] = useRecoilState(fontSizeState);

  console.log(selectedFontSize);

  const fontSizeOptions = [12, 14, 16, 18, 20, 24, 28];

  return (
    <div className={style.font_box}>
      <h5>Choose font size</h5>
      <input
        type="range"
        min={Math.min(...fontSizeOptions)}
        max={Math.max(...fontSizeOptions)}
        value={selectedFontSize}
        onChange={(e) => setSelectedFontSize(parseInt(e.target.value))}
      />
    </div>
  );
}

export default FontSizePicker;
