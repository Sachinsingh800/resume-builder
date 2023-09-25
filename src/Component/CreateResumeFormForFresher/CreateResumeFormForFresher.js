import React, { useState } from 'react';
import style from './CreateResumeFormForFresher.module.css';
import dp_icon from '../Images/dp_icon.gif';
import CropImage from '../CropImage/CropImage';
import ImageModal from '../ImageModal/ImageModal';
import { useRecoilValue } from 'recoil';
import { croppedImageState } from '../../Recoil';
import { AiFillDelete } from 'react-icons/ai';
import { formatResumeData } from './Utils';
import { resume } from "../../Recoil";
import { useRecoilState } from 'recoil';

export default function CreateResumeFormForFresher() {
  const [section, setSection] = useState(1);
  const image = useRecoilValue(croppedImageState);
  const [resumeData, setResumeData] = useRecoilState(resume);

  const [formData, setFormData] = useState(
    {
      profilePicture: image,
      jobTitle: formData.jobTitle,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      postCode: formData.postCode,
      state: formData.state,
      country: formData.country,
      bio: formData.bio,
 
      education: [
        {
          schoolName: formData.schoolName,
          schoolLocation: formData.schoolLocation,
          startDate: formData.startDate,
          endDate: formData.educationEndDate,
          degree: formData.degree,
          fieldOfStudy: formData.fieldOfStudy,
          description: formData.description,
        },
      ],
      skillSummary: formData.skillSummary,
    }
  );


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResumeData({ ...formData, [name]: value });
    console.log(formData,"ye wala")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = formatResumeData(formData, image);
    console.log();
  };

  const handleSection = (direction) => {
    if (direction === 'next' && section < 3) {
      setSection(section + 1);
    } else if (direction === 'prev' && section > 1) {
      setSection(section - 1);
    }
  };

  const addLink = () => {
    if (formData.newLink.trim() !== '') {
      setFormData({
        ...formData,
        skillSummary: [...formData.skillSummary, formData.newLink],
        newLink: '',
      });
    }
  };

  const deleteLink = (index) => {
    const updatedLinks = [...formData.skillSummary];
    updatedLinks.splice(index, 1);
    setFormData({
      ...formData,
      skillSummary: updatedLinks,
    });
  };

  return (
    <div className="resume-form">
      <h1>Create Your Resume Fresher</h1>
      <br />
      <div className={style.form}>
        {section === 1 && (
          <section>
            <h2>Personal Information</h2>
            <div className={style.img_container}>
              <div className={style.img_box}>
                {image ? (
                  <img src={image} alt="dp" />
                ) : (
                  <img src={dp_icon} alt="dp" />
                )}
              </div>
              <div>
                <ImageModal />
              </div>
            </div>
            <div>
              <label>Bio:</label>
              <textarea
                type="text"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </div>

            <div className={style.second_Section}>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Phone:</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Post Code:</label>
                <input
                  type="number"
                  name="postCode"
                  value={formData.postCode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Country:</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
        )}

        {section === 2 && (
          <section>
            <h2>Education</h2>
            <div className={style.second_Section}>
              <div>
                <label>School Name:</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>School Location:</label>
                <input
                  type="text"
                  name="schoolLocation"
                  value={formData.schoolLocation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>End Date:</label>
                <input
                  type="date"
                  name="educationEndDate"
                  value={formData.educationEndDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Degree:</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Field of Study:</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
        )}

        {section === 3 && (
          <section>
            <h2>Skills</h2>
            <div>
              <div className={style.second_Section}>
                <input
                  type="text"
                  name="newLink"
                  value={formData.newLink}
                  onChange={handleInputChange}
                />
                <button onClick={addLink} className={style.skill_btn}>+ Add Skill</button>
              </div>
            </div>
            {formData.skillSummary.map((link, index) => (
              <div key={index} className={style.skill}>
                <input type="text" value={link} readOnly />
                <button onClick={() => deleteLink(index)} className={style.delete_btn}><AiFillDelete/></button>
              </div>
            ))}
            <br/>
            <button onClick={handleSubmit}  className={style.submit_btn}>Submit</button>
          </section>
        )}
      </div>
      <br />
      <div className={style.btn_box}>
        <button onClick={() => handleSection('prev')}>Previous</button>
        <button onClick={() => handleSection('next')}>Next</button>
      </div>
    </div>
  );
}
