import React, { useEffect, useState } from 'react';
import style from './NavBar.module.css';
import logo from '../Images/logo.png'
import ServicesOption from '../ServicesOption/ServicesOption';
import { Link } from 'react-router-dom';
import { getUserProfile } from '../../Api/Api';

function NavBar() {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isCoverLetterHovered, setIsCoverLetterHovered] = useState(false);
const authToken=JSON.parse(localStorage.getItem("token"))
const [user,setUser] = useState([])


useEffect(() => {
  handleuserProfile();
}, []);

const  handleuserProfile= async () => {
  try {
    const response = await getUserProfile();

    if (response.status === true) {
      setUser(response.data)
    } else {
      console.error('Error fetching categories:', response.data.message);
    }
  } catch (error) {
    console.error('Error fetching categories:', error.message);
  }
};

const handleLogOut=()=>{
  localStorage.clear()
}



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
{
  authToken ? 
  <>
  {user?.name}
  <button onClick={handleLogOut}>Log Out</button>
  </> 
   :
    <Link to={"/SignIn"}><h4>Sign In</h4></Link>
}

<Link to={"/SignUp"}><h4>Sign Up</h4></Link>
      
      </div>
    </div>
  );
}

export default NavBar;
