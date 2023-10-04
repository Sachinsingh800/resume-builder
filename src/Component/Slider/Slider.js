import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Slider.module.css';
import { Link } from 'react-router-dom';
import resume_1 from "../Images/Template_1.png";
import resume_2 from "../Images/Template_2.png";
import resume_3 from "../Images/Template_3.png";
import { useRecoilState } from "recoil";
import { chooseTemplates } from '../../Recoil'; 


const imagePaths = [resume_1, resume_2, resume_3];

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
        <Link to={"/ResumeForm"}>  <div key={index} onClick={()=>setTemplateNo(index)}>
            <img src={path} alt={`resume ${index + 1}`} />
          </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
