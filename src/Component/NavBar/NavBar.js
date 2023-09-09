import React from 'react'
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={style.main}>
       <Link to={"/"}><h5>logo</h5></Link> 
     <ul>
        <li>Resume</li>
        <li>Cv</li>
        <li>About</li>
        <li>signin</li>
     </ul>
    </div>
  )
}

export default NavBar
