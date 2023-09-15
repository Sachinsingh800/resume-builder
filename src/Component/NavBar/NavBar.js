import React, { useState } from 'react';
import style from './NavBar.module.css';
import logo from '../Images/logo.png';
import ServicesOption from '../ServicesOption/ServicesOption';
import { Link } from 'react-router-dom';




function NavBar() {
  const [age, setAge] = useState('');
  const [activeLink, setActiveLink] = useState(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleServicesHover = () => {
    setIsServicesHovered(true);
    setActiveLink('services');
  };

  const handleServicesLeave = () => {
    setIsServicesHovered(false);
    setActiveLink(null);
  };

  return (
    <div className={style.main} >
     
    <Link to={"/"}> <img className={style.img} src={logo} alt='logo' /></Link>  
      <div className={style.HamburgerBtn}>
      {/* <HamburgerBtn/>  */}
      </div>
     
      <div className={style.rightsection}>
 

        <h4
          className={activeLink === 'services' ? style.active : style.notActive}
          onMouseEnter={handleServicesHover}
        >
          Resume
        </h4>
     
        {isServicesHovered && (
          <div onMouseLeave={handleServicesLeave} className={style.servicesDiv}>
                <span className={style.arrow}>▲</span>
            <ServicesOption />
    
          </div>
        )}
        <h5>Cv</h5>
        <h5>About</h5>
      </div>
    </div>
  );
}

export default NavBar;
