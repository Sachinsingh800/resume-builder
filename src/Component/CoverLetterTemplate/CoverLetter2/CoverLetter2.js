import React from "react";
import { useRecoilValue } from "recoil";
import { jobApplicationState } from "../../../Recoil";
import style from "./CoverLetter2.module.css";
import generatePDF from "react-to-pdf";
import { useRef } from "react";

const CoverLetter2 = () => {
  const formData = useRecoilValue(jobApplicationState);
  console.log(formData);
  const targetRef = useRef();
    
  const pdfOptions = {
    unit: "mm",
    format: "a4",
    orientation: "portrait", // or 'landscape'
    fileName: "Easyryt.pdf",
  };
  
  return (
    <>
    <button className={style.download_btn} onClick={() => generatePDF(targetRef, pdfOptions)}>
            Export to Pdf
          </button>
          <div className={style.main} ref={targetRef} id='content'>
      <div className={style.heading}>
        <div>
          <h1>
            {" "}
            {formData.nameAndContact.firstName}{" "}
            {formData.nameAndContact.lastName}
          </h1>
          <p> {formData.nameAndContact.profession}</p>
        </div>
        <div>
 
          <p> {formData.nameAndContact.email}</p>
          <p> {formData.nameAndContact.phoneNumber}</p>
          <p>
            {formData.nameAndContact.city},{formData.nameAndContact.state},
            {formData.nameAndContact.zip}
          </p>
        </div>
      </div>

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
    </>
    
  );
};

export default CoverLetter2;
