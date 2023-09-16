import React, { useState } from 'react';
import style from './NavBar.module.css';
import logo from '../Images/logo.png';
import ServicesOption from '../ServicesOption/ServicesOption';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isCoverLetterHovered, setIsCoverLetterHovered] = useState(false);

  const handleResumeHover = () => {
    setIsResumeHovered(true);
    setIsCoverLetterHovered(false); // Close the Cover Letter dropdown
  };

  const handleResumeLeave = () => {
    setIsResumeHovered(false);
  };

  const handleCoverLetterHover = () => {
    setIsCoverLetterHovered(true);
    setIsResumeHovered(false); // Close the Resume dropdown
  };

  const handleCoverLetterLeave = () => {
    setIsCoverLetterHovered(false);
  };

  return (
    <div className={style.main}>
      <Link to={"/"}>
        <img className={style.img} src={logo} alt='logo' />
      </Link>

      <div className={style.rightsection}>
        <h4
          className={isResumeHovered ? style.active : style.notActive}
          onMouseEnter={handleResumeHover}
       
        >
          Resume
        </h4>

        {isResumeHovered && (
          <div className={style.servicesDiv}    onMouseLeave={handleResumeLeave}>
            <span className={style.arrow}>▲</span>
            <ServicesOption />
          </div>
        )}
        <h4
          className={isCoverLetterHovered ? style.active : style.notActive}
          onMouseEnter={handleCoverLetterHover}
        
        >
          Cover Letter
        </h4>

        {isCoverLetterHovered && (
          <div className={style.servicesDiv}   onMouseLeave={handleCoverLetterLeave}>
            <span className={style.arrow1}>▲</span>
            <ServicesOption />
          </div>
        )}

        <h4>Sign in</h4>
        <h4>Sign up</h4>
      </div>
    </div>
  );
}

export default NavBar;
