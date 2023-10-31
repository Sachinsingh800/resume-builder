import React, { useState, useEffect } from 'react';
import style from './Profile.module.css';
import NavBar from '../../Component/NavBar/NavBar';
import ProfileDetails from '../../Component/ProfileDetails/ProfileDetails';


function Profile() {



  return (
    <div className={style.main}>
      <NavBar />
    <div className={style.container}>
         <div className={style.left_box}>
            <ProfileDetails/>
         </div>
         <div className={style.right_box}>

         </div>
    </div>

    </div>
  );
}

export default Profile;
