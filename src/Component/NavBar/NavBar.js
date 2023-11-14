import React, { useEffect, useState } from 'react';
import style from './NavBar.module.css';
import logo from '../Images/logo.png';
import ServicesOption from '../ServicesOption/ServicesOption';
import { Link } from 'react-router-dom';
import { getUserProfile } from '../../Api/Api';
import ServicesOptionList from '../ServicesOption/ServicesOption';

function NavBar() {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [isCoverLetterHovered, setIsCoverLetterHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const authToken = JSON.parse(localStorage.getItem('token'));
  const [user, setUser] = useState([]);

  useEffect(() => {
    handleuserProfile();
  }, []);

  const handleuserProfile = async () => {
    try {
      const response = await getUserProfile();

      if (response.status === true) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data)); // Move this line here
      } else {
        console.error('Error fetching user profile:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
  };

  const handleResumeHover = () => {
    setIsResumeHovered(true);
    setIsCoverLetterHovered(false);
    setIsUserHovered(false);
  };

  const handleResumeLeave = () => {
    setIsResumeHovered(false); // Set to false when leaving the Resume dropdown
  };

  const handleCoverLetterHover = () => {
    setIsCoverLetterHovered(true);
    setIsResumeHovered(false);
    setIsUserHovered(false);
  };

  const handleCoverLetterLeave = () => {
    setIsCoverLetterHovered(false); // Set to false when leaving the Cover Letter dropdown
  };

  const handleUserHover = () => {
    setIsUserHovered(true);
    setIsCoverLetterHovered(false);
    setIsResumeHovered(false);
  };

  const handleUserLeave = () => {
    setIsUserHovered(false); // Set to false when leaving the user dropdown
  };

  return (
    <div className={style.main}>
      <Link to={'/'}>
        <img className={style.img} src={logo} alt='logo' />
      </Link>

      <div className={style.rightsection}>
        <h4 className={isResumeHovered ? style.active : style.notActive} onMouseEnter={handleResumeHover}>
          Resume
        </h4>

        {isResumeHovered && (
          <div className={style.servicesDiv} onMouseLeave={handleResumeLeave}>
      
            <ServicesOptionList/>
          </div>
        )}
        <h4 className={isCoverLetterHovered ? style.active : style.notActive} onMouseEnter={handleCoverLetterHover}>
          Cover Letter
        </h4>

        {isCoverLetterHovered && (
          <div className={style.servicesDiv} onMouseLeave={handleCoverLetterLeave}>
            <Link to={"/CoverLetterForm"}> <h1>Create Cover Letter</h1></Link>
          </div>
        )}
        {authToken ? (
          <>
            <h3 className={style.user} onMouseEnter={handleUserHover}>
              {user?.name}
            </h3>
            {isUserHovered && (
              <div className={style.logout_box} onMouseLeave={handleUserLeave}>
                <p onClick={handleLogOut}>Log Out</p>
                <Link to={'/Profile'}>
                  <p>Profile</p>
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <Link to={'/Form'}>
              <h4>Create & Login </h4>
            </Link>
       
          </>
        )}
        <Link to={'/Blog'}>
          <h4>Blog</h4>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
