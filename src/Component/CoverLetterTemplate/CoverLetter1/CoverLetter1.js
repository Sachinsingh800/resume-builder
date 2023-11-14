import React from "react";
import { useRecoilValue } from 'recoil';
import { jobApplicationState } from "../../../Recoil"; 
import style from "./CoverLetter1.module.css"

const CoverLetter1 = () => {
  const formData = useRecoilValue(jobApplicationState);

  return (
    <div className={style.main}>
  
<div className={style.heading}>
<div>
  <h1>{formData.nameAndContact.firstName}   {formData.nameAndContact.lastName}</h1>
  <p>{formData.nameAndContact.profession}</p>
</div>
<div>
  <p><strong>Phone:</strong> {formData.nameAndContact.phoneNumber}</p>
  <p><strong>Email:</strong>   {formData.nameAndContact.email}</p>
</div>
</div>


<div className={style.section_1}>
        
<p>{formData.date}</p>
<br/>
<p>
  {formData.recipient.firstName}
  {formData.recipient.lastName}
</p>
<p>
 {formData.recipient.companyName}
</p>
<p>
 {formData.recipient.phoneNumber},
  {formData.recipient.email}

</p>
<p>   {formData.subject}</p>
</div>

 
      
<section className={style.section_2}>
<p>
        {formData.greeting}
      </p>
      <p>
   {formData.opening}
      </p>
      <p>
     {formData.letterBody}
      </p>
      <p>
     {formData.callToAction}
      </p>
      <p>
    {formData.closing}
      </p>
</section>
  <section className={style.section_3}>
  <p>
     {formData.signature}
      </p>
  </section>
 


    </div>
  );
};

export default CoverLetter1;
