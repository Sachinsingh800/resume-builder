import React from "react";
import { Divider } from "@mui/material";
import style from "./Template_14.module.css";
import dp from "../../Images/dp.png";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProgressBar from "../../ProgressBar/ProgressBar";

const Template_14 = () => {
  return (
    <div className={style.main}>
      <div className={style.user_header}>
        <div className={style.image_box}>
          <div className={style.img_box}>
            <img src={dp} alt="dp" />
          </div>
          <div className={style.profession_box}>
            <h5 className={style.name}>frontend Developer</h5>
          </div>
        </div>
        <div className={style.name_box}>
          <h1 className={style.name}>JESSICA CLAIRE</h1>
          <p className="section-content">
            Lorem Ipsum is simply dummy text of scrambled it to make a ty It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more.
          </p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.right_section}>
          <br />
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

          <br />

          <div className={style.section}>
            <h2 className="section-title">SKILLS</h2>

            <ul className={style.skills_list}>
              <li>
                <span>javascript</span>{" "}
                <span className={style.ProgressBar_list}>
                  <ProgressBar bgcolor="black" progress={100} height={5} />
                </span>
              </li>
              <li>
                <span>javascript</span>{" "}
                <span className={style.ProgressBar_list}>
                  <ProgressBar bgcolor="black" progress={70} height={5} />
                </span>
              </li>
              <li>
                <span>javascript</span>{" "}
                <span className={style.ProgressBar_list}>
                  <ProgressBar bgcolor="black" progress={30} height={5} />
                </span>
              </li>
              <li>
                <span>javascript</span>{" "}
                <span className={style.ProgressBar_list}>
                  <ProgressBar bgcolor="black" progress={70} height={5} />
                </span>
              </li>
              <li>
                <span>javascript</span>{" "}
                <span className={style.ProgressBar_list}>
                  <ProgressBar bgcolor="black" progress={50} height={5} />
                </span>
              </li>
            </ul>
          </div>

          <div className={style.section}>
            <h2 className="section-title">LANGUAGE</h2>

            <ul className={style.skills_list}>
              <li>Hindi</li>
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>

          <div className={style.section}>
            <h2 className="section-title">AWARDS</h2>

            <ul className={style.skills_list}>
              <li>Hindi</li>
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>
        </div>
        <div className={style.left_section}>
          <div className={style.section}>
            <h2 className={style.section_title}>PROFESSIONAL EXPERIENCE</h2>
<ul className={style.ul}>
    <li>
    <div className={style.work_entry}>
              <p className="date">2019.08 - Present</p>
              <div>
                <h3 className="position">Software Engineer</h3>
                <p className="company">ABC Company</p>
                <p>
                  Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
    </li>
    <li>
    <div className={style.work_entry}>
              <p className="date">2019.08 - Present</p>
              <div>
                <h3 className="position">Software Engineer</h3>
                <p className="company">ABC Company</p>
                <p>
                  Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
    </li>
    <li>
    <div className={style.work_entry}>
              <p className="date">2019.08 - Present</p>
              <div>
                <h3 className="position">Software Engineer</h3>
                <p className="company">ABC Company</p>
                <p>
                  Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
    </li>
    <li>
    <div className={style.work_entry}>
              <p className="date">2019.08 - Present</p>
              <div>
                <h3 className="position">Software Engineer</h3>
                <p className="company">ABC Company</p>
                <p>
                  Lorem Ipsum is simply dummy text of Lorem Ipsum passages, and
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
    </li>
</ul>
         
          </div>

          <div className={style.sections}>
            <h2 >EDUCATION</h2>
<ul className={style.ul}>
    <li className={style.edu_entry} >
    <div className={style.work_entry}>
              <p className="date">2019.08 - 2023.09</p>

              <div>
                <h3 className="degree">Masters in Data Science</h3>
                <p className="university">ABC College</p>
              </div>
            </div>
    </li>
    <li className={style.edu_entry} >
    <div className={style.work_entry}>
              <p className="date">2019.08 - 2023.09</p>

              <div>
                <h3 className="degree">Masters in Data Science</h3>
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

export default Template_14;
