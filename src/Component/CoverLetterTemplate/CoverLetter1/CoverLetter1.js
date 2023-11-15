import React from "react";
import { useRecoilValue } from "recoil";
import { jobApplicationState } from "../../../Recoil";
import style from "./CoverLetter1.module.css";

const CoverLetter1 = () => {
  const formData = useRecoilValue(jobApplicationState);

  return (
    <div className={style.main}>
      <div className={style.section_1}>
        <div>
        <h1>
          {formData.nameAndContact.firstName} {formData.nameAndContact.lastName}{" "}
        </h1>
        <p> {formData.nameAndContact.profession}</p>
        </div>

        <p>
          {formData.nameAndContact.city},{formData.nameAndContact.state},
          {formData.nameAndContact.zip}
        </p>
        <p> {formData.nameAndContact.email}</p>
        <p> {formData.nameAndContact.phoneNumber}</p>
        <p>{formData.date}</p>
        <br />
        <p>
          {" "}
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
      <br/>
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

export default CoverLetter1;
