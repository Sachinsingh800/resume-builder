import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { jobApplicationState } from '../../Recoil'; 
import style from "./CoverLetterForm.module.css"
import NavBar from '../NavBar/NavBar';

const CoverLetterForm = () => {
  const [formData, setFormData] = useRecoilState(jobApplicationState);
  const [section, setSection] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling animation
    });
  }


  const handleSection = (direction) => {

    if (direction === 'next' && section < 4) {
      setSection(section + 1);
      setProgress(progress + 18)
      scrollToTop()
    } else if (direction === 'prev' && section > 1) {
      setSection(section - 1);
      setProgress(progress - 18)
      scrollToTop()
    }
  };

  return (
    <div className={style.main}>
        <div className={style.navBar}>
        <NavBar/>
        </div>
   
  
   
<div className={style.container}>
<h2>Create Your Cover Letter</h2>
      <div className={style['progress-bar']}>
         <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
 
        </ul>
        <div className={style.progress} style={{ width: `${progress}%` }}></div>
   
      </div >
<form className={style.form}>

      {section ===1 && 
             <section className={style.section_1}>
             {/* Personal Information */}
         <label>
           First Name:
           <input
             type="text"
             name="nameAndContact.firstName"
             value={formData.nameAndContact.firstName}
             onChange={handleChange}
           />
         </label>
    
         <label>
           Last Name:
           <input
             type="text"
             name="nameAndContact.lastName"
             value={formData.nameAndContact.lastName}
             onChange={handleChange}
           />
         </label>
   
         <label>
           Profession:
           <input
             type="text"
             name="nameAndContact.profession"
             value={formData.nameAndContact.profession}
             onChange={handleChange}
           />
         </label>

         <label>
           City:
           <input
             type="text"
             name="nameAndContact.city"
             value={formData.nameAndContact.city}
             onChange={handleChange}
           />
         </label>

         <label>
           State:
           <input
             type="text"
             name="nameAndContact.state"
             value={formData.nameAndContact.state}
             onChange={handleChange}
           />
         </label>
   
         <label>
           Zip:
           <input
             type="text"
             name="nameAndContact.zip"
             value={formData.nameAndContact.zip}
             onChange={handleChange}
           />
         </label>
     
         <label>
           Phone Number:
           <input
             type="text"
             name="nameAndContact.phoneNumber"
             value={formData.nameAndContact.phoneNumber}
             onChange={handleChange}
           />
         </label>

         <label>
           Email:
           <input
             type="text"
             name="nameAndContact.email"
             value={formData.nameAndContact.email}
             onChange={handleChange}
           />
         </label>

   
         {/* Date */}
         <label>
           Date:
           <input
             type="text"
             name="date"
             value={formData.date}
             onChange={handleChange}
           />
         </label>
         <br />
          </section>
      }

    

{section === 2  &&
    <section className={style.section_2}>
     {/* Recipient Information */}
     <label>
        Recipient First Name:
        <input
          type="text"
          name="recipient.firstName"
          value={formData.recipient.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Recipient Last Name:
        <input
          type="text"
          name="recipient.lastName"
          value={formData.recipient.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Company Name:
        <input
          type="text"
          name="recipient.companyName"
          value={formData.recipient.companyName}
          onChange={handleChange}
        />
      </label>

      <label>
        Recipient City:
        <input
          type="text"
          name="recipient.city"
          value={formData.recipient.city}
          onChange={handleChange}
        />
      </label>

      <label>
        Recipient State:
        <input
          type="text"
          name="recipient.state"
          value={formData.recipient.state}
          onChange={handleChange}
        />
      </label>

      <label>
        Recipient Zip:
        <input
          type="text"
          name="recipient.zip"
          value={formData.recipient.zip}
          onChange={handleChange}
        />
      </label>

      <label>
        Recipient Phone Number:
        <input
          type="text"
          name="recipient.phoneNumber"
          value={formData.recipient.phoneNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Recipient Email:
        <input
          type="text"
          name="recipient.email"
          value={formData.recipient.email}
          onChange={handleChange}
        />
      </label>

     </section>
}


{section === 3 && 
    <section className={style.section_3}>  

{/* Cover Letter */}
<label >
  Subject:
  <input
    type="text"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Greeting:
  <input
    type="text"
    name="greeting"
    value={formData.greeting}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Opening:
  <textarea

    type="text"
    name="opening"
    value={formData.opening}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Letter Body:
  <textarea

    type="text"
    name="letterBody"
    value={formData.letterBody}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Call to Action:
  <textarea
  
    type="text"
    name="callToAction"
    value={formData.callToAction}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Closing:
  <textarea

    type="text"
    name="closing"
    value={formData.closing}
    onChange={handleChange}
  />
</label>
<br />
<label>
  Signature:
  <input
    type="text"
    name="signature"
    value={formData.signature}
    onChange={handleChange}
  />
</label>
<br />


</section>
}

    
{section === 4 &&
    <section>  
    {/* Additional Details */}
<label>
 Availability:
 <input
   type="text"
   name="availability"
   value={formData.availability}
   onChange={handleChange}
 />
</label>
<br />
<label>
 Confidentiality:
 <input
   type="text"
   name="confidentiality"
   value={formData.confidentiality}
   onChange={handleChange}
 />
</label>
<br />
<label>
 Gaps in Employment:
 <input
   type="text"
   name="gaps"
   value={formData.gaps}
   onChange={handleChange}
 />
</label>
<br />
<label>
 Relocation:
 <input
   type="text"
   name="relocation"
   value={formData.relocation}
   onChange={handleChange}
 />
</label>
<br />
<label>
 Salary Requirements:
 <input
   type="text"
   name="salaryRequirements"
   value={formData.salaryRequirements}
   onChange={handleChange}
 />
</label>
<br />
    </section>
}

      </form>
     
<div className={style.btn_box}>
            <button onClick={() => handleSection('prev')}>Previous</button>
            <button onClick={() => handleSection('next')}>Next</button>
            <button onClick={() => handleSection('next')}>Skip</button>
            </div>

</div>
<div className={style.coverLetter_box}>

</div>
    </div>
  );
};

export default CoverLetterForm;