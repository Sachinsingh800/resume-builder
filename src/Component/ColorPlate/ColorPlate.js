import React from 'react';
import { useRecoilState } from 'recoil';
import { ChooseColor, ChooseColorSecond } from '../../Recoil';
import style from './ColorPlate.module.css';

function ColorPlate() {
  const [color1, setColor1] = useRecoilState(ChooseColor);
  const [color2, setColor2] = useRecoilState(ChooseColorSecond);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor1(newColor);

    // Calculate complementary color
    const red = parseInt(newColor.slice(1, 3), 16);
    const green = parseInt(newColor.slice(3, 5), 16);
    const blue = parseInt(newColor.slice(5, 7), 16);
    const complementaryColor = `#${(255 - red).toString(16)}${(255 - green).toString(16)}${(255 - blue).toString(16)}`;
    setColor2(complementaryColor);
  };

  return (
    <div className={style.colorplates_box}>
      <h2 >Choose color</h2>
      <ul>
        <li
          style={{ backgroundColor: '#113f67' }}
          onClick={() => setColor1('#113f67')}
        ></li>
        <li
          style={{ backgroundColor: 'orange' }}
          onClick={() => setColor1('orange')}
        ></li>
        <li
          style={{ backgroundColor: 'blue' }}
          onClick={() => setColor1('blue')}
        ></li>
        <li
          style={{ backgroundColor: 'green' }}
          onClick={() => setColor1('green')}
        ></li>
        <li>
          <input
            className={style.customColor_btn}
            type="color"
            value={color1}
            onChange={handleColorChange}
          />
        </li>
      </ul>
    </div>
  );
}

export default ColorPlate;
