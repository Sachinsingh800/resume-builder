import React from "react";
import style from "./CreateResume.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import CreateResumeForm from "../../Component/CreateResumeForm/CreateResumeForm";
import ResumeModal from "../../Component/ResumeModal/ResumeModal";
import CreateResumeFormForFresher from "../../Component/CreateResumeFormForFresher/CreateResumeFormForFresher";
import {
  resumeType,
  resumeTemplates,
  summarySuggestion,
  skillSuggestion,
  interestSuggestion,
  languageSuggestion,
  suggestionData,
} from "../../Recoil";
import { useRecoilState, useRecoilValue } from "recoil";

function CreateResume() {
  const type = useRecoilValue(resumeType);
  const sectionNo = useRecoilValue(suggestionData);
  const [summary, setSummary] = useRecoilState(summarySuggestion);
  const [skill, setSkill] = useRecoilState(skillSuggestion);
  const [lang, setLang] = useRecoilState(languageSuggestion);
  const [interest, setInterest] = useRecoilState(interestSuggestion);
  console.log(sectionNo, "sdsdsdsdnooooosd");

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
          <div className={style.preview_template}>
            <ResumeModal />
          </div>
          <div className={style.suggestion_box}>
     
            {sectionNo === 1 && (
              <section className={style.section_1}>
          <h1>Recommanded Suggestions for your summary:</h1>
            <br />
                <ul>
                  {summary.map((suggestion, index) => (
                    <li key={index}>{suggestion.summary}</li>
                  ))}
                </ul>
              </section>
            )}

            {sectionNo === 4 && (
              <section className={style.section_1}>
               <h1>Recommanded Suggestions for your Skills:</h1>
                   <br />
                <ul>
                  {skill.map((suggestion, index) => (
                    <li key={index}>{suggestion.skills}</li>
                  ))}
                </ul>
              </section>
            )}

            {sectionNo === 8 && (
              <section className={style.section_1}>
               <h1>Recommanded Suggestions for your Language:</h1>
                   <br />
                <ul>
                  {lang.map((suggestion, index) => (
                    <li key={index}>{suggestion.languageName}</li>
                  ))}
                </ul>
              </section>
            )}
            {sectionNo === 12 && (
              <section className={style.section_1}>
            <h1>Recommanded Suggestions for your Interested Field:</h1>
                   <br />
                <ul>
                  {interest.map((suggestion, index) => (
                    <li key={index}>{suggestion.interestName}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateResume;
