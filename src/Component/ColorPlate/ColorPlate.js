import React from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { ChooseColor } from '../../Recoil'
import style from "./ColorPlate.module.css"

function ColorPlate() {
    const [color, setColor] = useRecoilState(ChooseColor);


    const handleColorChange = (event) => {
      setColor(event.target.value);
    };
  return (
  
         <div className={style.colorplates_box}>
        <h2>Choose color</h2>
      <ul >
          <li
            style={{ backgroundColor: "#113f67" }}
            onClick={() => setColor("#113f67")}
          ></li>
          <li
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          ></li>
          <li
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          ></li>
          <li
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          ></li>
          <li >
          <input
          className={style.customColor_btn}
            type="color"
            value={color}
            onChange={handleColorChange}
          />
          </li>
        </ul>
        </div>
  
  )
}

export default ColorPlate
