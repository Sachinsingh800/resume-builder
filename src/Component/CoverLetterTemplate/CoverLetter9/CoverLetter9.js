import React from "react";
import { useRecoilValue } from "recoil";
import { jobApplicationState } from "../../../Recoil";
import style from "./CoverLetter9.module.css";

const CoverLetter9 = () => {
  const formData = useRecoilValue(jobApplicationState);
  console.log(formData);
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <div>
          <h1 className={style.name}>
            {formData.nameAndContact.firstName}{" "}
            {formData.nameAndContact.lastName}
          </h1>
        </div>
        <div className={style.contact_box}>
          <p> {formData.nameAndContact.phoneNumber}</p>
          <p> {formData.nameAndContact.email}</p>
        </div>
      </div>

      <div className={style.line_box}>
        <div className={style.Line}></div>
      </div>
      <br />
      <div className={style.date}>
        <p>{formData.date}</p>
      </div>

      <div className={style.section_1}>
        <p>
          {formData.recipient.firstName} {formData.recipient.lastName}
        </p>
        <p> {formData.recipient.companyName}</p>
        <p>
          {formData.recipient.city},{formData.recipient.state},
          {formData.recipient.zip}
        </p>
        <p> {formData.recipient.email}</p>
        <p> {formData.recipient.phoneNumber}</p>
      </div>

      <section className={style.section_2}>
        <p> {formData.subject}</p>
        <br />
        <p>{formData.greeting}</p>
        <p>{formData.opening}</p>
        <p>{formData.letterBody}</p>
        <p>{formData.callToAction}</p>
        <p>{formData.closing}</p>
      </section>
      <section className={style.section_3}>
        <p>{formData.signature}</p>
      </section>
    </div>
  );
};

export default CoverLetter9;
