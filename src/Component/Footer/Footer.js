import React from "react";
import style from "./Footer.module.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
// import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  function handleClicked(click) {
    window.open(click);
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling animation
    });
  }

  return (
    <div className={style.containermain}>
      <div className={style.main}>
        <div className={style.logobox}>
          <Link to={"/"} onClick={scrollToTop}>
            <img className={style.img} src={logo} alt="logo" />
          </Link>
          <p className={style.paragraph}>
            Easyryt Software Solutions offers the tools you require to
            revolutionize & expedite your business. We stand as a prominent
            software development enterprise with over a decade of experience in
            crafting cutting-edge resolutions.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul className={style.ul}>
            <Link to={"/Mobile-App-Development"} onClick={scrollToTop}>
              <li>Mobile App Development</li>
            </Link>
            <Link to={"/IOS-Application-Development-Services"} onClick={scrollToTop}>
              <li>IOS Development</li>
            </Link>
            <Link to={"/Android-Application-Development-Services"} onClick={scrollToTop}>
              <li>Android Development</li>
            </Link>
            <Link to={"/Web-Application-Development"} onClick={scrollToTop}>
              <li>Web App Development</li>
            </Link>
            {/* <Link to={""}>
              <li>Blockchain</li>
            </Link>
            <Link to={""}>
              <li>Staff Automation</li>
            </Link> */}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul className={style.ul}>
            <Link to={"/About-Us"} onClick={scrollToTop}>
              <li>About easyryt</li>
            </Link>
            {/* <Link to={""}>
              <li>Our Team</li>
            </Link> */}
            {/* <Link to={""}>
              <li>Event activities</li>
            </Link> */}
            {/* <Link to={""}>
              <li>Careers</li>
            </Link> */}
            <Link to={"/Contact-Us"} onClick={scrollToTop}>
              <li>Contact Us</li>
            </Link>
            <Link to={"/PrivacyPolicy"} onClick={scrollToTop}>
              <li>Privacy Policy</li>
            </Link>
            {/* <Link to={""}>
              <li>Portfolio</li>
            </Link> */}
          </ul>
        </div>
        <div className={style.AddressDiv}>
          <h4>Contact For Sales</h4>
          <ul className={style.ul}>
            <li>info@easyryt.com</li>
            <li>+91 7678109682</li>
            <li>
              <h6>Address</h6>
            </li>
            <li className={style.address}>T-471 Gali, Pahar Wali Gali, Quresh Nagar, Sarai Khalil, Sadar Bazaar, Delhi, 110006</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={style.bottomBox}>
        <h5 onClick={() => handleClicked("https://www.instagram.com/easyryt/")}>
          <BsInstagram />
        </h5>
        <h5
          onClick={() =>
            handleClicked("https://www.facebook.com/easyrytofficial/")
          }
        >
          {/* <BsFacebook /> */}
        </h5>
        <h5 onClick={() => handleClicked("https://twitter.com/EasyRyt")}>
          <BsTwitter />
        </h5>
        <h5
          onClick={() =>
            handleClicked("https://www.linkedin.com/company/easyryt")
          }
        >
          <AiFillLinkedin />
        </h5>
        <h5 onClick={() => handleClicked("https://www.youtube.com/@easyryt")}>
          <AiFillYoutube />
        </h5>
      </div>
    </div>
  );
}

export default Footer;
