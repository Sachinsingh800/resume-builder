import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_22.module.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from '@mui/icons-material/Person';
import ProgressBar from "../../ProgressBar/ProgressBar";

const Template_22 = () => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div>
          <h1 className={style.name}>JESSICA CLAIRE</h1>
          <h5 className={style.name}>frontend Developer</h5>
        </div>
        <div className={style.contact_info}>
          <div className={style.contact_value}>
            <span className={style.contact_label}>
              <LocalPhoneIcon sx={{ fontSize: "20px" }} />
            </span>
            <p className="contact-value">+91 9503942697</p>
          </div>
          <div className={style.contact_value}>
            <span className={style.contact_label}>
              <EmailIcon sx={{ fontSize: "20px" }} />
            </span>
            <p className="contact-value">ss20010126@gmail.com</p>
          </div>

          <div className={style.contact_value}>
            <span className={style.contact_label}>
              <LinkedInIcon sx={{ fontSize: "20px" }} />
            </span>
            <p className="contact-value">linkedin.com/en/5hubzzz</p>
          </div>
          <div className={style.contact_value}>
            <span className={style.contact_label}>
              <PlaceIcon sx={{ fontSize: "20px" }} />
            </span>
            <p className="contact-value">Enter Your Address here</p>
          </div>
        </div>
      </div>

      <div className={style.container}>
      <div className={style.right_section}>
          <div className="section">
            <h2 className={style.section_title}>SKILLS</h2>
          
            <ul className={style.skills_list}>
              <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height={5} /></span></li>
              <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height={5} /></span></li>
              <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height={5} /></span></li>
              <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height={5} /></span></li>
              <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height={5} /></span></li>
              <li>javascript <span> <ProgressBar bgcolor="#00CCFF" progress="40" height={5} /></span></li>
           
            </ul>
          </div>
          <br />
          <div className="section">
            <h2 className={style.section_title}>LANGUAGE</h2>
        
            <ul className={style.skills_list}>
              <li>Hindi</li>
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>
          <br />
          <div className="section">
            <h2 className={style.section_title}>INTREST</h2>
            <ul className={style.skills_list}>
              <li>Hindi</li>
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>
        </div>
        <div className={style.left_section}>
          <div className="section">
            <h2 className={style.section_title}><PersonIcon/>ABOUT</h2>
         
            <p className="section-content">
              Lorem Ipsum is simply dummy text of scrambled it to make a ty It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more.
            </p>
          </div>

          <div className={style.section}>
            <h2 className={style.section_title}><WorkIcon/>EXPERIENCE</h2>
            <Divider className="divider" />
            <ul className={style.ul}>
              <li>
                <div className={style.work_entry}>
                  <div>
                    <div className={style.title_}>
                      <h3 className="position">Software Engineer </h3>
                      <p className="date">2019.08 - Present</p>
                    </div>

                    <p className="company">ABC Company</p>
                    <p className={style.description}>
                      Lorem Ipsum is simply dummy text of Lorem Ipsum passages,
                      and Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className={style.work_entry}>
                  <div>
                    <div className={style.title_}>
                      <h3 className="position">Software Engineer </h3>
                      <p className="date">2019.08 - Present</p>
                    </div>

                    <p className="company">ABC Company</p>
                    <p className={style.description}>
                      Lorem Ipsum is simply dummy text of Lorem Ipsum passages,
                      and Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={style.section}>
            <h2 className={style.section_title}><SchoolIcon/>EDUCATION</h2>
            <Divider className="divider" />
            <ul className={style.ul}>
              <li>
                <div className={style.work_entry}>
                  <div className={style.title_}>
                    <h3 className="degree">Masters in Data Science</h3>
                    <p className="date">2019.08 - 2023.09</p>
                  </div>

                  <div>
                    <p className="university">ABC College</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={style.work_entry}>
                  <div className={style.title_}>
                    <h3 className="degree">Masters in Data Science</h3>
                    <p className="date">2019.08 - 2023.09</p>
                  </div>

                  <div>
                    <p className="university">ABC College</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={style.work_entry}>
                  <div className={style.title_}>
                    <h3 className="degree">Masters in Data Science</h3>
                    <p className="date">2019.08 - 2023.09</p>
                  </div>

                  <div>
                    <p className="university">ABC College</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Template_22;
