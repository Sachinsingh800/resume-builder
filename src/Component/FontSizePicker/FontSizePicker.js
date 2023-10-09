import React from 'react';
import { fontSizeState } from '../../Recoil'; // Import the Recoil atom for font size
import style from './FontSizePicker.module.css';
import { useRecoilState } from 'recoil';

function FontSizePicker() {
  const [selectedFontSize, setSelectedFontSize] = useRecoilState(fontSizeState);

console.log(selectedFontSize)

  const fontSizeOptions = [
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '28px',
  ];

  return (
    <div className={style.font_box}>
      <h5>Choose font size</h5>
      <select
        value={selectedFontSize}
        onChange={(e) => setSelectedFontSize(e.target.value)}
      >
        {fontSizeOptions.map((fontSize, index) => (
          <option key={index} value={fontSize}>
            {fontSize}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FontSizePicker;
