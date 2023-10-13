import React, { useState ,useEffect } from "react";
import style from "./CreateResume.module.css";
import NavBar from "../NavBar/NavBar";
import CreateResumeForm from "../CreateResumeForm/CreateResumeForm";
import ResumeModal from "../ResumeModal/ResumeModal";
import CreateResumeFormForFresher from "../CreateResumeFormForFresher/CreateResumeFormForFresher";
import {
  resumeType,
  resumeTemplates,
  summarySuggestion,
  skillSuggestion,
  interestSuggestion,
  languageSuggestion,
  suggestionData,
  educationSuggestion,
  workSuggestion,
  selectedValue1,
  selectedValue2,
  resumeData,
  intershipSuggestion,
  projectSuggestion,
  socialLinksSuggestion,
  certificationSuggestion,
  awardSuggestion,
  volunteerExperienceSuggestion,
  referenceSuggestion,
} from "../../Recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import bulb from "../../Component/Images/bulb.gif";
import cat from "../../Component/Images/cat.gif"
import panda from "../../Component/Images/panda.gif"
import panda2 from "../../Component/Images/panda2.gif"
import rabbit from "../../Component/Images/rabbit.gif"
import resume1 from "../../Component/Images/resume_img.gif"
import resume2 from "../../Component/Images/resume_img2.gif"

function CreateResume() {
  const type = useRecoilValue(resumeType);
  const sectionNo = useRecoilValue(suggestionData);
  const [summary, setSummary] = useRecoilState(summarySuggestion);
  const [skill, setSkill] = useRecoilState(skillSuggestion);
  const [lang, setLang] = useRecoilState(languageSuggestion);
  const [interest, setInterest] = useRecoilState(interestSuggestion);
  const [data, setData] = useRecoilState(resumeData);
  const [edu, setEdu] = useRecoilState(educationSuggestion);
  const [work, setWork] = useRecoilState(workSuggestion);
  const [internship, setInternShip] = useRecoilState(intershipSuggestion);
  const [project, setProject] = useRecoilState(projectSuggestion);
  const [certification, setCertification] = useRecoilState( certificationSuggestion );
  const [socialLink, setSocialLinks] = useRecoilState(socialLinksSuggestion);
  const [award, setAward] = useRecoilState(awardSuggestion);
  const [volunteer, setVolunteer] = useRecoilState(volunteerExperienceSuggestion);
  const [reference, setReference] = useRecoilState(referenceSuggestion);
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [selectedValue, setSelectedValue] = useRecoilState(selectedValue1);
  const [selectedValueForSkill, setSelectedValueForSkill] =useRecoilState(selectedValue2);

const animation_img=[
  {
anim:panda,
des:"panda",
bg:"grey"
  },
  {
anim:panda2,
des:"panda2",
bg:"white"
  },
  {
anim:rabbit,
des:"rabbit",
bg:"black"
  },
  {
anim:resume1,
des:"rabbit",
bg:"black"
  },
  {
anim:resume2,
des:"rabbit",
bg:"black"
  },

]
const [counter, setCounter] = useState(0);
const interval = 9000; // 3 seconds

useEffect(() => {
  const timer = setInterval(() => {
    setCounter((prevCounter) => (prevCounter + 1) % animation_img.length);
  }, interval);

  return () => {
    clearInterval(timer); // Clean up the interval on unmount
  };
}, [interval]);

  console.log(data.resume.skillsAndLevel, "selected value");

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleShowMore1 = () => {
    setShowMore1(!showMore1);
  };
  const toggleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  const handleLiClick = (value) => {
    setSelectedValue(value);
  };

  const addSkill = (value) => {
    // Create a new skill object
    const newSkill = {
      skills: value,
      level: "Beginner",
      _id: "uniqueId", // Provide a unique ID for the new skill
    };

    // Update the state with the new skill
    setData({
      ...data,
      resume: {
        ...data.resume,
        skillsAndLevel: [...data.resume.skillsAndLevel, newSkill],
      },
    });
  };

  const addLang = (value) => {
    // Create a new skill object
    const newLang = {
      lang: value,
      _id: "651d0603587cea4128a820fa",
    };

    // Update the state with the new skill
    setData({
      ...data,
      resume: {
        ...data.resume,
        knownLanguages: [...data.resume.knownLanguages, newLang],
      },
    });
  };

  const addIntrest = (value) => {
    // Create a new skill object
    const newLang = {
      interest: value,
      _id: "651d0603587cea4128a820ff",
    };

    // Update the state with the new skill
    setData({
      ...data,
      resume: {
        ...data.resume,
        areaOfInterest: [...data.resume.areaOfInterest, newLang],
      },
    });
  };
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.container}>
        <div className={style.left_box}>
          {type === "Fresher" ? (
            <CreateResumeFormForFresher />
          ) : (
            <CreateResumeForm />
          )}
        </div>
        <div className={style.right_box}>
          <div className={style.animation_box}>
          <div className={style.cat}>
              <img src={cat} alt="cat" />
            </div>
            <div className={style.preview_template}>
              <div>
              <ResumeModal />
              </div>
           
         <div className={style.animation} style={{backgroundColor:animation_img[counter].bg}}>
             <img src={animation_img[counter].anim} alt="img" />
         </div>
      
       </div>
          </div>
         
          <div className={style.suggestion_box}>
            {sectionNo === 1 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your summary:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {summary
                    .slice(0, showMore1 ? summary.length : 2)
                    .map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleLiClick(suggestion.summary)}
                      >
                        {suggestion.summary}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn}  onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 2 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Education :
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {edu
                    .slice(0, showMore ? edu.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                        {item.subpoints && (
                          <ul>
                            {item.subpoints.map((subitem, subindex) => (
                              <li key={subindex}>
                                <strong>{subitem.letter}</strong>{" "}
                                {subitem.content}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore}>
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 3 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Work :
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {work
                    .slice(0, showMore2 ? work.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                        {item.subpoints && (
                          <ul>
                            {item.subpoints.map((subitem, subindex) => (
                              <li key={subindex}>
                                <strong>{subitem.letter}</strong>{" "}
                                {subitem.content}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore2}>
                  {showMore2 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 4 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Skills:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {skill.map((suggestion, index) => (
                    <li key={index} onClick={() => addSkill(suggestion.skills)}>
                      {suggestion.skills}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {sectionNo === 5 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Intership:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {internship
                    .slice(0, showMore1 ? internship.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 6 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Project:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {project
                    .slice(0, showMore1 ? project.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 7 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Social Link:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {socialLink
                    .slice(0, showMore1 ? socialLink.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 8 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Language:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {lang.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => addLang(suggestion.languageName)}
                    >
                      {suggestion.languageName}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {sectionNo === 9 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Certifications:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {certification
                    .slice(0, showMore1 ? certification.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 10 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Awards:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {award
                    .slice(0, showMore1 ? award.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 11 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Volunteer Experience:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {volunteer
                    .slice(0, showMore1 ? volunteer.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}

            {sectionNo === 12 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your Interested Field:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {interest.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => addIntrest(suggestion.interestName)}
                    >
                      {suggestion.interestName}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {sectionNo === 13 && (
              <section className={style.section_1}>
                <h1>
                  Recommanded Suggestions for your References:
                  <div className={style.img_bulb}>
                    <img src={bulb} alt="bulb" />
                  </div>
                </h1>
                <br />
                <ul>
                  {reference
                    .slice(0, showMore1 ? reference.length : 2)
                    .map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong> {item.content}
                      </li>
                    ))}
                </ul>
                <br />
                <button className={style.showmore_btn} onClick={toggleShowMore1}>
                  {showMore1 ? "Show Less" : "Show More"}
                </button>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateResume;