import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Slider.module.css';


export default function Slider() {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextSlide = (activeSlide + 4) % carouselRef.current.state.totalItems;
        carouselRef.current.goToSlide(nextSlide, false);
        setActiveSlide(nextSlide);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <div className={style.main}>
      <Carousel ref={carouselRef} responsive={responsive}>
        <div>
          <img className={style.item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU" alt="img 1" />
        </div>
        <div>
          <img className={style.item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU" alt="img 1" />
        </div>
        <div>
          <img className={style.item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU" alt="img 1" />
        </div>
        <div>
          <img className={style.item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU" alt="img 1" />
        </div>
        <div>
          <img className={style.item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU" alt="img 1" />
        </div>
        <div>
          <img className={style.item} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RCLUPq1JgEPmHByabXOF8kuno6klS2moQ&usqp=CAU" alt="img 1" />
        </div>
      
      </Carousel>
    </div>
  );
}
