import React, { useState } from 'react';
import style from './CreateResumeForm.module.css';
import { useRecoilState } from 'recoil';
import dp_icon from '../Images/dp_icon.gif';
import CropImage from '../CropImage/CropImage';
import ImageModal from '../ImageModal/ImageModal';
import { useRecoilValue } from 'recoil';
import { croppedImageState } from '../../Recoil';
import { formatResumeData } from './utils'; // Import the formatting function
// import { Name } from '../../Recoil';

export default function CreateResumeForm() {
  const [section, setSection] = useState(1);
  // const [resumeData, setName] = useRecoilState(Name);
  const image = useRecoilValue(croppedImageState);

  const [formData, setFormData] = useState({
    profilePicture: '',
    bio:"",
    jobTitle: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postCode: '',
    state: '',
    country: '',
    positionTitle: '',
    companyName: '',
    endDate: '',
    workSummary: '',
    schoolName: '',
    schoolLocation: '',
    startDate: '',
    educationEndDate: '',
    degree: '',
    fieldOfStudy: '',
    skillSummary: ["JavaScript", "React", "HTML", "CSS", "Node.js"],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = formatResumeData(formData, image);
    // setName(newData);
    console.log(newData,"new data")
  };

  // ... Rest of your component code remains the same
  const handleSection = (direction) => {
    // Increment or decrement the section based on the direction parameter
    if (direction === 'next' && section < 4) {
      setSection(section + 1);
    } else if (direction === 'prev' && section > 1) {
      setSection(section - 1);
    }
  };
  



  return (
    <div className="resume-form">
      <h1>Create Your Resume</h1>
      <br/>
      <div className={style.form} >
        {section ===1 &&  
         <section>
         <h2>Personal Information</h2>
         <div className={style.img_container}>
          <div className={style.img_box}>
            {image ? <img src={image} alt='dp' /> :
            <img src={dp_icon} alt='dp' />
            }
          
          </div>
          <div>
          <ImageModal/>
          </div>
  
             
         </div>
         <div>
           <label>Bio:</label>
           <textarea type="text" name="bio" value={formData.bio} onChange={handleInputChange} />
         </div>
         <div>
           <label>Job Title:</label>
           <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
         </div>
         <div>
           <label>First Name:</label>
           <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
         </div>
         <div>
           <label>Last Name:</label>
           <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
         </div>
         <div>
           <label>Phone:</label>
           <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
         </div>
         <div>
           <label>Email:</label>
           <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
         </div>
         <div>
           <label>Address:</label>
           <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
         </div>
         <div>
           <label>City:</label>
           <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
         </div>
         <div>
           <label>Post Code:</label>
           <input type="text" name="postCode" value={formData.postCode} onChange={handleInputChange} />
         </div>
         <div>
           <label>State:</label>
           <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
         </div>
         <div>
           <label>Country:</label>
           <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
         </div>
       </section>
        
        }
       
       {section ===2 && 
        <section>
        <h2>Work Experience</h2>
        <div>
          <label>Position Title:</label>
          <input type="text" name="positionTitle" value={formData.positionTitle} onChange={handleInputChange} />
        </div>
        <div>
          <label>Company Name:</label>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} />
        </div>
        <div>
          <label>End Date:</label>
          <input type="text" name="endDate" value={formData.endDate} onChange={handleInputChange} />
        </div>
        <div>
          <label>Work Summary:</label>
          <textarea name="workSummary" value={formData.workSummary} onChange={handleInputChange} />
        </div>
      </section>
       
       
       }

       {section ===3 &&
           <section>
           <h2>Education</h2>
           <div>
             <label>School Name:</label>
             <input type="text" name="schoolName" value={formData.schoolName} onChange={handleInputChange} />
           </div>
           <div>
             <label>School Location:</label>
             <input type="text" name="schoolLocation" value={formData.schoolLocation} onChange={handleInputChange} />
           </div>
           <div>
             <label>Start Date:</label>
             <input type="text" name="startDate" value={formData.startDate} onChange={handleInputChange} />
           </div>
           <div>
             <label>End Date:</label>
             <input type="text" name="educationEndDate" value={formData.educationEndDate} onChange={handleInputChange} />
           </div>
           <div>
             <label>Degree:</label>
             <input type="text" name="degree" value={formData.degree} onChange={handleInputChange} />
           </div>
           <div>
             <label>Field of Study:</label>
             <input type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleInputChange} />
           </div>
         </section>
       
       }

    {section ===4 &&
        <section>
        <h2>Skills</h2>
        <div>
          <label>Skills Summary:</label>
          {/* <textarea name="skillSummary" value={formData.skillSummary} onChange={handleInputChange} /> */}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </section>
    }

    

        
      </div>
      <br/>
      <div className={style.btn_box}>
      <button onClick={() => handleSection('prev')}>Previous</button>
      <button onClick={() => handleSection('next')}>Next</button>
      </div>


    </div>
  );
}
