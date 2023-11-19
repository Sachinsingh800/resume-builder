import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Slider.module.css';
import { Link } from 'react-router-dom';
import resume_1 from "../Images/Template_1.png";
import resume_2 from "../Images/Template_2.png";
import resume_3 from "../Images/Template_3.png";
import resume_4 from "../TemplateImages/1.png"
import resume_5 from "../TemplateImages/2.png"
import resume_6 from "../TemplateImages/3.png"
import resume_7 from "../TemplateImages/4.png"
import resume_8 from "../TemplateImages/5.png"
import resume_9 from "../TemplateImages/6.png"
import resume_10 from "../TemplateImages/7.png"
import resume_11 from "../TemplateImages/8.png"
import resume_12 from "../TemplateImages/9.png"
import resume_13 from "../TemplateImages/10.png"
import resume_14 from "../TemplateImages/11.png"
import resume_15 from "../TemplateImages/12.png"
import resume_16 from "../TemplateImages/13.png"
import resume_17 from "../TemplateImages/14.png"
import resume_18 from "../TemplateImages/15.png"
import resume_19 from "../TemplateImages/16.png"
import resume_20 from "../TemplateImages/17.png"
import resume_21 from "../TemplateImages/18.png"
import resume_22 from "../TemplateImages/19.png"
import resume_23 from "../TemplateImages/20.png"
import resume_24 from "../TemplateImages/21.png"
import resume_25 from "../TemplateImages/22.png"
import resume_26 from "../TemplateImages/23.png"
import resume_27 from "../TemplateImages/24.png"
import resume_28 from "../TemplateImages/25.png"
import resume_29 from "../TemplateImages/26.png"
import resume_30 from "../TemplateImages/27.png"
import { useRecoilState } from "recoil";
import { chooseTemplates } from '../../Recoil'; 


const imagePaths = [
  resume_1, 
  resume_2, 
  resume_3,
  resume_5,
  resume_6,
  resume_7,
  resume_8,
  resume_9,
  resume_10,
  resume_11,
  resume_12,
  resume_13,
  resume_14,
  resume_15,
  resume_16,
  resume_17,
  resume_18,
  resume_19,
  resume_20,
  resume_21,
  resume_22,
  resume_23,
  resume_24,
  resume_25,
  resume_26,
  resume_27,
  resume_28,
  resume_29,
  resume_30,
];

export default function Slider() {
  const carouselRef = useRef(null);

  const [templateNo, setTemplateNo] = useRecoilState(chooseTemplates);
    
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={style.main}>
      <Carousel ref={carouselRef} responsive={responsive}>
        {imagePaths.map((path, index) => (
        <Link to={"/ResumeForm"}>  <div className={style.item} key={index} onClick={()=>setTemplateNo(index)}>
            <img src={path} alt={`resume ${index + 1}`} />
          </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
