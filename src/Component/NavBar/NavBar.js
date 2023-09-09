import React from 'react'
import style from "./NavBar.module.css"

function NavBar() {
  return (
    <div className={style.main}>
        <h5>logo</h5>
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
