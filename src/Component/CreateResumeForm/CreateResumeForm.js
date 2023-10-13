import React, { useState } from 'react';
import style from "./CreateResumeForm.module.css"
import { useRecoilState } from 'recoil';
import { resumeData } from '../../Recoil'; 
import dp_icon from '../Images/dp_icon.gif';
import ImageModal from '../ImageModal/ImageModal';
import { AiFillDelete } from 'react-icons/ai';
import { croppedImageState,suggestionData,selectedValue1,selectedValue2} from '../../Recoil';


const ResumeForm = () => {
  const [formData,   setFormData] = useRecoilState(resumeData);
  const [handleSuggestion,   setHandleSuggestion] = useRecoilState(suggestionData);
  const [section, setSection] = useState(1);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  const [selectedValue, setSelectedValue] = useRecoilState(selectedValue1);
  const [selectedValueForSkill, setSelectedValue2] = useRecoilState(selectedValue2);
  const [progress, setProgress] = useState(0);

  const { resume } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      resume: {
        ...resume,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Submitted Resume Data:', resume);
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling animation
    });
  }


  const handleSection = (direction) => {
    if (direction === 'next' && section < 13) {
      setSection(section + 1);
      setHandleSuggestion(section +1)
      setProgress(progress + 7.69)
      scrollToTop()
    } else if (direction === 'prev' && section > 1) {
      setSection(section - 1);
      setHandleSuggestion(section - 1)
      setProgress(progress - 7.69)
      scrollToTop()
    }
  };
  const handleAddLanguage = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.knownLanguages = [
        ...updatedResume.knownLanguages,
        { lang: '' },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  const handleDeleteLanguage = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.knownLanguages = [
        ...updatedResume.knownLanguages.slice(0, index),
        ...updatedResume.knownLanguages.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  
  const handleAddEducation = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.education = [
        ...updatedResume.education,
        {
          degree: '',
          collegeName: '',
          stream: '',
          startYear: '',
          endYear: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  const handleDeleteEducation = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.education = [
        ...updatedResume.education.slice(0, index),
        ...updatedResume.education.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  
  const handleAddWork = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.work = [
        ...updatedResume.work,
        {
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  const handleDeleteWork = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.work = [
        ...updatedResume.work.slice(0, index),
        ...updatedResume.work.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  
  const handleAddSkills = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.skillsAndLevel = [
        ...updatedResume.skillsAndLevel,
        {
          skills: '',
          level: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  const handleDeleteSkills = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.skillsAndLevel = [
        ...updatedResume.skillsAndLevel.slice(0, index),
        ...updatedResume.skillsAndLevel.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };


  const handleAddInternship = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.internShips = [
        ...updatedResume.internShips,
        {
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };


  const handleDeleteInternship = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.internShips = [
        ...updatedResume.internShips.slice(0, index),
        ...updatedResume.internShips.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  const handleAddProject = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.projects = [
        ...updatedResume.projects,
        {
          title: '',
          description: '',
          year: '',
          link: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  const handleDeleteProject = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.projects = [
        ...updatedResume.projects.slice(0, index),
        ...updatedResume.projects.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  const handleAddCertification = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.certifications = [
        ...updatedResume.certifications,
        {
          title: '',
          issuingOrganization: '',
          date: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  const handleDeleteCertification = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.certifications = [
        ...updatedResume.certifications.slice(0, index),
        ...updatedResume.certifications.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };


  const handleAddAward = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.awards = [
        ...updatedResume.awards,
        {
          title: '',
          issuingOrganization: '',
          date: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  
  const handleDeleteAward = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.awards = [
        ...updatedResume.awards.slice(0, index),
        ...updatedResume.awards.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };


  const handleAddVolunteer = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.volunteerExperience = [
        ...updatedResume.volunteerExperience,
        {
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  
  const handleDeleteVolunteer = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.volunteerExperience = [
        ...updatedResume.volunteerExperience.slice(0, index),
        ...updatedResume.volunteerExperience.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };


  const handleAddInterest = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.areaOfInterest = [
        ...updatedResume.areaOfInterest,
        { interest: '' },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  
  const handleDeleteInterest = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.areaOfInterest = [
        ...updatedResume.areaOfInterest.slice(0, index),
        ...updatedResume.areaOfInterest.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };


  const handleAddReference = () => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.references = [
        ...updatedResume.references,
        {
          name: '',
          company: '',
          position: '',
          email: '',
          phone: '',
        },
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };
  
  // Function to delete a reference at the specified index
  const handleDeleteReference = (index) => {
    setFormData((prevFormData) => {
      const updatedResume = { ...prevFormData.resume };
      updatedResume.references = [
        ...updatedResume.references.slice(0, index),
        ...updatedResume.references.slice(index + 1),
      ];
      return { ...prevFormData, resume: updatedResume };
    });
  };

  return (
    <div className={style.main}>
         <div className={style['progress-bar']}>
         <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
        </ul>
        <div className={style.progress} style={{ width: `${progress}%` }}></div>
   
      </div>
      <br/>
      <h1>Resume Form</h1>

      <br />
      <form onSubmit={handleSubmit} className={style.form}>
        {/* Job Title */}
        {section === 1 && (
          <section>
                <div className={style.img_container}>
              <div className={style.img_box}>
                {croppedImage ? (
                     <img src={croppedImage} alt="dp" />
                ) : (
              
                  <img src={resume.profilePicture.url} alt="dp" />
                )}
              </div>
              <div>
                <ImageModal />
              </div>
            </div>
              <div>
        <h2>Personal Information</h2>
        <div className={style.personal_info}>
          <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={resume.jobTitle}
            onChange={handleChange}
          />
          </div>
               {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={resume.name}
            onChange={handleChange}
          />
        </div>
    
        </div>
   
        </div>

   

        {/* Summary */}
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={selectedValue  ?  selectedValue : resume.summary }
            onChange={handleChange}
          />
        </div>


      <div className={style.info_box}>
       {/* Contact */}
<div>
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={resume.contact.email}
    onChange={(e) => {
      setFormData({
        ...formData,
        resume: {
          ...resume,
          contact: {
            ...resume.contact,
            email: e.target.value,
          },
        },
      });
    }}
  />
</div>

<div>
  <label htmlFor="phone">Phone:</label>
  <input
    type="text"
    id="phone"
    name="phone"
    value={resume.contact.phone}
    onChange={(e) => {
      setFormData({
        ...formData,
        resume: {
          ...resume,
          contact: {
            ...resume.contact,
            phone: e.target.value,
          },
        },
      });
    }}
  />
</div>


        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={resume.dob}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={resume.gender}
            onChange={handleChange}
          />
        </div>
{/* Address */}
<div>
  <label htmlFor="address">Address:</label>
  <input
    type="text"
    id="address"
    name="address"
    value={resume.address.address}
    onChange={(e) => {
      setFormData({
        ...formData,
        resume: {
          ...resume,
          address: {
            ...resume.address,
            address: e.target.value,
          },
        },
      });
    }}
  />
</div>

<div>
  <label htmlFor="city">City:</label>
  <input
    type="text"
    id="city"
    name="city"
    value={resume.address.city}
    onChange={(e) => {
      setFormData({
        ...formData,
        resume: {
          ...resume,
          address: {
            ...resume.address,
            city: e.target.value,
          },
        },
      });
    }}
  />
</div>

<div>
  <label htmlFor="state">State:</label>
  <input
    type="text"
    id="state"
    name="state"
    value={resume.address.state}
    onChange={(e) => {
      setFormData({
        ...formData,
        resume: {
          ...resume,
          address: {
            ...resume.address,
            state: e.target.value,
          },
        },
      });
    }}
  />
</div>

<div>
  <label htmlFor="postalCode">Postal Code:</label>
  <input
    type="text"
    id="postalCode"
    name="postalCode"
    value={resume.address.postalCode}
    onChange={(e) => {
      setFormData({
        ...formData,
        resume: {
          ...resume,
          address: {
            ...resume.address,
            postalCode: e.target.value,
          },
        },
      });
    }}
  />
</div>

<div>
  <label htmlFor="country">Country:</label>
  <input
    type="text"
    id="country"
    name="country"
    value={resume.address.country}
    onChange={(e) => {
      setFormData({
        ...formData,
        resume: {
          ...resume,
          address: {
            ...resume.address,
            country: e.target.value,
          },
        },
      });
    }}
  />
</div>





   
      </div>
      

          </section>
    
        )}
  




  
  {section === 2 && (
  <section  >
    {/* Education */}
    {resume.education.map((education, index) => (
      <div key={index} >
        <h2>Education {index + 1}</h2>
        <div className={style.section_2}>
          <div>
            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input
              type="text"
              id={`degree-${index}`}
              name={`degree-${index}`}
              value={education.degree}
              onChange={(e) => {
                const updatedEducation = [...resume.education];
                updatedEducation[index] = {
                  ...updatedEducation[index],
                  degree: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    education: updatedEducation,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`collegeName-${index}`}>College Name:</label>
            <input
              type="text"
              id={`collegeName-${index}`}
              name={`collegeName-${index}`}
              value={education.collegeName}
              onChange={(e) => {
                const updatedEducation = [...resume.education];
                updatedEducation[index] = {
                  ...updatedEducation[index],
                  collegeName: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    education: updatedEducation,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`stream-${index}`}>Stream:</label>
            <input
              type="text"
              id={`stream-${index}`}
              name={`stream-${index}`}
              value={education.stream}
              onChange={(e) => {
                const updatedEducation = [...resume.education];
                updatedEducation[index] = {
                  ...updatedEducation[index],
                  stream: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    education: updatedEducation,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`startYear-${index}`}>Start Year:</label>
            <input
              type="text"
              id={`startYear-${index}`}
              name={`startYear-${index}`}
              value={education.startYear}
              onChange={(e) => {
                const updatedEducation = [...resume.education];
                updatedEducation[index] = {
                  ...updatedEducation[index],
                  startYear: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    education: updatedEducation,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`endYear-${index}`}>End Year:</label>
            <input
              type="text"
              id={`endYear-${index}`}
              name={`endYear-${index}`}
              value={education.endYear}
              onChange={(e) => {
                const updatedEducation = [...resume.education];
                updatedEducation[index] = {
                  ...updatedEducation[index],
                  endYear: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    education: updatedEducation,
                  },
                });
              }}
            />
 
          </div>
          <div className={style.dele_btn}>
          {resume.education.length > 1 && (
        <button  onClick={() => handleDeleteEducation(index)}><AiFillDelete/></button>
      )}
          </div>
        </div>
        <div className={style.add_btn}>
        {index === resume.education.length - 1 && (
        <button onClick={handleAddEducation}>Add</button>
      )}
        </div>
     
 
      </div>
    ))}
  </section>
)}









{section === 3 && (
  <section>
    {/* Work Experience */}
    {resume.work.map((work, index) => (
      <div key={index}>
         
    
        <h2 className={style.section_3_h2}>
          <div>  Work Experience {index + 1}</div>
        
          <div className={style.dele_btn3}>
          {resume.work.length > 1 && (
        <button onClick={() => handleDeleteWork(index)}><AiFillDelete/></button>
      )}
          </div>
        
        </h2>
        <div className={style.section_3}>
          <div>
            <label htmlFor={`title-${index}`}>Title:</label>
            <input
              type="text"
              id={`title-${index}`}
              name={`title-${index}`}
              value={work.title}
              onChange={(e) => {
                const updatedWork = [...resume.work];
                updatedWork[index] = {
                  ...updatedWork[index],
                  title: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    work: updatedWork,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`company-${index}`}>Company:</label>
            <input
              type="text"
              id={`company-${index}`}
              name={`company-${index}`}
              value={work.company}
              onChange={(e) => {
                const updatedWork = [...resume.work];
                updatedWork[index] = {
                  ...updatedWork[index],
                  company: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    work: updatedWork,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`startDate-${index}`}>Start Date:</label>
            <input
              type="date"
              id={`startDate-${index}`}
              name={`startDate-${index}`}
              value={work.startDate}
              onChange={(e) => {
                const updatedWork = [...resume.work];
                updatedWork[index] = {
                  ...updatedWork[index],
                  startDate: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    work: updatedWork,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`endDate-${index}`}>End Date:</label>
            <input
              type="date"
              id={`endDate-${index}`}
              name={`endDate-${index}`}
              value={work.endDate}
              onChange={(e) => {
                const updatedWork = [...resume.work];
                updatedWork[index] = {
                  ...updatedWork[index],
                  endDate: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    work: updatedWork,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`location-${index}`}>Location:</label>
            <input
              type="text"
              id={`location-${index}`}
              name={`location-${index}`}
              value={work.location}
              onChange={(e) => {
                const updatedWork = [...resume.work];
                updatedWork[index] = {
                  ...updatedWork[index],
                  location: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    work: updatedWork,
                  },
                });
              }}
            />
          </div>
        </div>
        <br />
        <div>
          <label htmlFor={`description-${index}`}>Description:</label>
          <textarea
            id={`description-${index}`}
            name={`description-${index}`}
            value={work.description}
            onChange={(e) => {
              const updatedWork = [...resume.work];
              updatedWork[index] = {
                ...updatedWork[index],
                description: e.target.value,
              };
              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  work: updatedWork,
                },
              });
            }}
          />
      
        </div>
        <div className={style.add_btn}>
        {index === resume.work.length - 1 && (
        <button onClick={handleAddWork}>Add</button>
      )}
      </div>
      </div>
    ))}
  </section>
)}





{section === 4 && (
  <section>
    {/* Skills and Level */}
    {resume.skillsAndLevel.map((skill, index) => (
      <div key={index}>
        <h2>Skills and Level {index + 1}</h2>
        <div className={style.section_4}>
          <div>
            <label htmlFor={`skills-${index}`}>Skills:</label>
            <input
              type="text"
              id={`skills-${index}`}
              name={`skills-${index}`}
              value={skill.skills}
              onChange={(e) => {
                const updatedSkills = [...resume.skillsAndLevel];
                updatedSkills[index] = {
                  ...updatedSkills[index],
                  skills: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    skillsAndLevel: updatedSkills,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`level-${index}`}>Level:</label>
            <input
              type="text"
              id={`level-${index}`}
              name={`level-${index}`}
              value={skill.level}
              onChange={(e) => {
                const updatedSkills = [...resume.skillsAndLevel];
                updatedSkills[index] = {
                  ...updatedSkills[index],
                  level: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    skillsAndLevel: updatedSkills,
                  },
                });
              }}
            />
            <div className={style.dele_btn}>
            {resume.skillsAndLevel.length > 1 && (
        <button onClick={() => handleDeleteSkills(index)}><AiFillDelete/></button>
      )}
            </div>
          </div>
        </div>
        <div className={style.add_btn}>
        {index === resume.skillsAndLevel.length - 1 && (
        <button onClick={handleAddSkills}>Add</button>
      )}
        </div>
    

      </div>
    ))}
  </section>
)}

       


{section === 5 && (
  <section>
    {/* Internships */}
    {resume.internShips.map((internship, index) => (
      <div key={index}>
        <h2>Internship {index + 1}</h2>
        <div className={style.dele_btn5}>
            {resume.internShips.length > 1 && (
        <button onClick={() => handleDeleteInternship(index)}><AiFillDelete/></button>
      )}
            </div>
        <div className={style.section_5}>
          
          <div>
            <label htmlFor={`title-${index}`}>Title:</label>
            <input
              type="text"
              id={`title-${index}`}
              name={`title-${index}`}
              value={internship.title}
              onChange={(e) => {
                const updatedInternships = [...resume.internShips];
                updatedInternships[index] = {
                  ...updatedInternships[index],
                  title: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    internShips: updatedInternships,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`company-${index}`}>Company:</label>
            <input
              type="text"
              id={`company-${index}`}
              name={`company-${index}`}
              value={internship.company}
              onChange={(e) => {
                const updatedInternships = [...resume.internShips];
                updatedInternships[index] = {
                  ...updatedInternships[index],
                  company: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    internShips: updatedInternships,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`startDate-${index}`}>Start Date:</label>
            <input
              type="date"
              id={`startDate-${index}`}
              name={`startDate-${index}`}
              value={internship.startDate}
              onChange={(e) => {
                const updatedInternships = [...resume.internShips];
                updatedInternships[index] = {
                  ...updatedInternships[index],
                  startDate: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    internShips: updatedInternships,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`endDate-${index}`}>End Date:</label>
            <input
              type="date"
              id={`endDate-${index}`}
              name={`endDate-${index}`}
              value={internship.endDate}
              onChange={(e) => {
                const updatedInternships = [...resume.internShips];
                updatedInternships[index] = {
                  ...updatedInternships[index],
                  endDate: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    internShips: updatedInternships,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`location-${index}`}>Location:</label>
            <input
              type="text"
              id={`location-${index}`}
              name={`location-${index}`}
              value={internship.location}
              onChange={(e) => {
                const updatedInternships = [...resume.internShips];
                updatedInternships[index] = {
                  ...updatedInternships[index],
                  location: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    internShips: updatedInternships,
                  },
                });
              }}
            />
          </div>
        </div>
        <br />
        <div>
          <label htmlFor={`description-${index}`}>Description:</label>
          <textarea
            id={`description-${index}`}
            name={`description-${index}`}
            value={internship.description}
            onChange={(e) => {
              const updatedInternships = [...resume.internShips];
              updatedInternships[index] = {
                ...updatedInternships[index],
                description: e.target.value,
              };
              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  internShips: updatedInternships,
                },
              });
            }}
          />
    
        </div>
        <div className={style.add_btn}>
        {index === resume.internShips.length - 1 && (
        <button onClick={handleAddInternship}>Add</button>
      )}
        </div>
      </div>
    ))}
  </section>
)}


     





{section === 6 && (
  <section>
    {/* Projects */}
    {resume.projects.map((project, index) => (
      <div key={index}>
        <h2>Project {index + 1}</h2>
        <div className={style.dele_btn6}>
            {resume.projects.length > 1 && (
        <button onClick={() => handleDeleteProject(index)}><AiFillDelete/></button>
      )}
            </div>
        <div>
          <label htmlFor={`title-${index}`}>Title:</label>
          <input
            type="text"
            id={`title-${index}`}
            name={`title-${index}`}
            value={project.title}
            onChange={(e) => {
              const updatedProjects = [...resume.projects];
              updatedProjects[index] = {
                ...updatedProjects[index],
                title: e.target.value,
              };
              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  projects: updatedProjects,
                },
              });
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor={`description-${index}`}>Description:</label>
          <textarea
            id={`description-${index}`}
            name={`description-${index}`}
            value={project.description}
            onChange={(e) => {
              const updatedProjects = [...resume.projects];
              updatedProjects[index] = {
                ...updatedProjects[index],
                description: e.target.value,
              };
              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  projects: updatedProjects,
                },
              });
            }}
          />
        </div>
        <br />
        <div className={style.section_6}>
          <div>
            <label htmlFor={`year-${index}`}>Year:</label>
            <input
              type="text"
              id={`year-${index}`}
              name={`year-${index}`}
              value={project.year}
              onChange={(e) => {
                const updatedProjects = [...resume.projects];
                updatedProjects[index] = {
                  ...updatedProjects[index],
                  year: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    projects: updatedProjects,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`link-${index}`}>Link:</label>
            <input
              type="text"
              id={`link-${index}`}
              name={`link-${index}`}
              value={project.link}
              onChange={(e) => {
                const updatedProjects = [...resume.projects];
                updatedProjects[index] = {
                  ...updatedProjects[index],
                  link: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    projects: updatedProjects,
                  },
                });
              }}
            />
  
     
          </div>
        </div>
        <div className={style.add_btn}>
        {index === resume.projects.length - 1 && (
        <button onClick={handleAddProject}>Add</button>
      )}
   
        </div>
    
      </div>
    ))}
  </section>
)}


      





{section === 7 && (
  <section>
    {/* Social Links */}
    <div>
      <h2>Social Links</h2>
      <div>
        <label htmlFor="linkedin">LinkedIn Profile:</label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={resume.socialLinks.linkedin}
          onChange={(e) => {
            setFormData({
              ...formData,
              resume: {
                ...resume,
                socialLinks: {
                  ...resume.socialLinks,
                  linkedin: e.target.value,
                },
              },
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="github">GitHub Profile:</label>
        <input
          type="url"
          id="github"
          name="github"
          value={resume.socialLinks.github}
          onChange={(e) => {
            setFormData({
              ...formData,
              resume: {
                ...resume,
                socialLinks: {
                  ...resume.socialLinks,
                  github: e.target.value,
                },
              },
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="portfolio">Portfolio:</label>
        <input
          type="url"
          id="portfolio"
          name="portfolio"
          value={resume.socialLinks.portfolio}
          onChange={(e) => {
            setFormData({
              ...formData,
              resume: {
                ...resume,
                socialLinks: {
                  ...resume.socialLinks,
                  portfolio: e.target.value,
                },
              },
            });
          }}
        />
      </div>
    </div>
  </section>
)}

      





{section === 8 && (
  <section >
    {/* Known Languages */}
    <h2>Known Languages </h2>
    <div className={style.section_8}>
    {resume.knownLanguages.map((language, index) => (
      <div key={index}>
   
       <label htmlFor={`language-${index}`}>Language:</label>

       <div className={style.input_box}>
        <input
          type="text"
          id={`language-${index}`}
          name={`language-${index}`}
          value={language.lang}
          onChange={(e) => {
            const updatedKnownLanguages = [...resume.knownLanguages];
            updatedKnownLanguages[index] = {
              ...updatedKnownLanguages[index],
              lang: e.target.value,
            };

            setFormData({
              ...formData,
              resume: {
                ...resume,
                knownLanguages: updatedKnownLanguages,
              },
            });
          }}
        />
        <div className={style.dele_btn8}>
        {resume.knownLanguages.length > 1 && (
      <button onClick={() => handleDeleteLanguage(index)}><AiFillDelete/></button>
    )}
        </div>
   
       </div>
    
       <div className={style.add_btn}>
      {index === resume.knownLanguages.length - 1 && (
      <button onClick={handleAddLanguage}>Add</button>
    )}
      </div>
 
      </div>
       
    ))}
    </div>
  </section>
)}









{section === 9 && (
  <section className={style.section_9}>
    {/* Certifications */}
    {resume.certifications.map((certification, index) => (
      <div key={index}>
 
        <h2><div>Certification {index + 1}</div>
        <div className={style.dele_btn9}>
              {resume.certifications.length > 1 && (
        <button onClick={() => handleDeleteCertification(index)}><AiFillDelete/></button>
      )}
        </div>
        </h2>
   
        <div>
          <label htmlFor={`title-${index}`}>Title:</label>
          <input
            type="text"
            id={`title-${index}`}
            name={`title-${index}`}
            value={certification.title}
            onChange={(e) => {
              const updatedCertifications = [...resume.certifications];
              updatedCertifications[index] = {
                ...updatedCertifications[index],
                title: e.target.value,
              };

              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  certifications: updatedCertifications,
                },
              });
            }}
          />
        </div>
        <div>
          <label htmlFor={`issuingOrganization-${index}`}>Issuing Organization:</label>
          <input
            type="text"
            id={`issuingOrganization-${index}`}
            name={`issuingOrganization-${index}`}
            value={certification.issuingOrganization}
            onChange={(e) => {
              const updatedCertifications = [...resume.certifications];
              updatedCertifications[index] = {
                ...updatedCertifications[index],
                issuingOrganization: e.target.value,
              };

              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  certifications: updatedCertifications,
                },
              });
            }}
          />
        </div>
        <div>
          <label htmlFor={`date-${index}`}>Date:</label>
          <input
            type="date"
            id={`date-${index}`}
            name={`date-${index}`}
            value={certification.date}
            onChange={(e) => {
              const updatedCertifications = [...resume.certifications];
              updatedCertifications[index] = {
                ...updatedCertifications[index],
                date: e.target.value,
              };

              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  certifications: updatedCertifications,
                },
              });
            }}
          />
     
        </div>
       <div className={style.add_btn}>
       {index === resume.certifications.length - 1 && (
        <button onClick={handleAddCertification}>Add</button>
      )}
       </div>
   
    
      </div>
    ))}
  </section>
)}








{section === 10 && (
  <section className={style.section_9}>
    {/* Awards */}
    {resume.awards.map((award, index) => (
      <div key={index}>

        <h2>
        <div>    Award {index + 1}</div>
        <div className={style.dele_btn10}>
      {resume.awards.length > 1 && (
        <button onClick={() => handleDeleteAward(index)}><AiFillDelete/></button>
      )}
      </div>
          </h2>
 
        <div>
          <label htmlFor={`awardTitle-${index}`}>Award Title:</label>
          <input
            type="text"
            id={`awardTitle-${index}`}
            name={`awardTitle-${index}`}
            value={award.title}
            onChange={(e) => {
              const updatedAwards = [...resume.awards];
              updatedAwards[index] = {
                ...updatedAwards[index],
                title: e.target.value,
              };

              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  awards: updatedAwards,
                },
              });
            }}
          />
        </div>
        <div>
          <label htmlFor={`awardOrganization-${index}`}>Award Organization:</label>
          <input
            type="text"
            id={`awardOrganization-${index}`}
            name={`awardOrganization-${index}`}
            value={award.issuingOrganization}
            onChange={(e) => {
              const updatedAwards = [...resume.awards];
              updatedAwards[index] = {
                ...updatedAwards[index],
                issuingOrganization: e.target.value,
              };

              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  awards: updatedAwards,
                },
              });
            }}
          />
        </div>
        <div>
          <label htmlFor={`awardDate-${index}`}>Award Date:</label>
          <input
            type="date"
            id={`awardDate-${index}`}
            name={`awardDate-${index}`}
            value={award.date}
            onChange={(e) => {
              const updatedAwards = [...resume.awards];
              updatedAwards[index] = {
                ...updatedAwards[index],
                date: e.target.value,
              };

              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  awards: updatedAwards,
                },
              });
            }}
          />
  
        </div>
        <div className={style.add_btn}>
        {index === resume.awards.length - 1 && (
        <button onClick={handleAddAward}>Add</button>
      )}
        </div>
 
 
   
      </div>
    ))}
  </section>
)}



       

{section === 11 && (
  <section>
    {/* Volunteer Experience */}
    {resume.volunteerExperience.map((volunteer, index) => (
      <div key={index}>
        <h2 className={style.section_11_h2}>
          <div>Volunteer Experience {index + 1}</div>
      
          <div className={style.dele_btn11}>
          {resume.volunteerExperience.length > 1 && (
        <button onClick={() => handleDeleteVolunteer(index)}><AiFillDelete/></button>
      )} 
          </div>
          </h2>
        <div className={style.section_11}>
          <div>
            <label htmlFor={`volunteerTitle-${index}`}>Title:</label>
            <input
              type="text"
              id={`volunteerTitle-${index}`}
              name={`volunteerTitle-${index}`}
              value={volunteer.title}
              onChange={(e) => {
                const updatedVolunteerExperience = [...resume.volunteerExperience];
                updatedVolunteerExperience[index] = {
                  ...updatedVolunteerExperience[index],
                  title: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    volunteerExperience: updatedVolunteerExperience,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`volunteerCompany-${index}`}>Company:</label>
            <input
              type="text"
              id={`volunteerCompany-${index}`}
              name={`volunteerCompany-${index}`}
              value={volunteer.company}
              onChange={(e) => {
                const updatedVolunteerExperience = [...resume.volunteerExperience];
                updatedVolunteerExperience[index] = {
                  ...updatedVolunteerExperience[index],
                  company: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    volunteerExperience: updatedVolunteerExperience,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`volunteerStartDate-${index}`}>Start Date:</label>
            <input
              type="date"
              id={`volunteerStartDate-${index}`}
              name={`volunteerStartDate-${index}`}
              value={volunteer.startDate}
              onChange={(e) => {
                const updatedVolunteerExperience = [...resume.volunteerExperience];
                updatedVolunteerExperience[index] = {
                  ...updatedVolunteerExperience[index],
                  startDate: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    volunteerExperience: updatedVolunteerExperience,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`volunteerEndDate-${index}`}>End Date:</label>
            <input
              type="date"
              id={`volunteerEndDate-${index}`}
              name={`volunteerEndDate-${index}`}
              value={volunteer.endDate}
              onChange={(e) => {
                const updatedVolunteerExperience = [...resume.volunteerExperience];
                updatedVolunteerExperience[index] = {
                  ...updatedVolunteerExperience[index],
                  endDate: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    volunteerExperience: updatedVolunteerExperience,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`volunteerLocation-${index}`}>Location:</label>
            <input
              type="text"
              id={`volunteerLocation-${index}`}
              name={`volunteerLocation-${index}`}
              value={volunteer.location}
              onChange={(e) => {
                const updatedVolunteerExperience = [...resume.volunteerExperience];
                updatedVolunteerExperience[index] = {
                  ...updatedVolunteerExperience[index],
                  location: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    volunteerExperience: updatedVolunteerExperience,
                  },
                });
              }}
            />
          </div>
        </div>
        <br />
        <div>
          <label htmlFor={`volunteerDescription-${index}`}>Description:</label>
          <textarea
            id={`volunteerDescription-${index}`}
            name={`volunteerDescription-${index}`}
            value={volunteer.description}
            onChange={(e) => {
              const updatedVolunteerExperience = [...resume.volunteerExperience];
              updatedVolunteerExperience[index] = {
                ...updatedVolunteerExperience[index],
                description: e.target.value,
              };
              setFormData({
                ...formData,
                resume: {
                  ...resume,
                  volunteerExperience: updatedVolunteerExperience,
                },
              });
            }}
          />

        </div>
        <div className={style.add_btn}>
        {index === resume.volunteerExperience.length - 1 && (
        <button onClick={handleAddVolunteer}>Add</button>
      )}
        </div>
 
  
      </div>
    ))}
  </section>
)}

       




{section === 12 && (
  <section className={style.section_12}>
    {/* Areas of Interest */}
    {resume.areaOfInterest.map((interest, index) => (
      <div key={index}>
        
        <h2 className={style.section_12_h2}>
        <div>Areas of Interest {index + 1}</div>
        <div className={style.dele_btn12}>
        {resume.areaOfInterest.length > 1 && (
        <button onClick={() => handleDeleteInterest(index)}><AiFillDelete/></button>
      )}
        </div>
        </h2>
        <label htmlFor={`interest-${index}`}>Area of Interest:</label>
        <input
          type="text"
          id={`interest-${index}`}
          name={`interest-${index}`}
          value={interest.interest}
          onChange={(e) => {
            const updatedAreaOfInterest = [...resume.areaOfInterest];
            updatedAreaOfInterest[index] = {
              ...updatedAreaOfInterest[index],
              interest: e.target.value,
            };
            setFormData({
              ...formData,
              resume: {
                ...resume,
                areaOfInterest: updatedAreaOfInterest,
              },
            });
          }}
        />
     
    
   
        <div className={style.add_btn}>
        {index === resume.areaOfInterest.length - 1 && (
        <button onClick={handleAddInterest}>Add</button>
      )}
        </div>
      </div>

    ))}
  </section>
)}

        





{section === 13 && (
  <section>
    {/* References */}
    {resume.references.map((reference, index) => (
      <div key={index}>
        <h2 className={style.section_13_h2}>
          <div>
          Reference {index + 1}
          </div>
 
          <div className={style.dele_btn13}>
        {resume.references.length > 1 && (
        <button onClick={() => handleDeleteReference(index)}><AiFillDelete/></button>
      )}
        </div>
          </h2>
        <div className={style.section_13}>
          <div>
            <label htmlFor={`referenceName-${index}`}>Name:</label>
            <input
              type="text"
              id={`referenceName-${index}`}
              name={`referenceName-${index}`}
              value={reference.name}
              onChange={(e) => {
                const updatedReferences = [...resume.references];
                updatedReferences[index] = {
                  ...updatedReferences[index],
                  name: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    references: updatedReferences,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`referenceCompany-${index}`}>Company:</label>
            <input
              type="text"
              id={`referenceCompany-${index}`}
              name={`referenceCompany-${index}`}
              value={reference.company}
              onChange={(e) => {
                const updatedReferences = [...resume.references];
                updatedReferences[index] = {
                  ...updatedReferences[index],
                  company: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    references: updatedReferences,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`referencePosition-${index}`}>Position:</label>
            <input
              type="text"
              id={`referencePosition-${index}`}
              name={`referencePosition-${index}`}
              value={reference.position}
              onChange={(e) => {
                const updatedReferences = [...resume.references];
                updatedReferences[index] = {
                  ...updatedReferences[index],
                  position: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    references: updatedReferences,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`referenceEmail-${index}`}>Email:</label>
            <input
              type="email"
              id={`referenceEmail-${index}`}
              name={`referenceEmail-${index}`}
              value={reference.email}
              onChange={(e) => {
                const updatedReferences = [...resume.references];
                updatedReferences[index] = {
                  ...updatedReferences[index],
                  email: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    references: updatedReferences,
                  },
                });
              }}
            />
          </div>
          <div>
            <label htmlFor={`referencePhone-${index}`}>Phone:</label>
            <input
              type="tel"
              id={`referencePhone-${index}`}
              name={`referencePhone-${index}`}
              value={reference.phone}
              onChange={(e) => {
                const updatedReferences = [...resume.references];
                updatedReferences[index] = {
                  ...updatedReferences[index],
                  phone: e.target.value,
                };
                setFormData({
                  ...formData,
                  resume: {
                    ...resume,
                    references: updatedReferences,
                  },
                });
              }}
            />
          </div>
        </div>
  
   
        <div className={style.add_btn}>
        {index === resume.references.length - 1 && (
        <button onClick={handleAddReference}>Add</button>
      )}
        </div>
      </div>
    ))}
    <button className={style.submit_btn} type="submit">Submit</button>
  </section>
)}

      </form>
      <br />
      <div className={style.btn_box}>
        <button onClick={() => handleSection('prev')}>Previous</button>
        <button onClick={() => handleSection('next')}>Next</button>
        </div>
    </div>
  );
};

export default ResumeForm;
