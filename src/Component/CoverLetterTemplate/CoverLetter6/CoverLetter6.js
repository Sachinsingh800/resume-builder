import React from "react";
import { useRecoilValue } from "recoil";
import { jobApplicationState } from "../../../Recoil";
import style from "./CoverLetter6.module.css";

const CoverLetter6 = () => {
  const formData = useRecoilValue(jobApplicationState);
  console.log(formData);
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <div>
          <h1>
            {formData.nameAndContact.firstName}{" "}
            {formData.nameAndContact.lastName}
          </h1>

        </div>
      </div>

      <div className={style.container}>
        <div>
          <div className={style.section_1}>
            <br />
            <p>{formData.date}</p>
            <br />
            <br />
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
        <div>
          <div className={style.right_box}>
            <h2>Personal Info</h2>
            <label>
              <strong>Email</strong>
              <p> {formData.nameAndContact.email}</p>
            </label>
            <label>
              <strong>Phone</strong>
              <p> {formData.nameAndContact.phoneNumber}</p>
            </label>
            <label>
              <strong>Address</strong>
              <p>
                {formData.nameAndContact.city},{formData.nameAndContact.state},
                {formData.nameAndContact.zip}
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter6;
