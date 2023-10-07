import React, { useState } from 'react';
import style from "./CreateResumeForm.module.css"
import { useRecoilState } from 'recoil';
import { resumeData } from '../../Recoil'; 
import dp_icon from '../Images/dp_icon.gif';
import ImageModal from '../ImageModal/ImageModal';
import { croppedImageState } from '../../Recoil';


const ResumeForm = () => {
  const [formData,   setFormData] = useRecoilState(resumeData);
  const [section, setSection] = useState(1);
  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);
  

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


  const handleSection = (direction) => {
    if (direction === 'next' && section < 13) {
      setSection(section + 1);
    } else if (direction === 'prev' && section > 1) {
      setSection(section - 1);
    }
  };

  return (
    <div>
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
            value={resume.summary}
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
  <section>
    {/* Education */}
    {resume.education.map((education, index) => (
      <div key={index}>
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
        <h2>Work Experience {index + 1}</h2>
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
          </div>
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
  <section className={style.section_8}>
    {/* Known Languages */}
    {resume.knownLanguages.map((language, index) => (
      <div key={index}>
        <h2>Known Languages {index + 1}</h2>
        <label htmlFor={`language-${index}`}>Language:</label>
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
      </div>
    ))}
  </section>
)}









{section === 9 && (
  <section className={style.section_9}>
    {/* Certifications */}
    {resume.certifications.map((certification, index) => (
      <div key={index}>
        <h2>Certification {index + 1}</h2>
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
      </div>
    ))}
  </section>
)}








{section === 10 && (
  <section className={style.section_9}>
    {/* Awards */}
    {resume.awards.map((award, index) => (
      <div key={index}>
        <h2>Award {index + 1}</h2>
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
      </div>
    ))}
  </section>
)}



       

{section === 11 && (
  <section>
    {/* Volunteer Experience */}
    {resume.volunteerExperience.map((volunteer, index) => (
      <div key={index}>
        <h2>Volunteer Experience {index + 1}</h2>
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
      </div>
    ))}
  </section>
)}

       




{section === 12 && (
  <section className={style.section_12}>
    {/* Areas of Interest */}
    {resume.areaOfInterest.map((interest, index) => (
      <div key={index}>
        <h2>Areas of Interest {index + 1}</h2>
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
      </div>
    ))}
  </section>
)}

        





{section === 13 && (
  <section>
    {/* References */}
    {resume.references.map((reference, index) => (
      <div key={index}>
        <h2>Reference {index + 1}</h2>
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
