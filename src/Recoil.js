import { atom } from 'recoil';
import resume_1 from "./Component/Images/Template_1.png"
import resume_2 from "./Component/Images/Template_2.png"
import resume_3 from "./Component/Images/Template_3.png"
import Template_1 from './Component/ResumeTemplates/Template_1/Template_1';
import Template_2 from './Component/ResumeTemplates/Template_2/Template_2';
import Template_3 from './Component/ResumeTemplates/Template_3/Template_3';


const resume = JSON.parse(localStorage.getItem("resume"))




export const resumeData = atom({
  key: 'resumeData',
  default: {
    status: true,
    message: "Resume created successfully",
    resume: {
      userId: resume?._id,
      jobTitle:resume?.category ,
      name: resume?.name,
      summary: resume?.summary,
      contact: resume?.contact,
      address: resume?.address,
      dob: resume?.dob,
      gender: resume?.gender,
      profilePicture:resume?.profilePicture ,
      education: resume?.education,
      work: resume?.work,
      skillsAndLevel: resume?.skillsAndLevel ,
      internShips: resume?.internShips,
      projects: resume?.projects,
      socialLinks: resume?.socialLinks,
      knownLanguages: resume?.knownLanguages,
      certifications:resume?.certifications,
      awards: resume?.awards,
      volunteerExperience: resume?.volunteerExperience,
      areaOfInterest: resume?.areaOfInterest,
      references:resume?.references,
      interestedIn: "job",

    },
  },
});






export const selectedJobCate = atom({
  key: 'selectedJobCate',
  default:""
});

export const ChooseColor = atom({
  key: 'ChooseColor',
  default:"#113f67"
});

export const ChooseColorSecond = atom({
  key: 'ChooseColorSecond',
  default:"grey"
});
export const ChooseColorThird= atom({
  key: 'ChooseColorThird',
  default:"black"
});


export const croppedImageState = atom({
  key: 'croppedImageState',
  default: null, // The default value is null, as no cropped image is selected initially.
});
export const uploadImage = atom({
  key: 'uploadImage',
  default: [], // The default value is null, as no cropped image is selected initially.
});



export const targetRefState = atom({
  key: 'targetRefState',
  default: null, // Set an appropriate default value
});

export const pdfOptionsState = atom({
  key: 'pdfOptionsState',
  default: {}, // Set appropriate default PDF options
});

export const resumeTemplates = atom({
  key: 'resumeTemplates', // Unique ID (with respect to other atoms/selectors)
  default: [
   <Template_1/>,
   <Template_2/>,
   <Template_3/>,
  ], // Set the default value to an empty array
});

export const imageresumeTemplates = atom({
  key: 'imageresumeTemplates', // Unique ID (with respect to other atoms/selectors)
  default: [
  resume_1,
  resume_2,
  resume_3,

  ], // Set the default value to an empty array
});



export const modalValue = atom({
  key: "modalValue",
  default:  false

});
export const fontState = atom({
  key: 'fontState',
  default:  "Arial"

});
export const fontSizeState = atom({
  key: 'fontSizeState',
  default:  "50px"

});
export const imageSizeState = atom({
  key: 'imageSizeState ',
  default:  "150px"

});


export const chooseTemplates = atom({
  key: 'chooseTemplates',
  default:0
});




export const resumeType = atom({
  key: 'resumeType',
  default: "", // Set an appropriate default value
});


export const summarySuggestion = atom({
  key: 'summarySuggestion', // Unique ID (with respect to other atoms/selectors)
  default:[
    {
        _id: "652514d32dbc5c3b5ae906a8",
        summary: "I am a passionate and experienced Node.js developer with a strong background in building scalable and efficient web applications. With over 5 years of hands-on experience, I have a proven track record of delivering high-quality code and solutions for a variety of projects. My expertise includes server-side development, API design, and database management.",
        __v: 0
    },
    {
        _id: "652514d32dbc5c3b5ae906a8",
        summary: "a passionate frontend developer with a creative flair and a strong love for crafting interactive and user-friendly web experiences. With a keen eye for design and a knack for turning ideas into beautiful, functional websites, I bring to life the digital visions of businesses and individuals. Proficient in HTML, CSS, and JavaScript, I'm dedicated to staying up-to-date with the latest frontend technologies and best practices to ensure that every project I work on is not only visually appealing but also highly performant and accessible. ",
        __v: 0
    },
    {
        _id: "652514d32dbc5c3b5ae906a8",
        summary: "I am a passionate and experienced Node.js developer with a strong background in building scalable and efficient web applications. With over 5 years of hands-on experience, I have a proven track record of delivering high-quality code and solutions for a variety of projects. My expertise includes server-side development, API design, and database management.",
        __v: 0
    },

]
});

export const skillSuggestion = atom({
  key: 'skillSuggestion', // Unique ID (with respect to other atoms/selectors)
  default:[
    {
        _id: "64e60a8ca6a8e0ceeee7669e",
        skills: "React",
        __v: 0
    },
    {
        _id: "64e60a8ca6a8e0ceeee7669e",
        skills: "Node js",
        __v: 0
    },
    {
        _id: "64e60a8ca6a8e0ceeee7669e",
        skills: "Java",
        __v: 0
    },
  
]
});

export const languageSuggestion = atom({
  key: 'languageSuggestion', // Unique ID (with respect to other atoms/selectors)
  default:[
    {
        _id: "65251392e78d5e9186945c4b",
        languageName: "Hindi",
        __v: 0
    },
    {
        _id: "65251392e78d5e9186945c4b",
        languageName: "Urdu",
        __v: 0
    },
]
});

export const interestSuggestion = atom({
  key: 'interestSuggestion', // Unique ID (with respect to other atoms/selectors)
  default:[
    {
        _id: "65251abeaa674dea8d444096",
        interestName: "Machine Learning",
        __v: 0
    },
    {
        _id: "65251abeaa674dea8d444096",
        interestName: "Python Learning",
        __v: 0
    },
 
]
});

export const educationSuggestion = atom({
  key: 'educationSuggestion', // Unique ID (with respect to other atoms/selectors)
  default:[
    {
      title: "Order of Education",
      content: "List your educational history in reverse chronological order, starting with your most recent or highest level of education and working backward."
    },
    {
      title: "Include the following information for each educational institution you attended:",
      subpoints: [
        {
          letter: "a.",
          content: "Degree Earned: Specify the type of degree you earned (e.g., Bachelor of Science, Master of Education)."
        },
        {
          letter: "b.",
          content: "Major or Field of Study: Mention your major or concentration, especially if it's relevant to the job you're applying for."
        },
        {
          letter: "c.",
          content: "Institution Name: Provide the full name of the educational institution you attended."
        },
        {
          letter: "d.",
          content: "Location: Include the city and state or country where the institution is located."
        },
        {
          letter: "e.",
          content: "Graduation Date: State the month and year when you graduated or expect to graduate."
        },
        {
          letter: "f.",
          content: "Honors and Awards: If you received any academic honors, scholarships, or awards, mention them."
        },

      ]
    },
        {
          title: "Relevant Coursework:",
          content: " Consider including relevant coursework or specific projects if they are directly related to the job you're applying for. This can help show your expertise in a particular area."
        },
        {
          title: "GPA (Optional): ",
          content: "Include your GPA if it's impressive (typically 3.0 or higher) or if the employer requests it. If your GPA is lower, you may choose to omit it."
        },
        {
          title: "Thesis or Research: ",
          content: "If you completed a thesis, dissertation, or significant research project, briefly mention the topic and any notable findings or outcomes."
        },
        {
          title: "Professional Certifications:",
          content: " Include any relevant certifications or licenses you obtained during or after your education, such as teaching certifications or professional development certificates."
        },
        {
          title: "Continuing Education:",
          content: " If you've pursued further education or professional development after your degree, list relevant courses or certifications in this section."
        },
        {
          title: "High School Information (Optional): ",
          content: "Generally, you don't need to include high school details on your resume unless you're a recent high school graduate or if the employer specifically requests it."
        },
        {
          title: "Relevance to the Job:",
          content: " Tailor your education details to align with the requirements of the job you're applying for. Emphasize coursework, degrees, or certifications that are most relevant."
        },
        {
          title: "Be Truthful:",
          content: " Ensure that all the information you provide is accurate and truthful."
        }
      ]
});






export const  intershipSuggestion = atom({
  key: 'intershipSuggestion', // Unique ID (with respect to other atoms/selectors)
  default: [
    {
      title: "Internship Title:",
      content: "Mention the title of your internship role. This should give a clear idea of your responsibilities and the focus of your internship."
    },
    {
      title: "Company/Organization Name:",
      content: "Include the name of the company or organization where you completed your internship."
    },
    {
      title: "Start and End Dates:",
      content: "Specify the dates when you started and finished the internship. This helps the employer understand the duration of your experience."
    },
    {
      title: "Location:",
      content: "Mention the location (city or region) of the internship. This can be important, especially if you're applying for a job in a specific area."
    },
    {
      title: "Key Responsibilities:",
      content: "Describe your main duties and responsibilities during the internship. Be specific and highlight tasks that are relevant to the job you're applying for."
    },
    {
      title: "Achievements and Accomplishments:",
      content: "Highlight any significant achievements or projects you completed during the internship. Did you contribute to a successful project, implement improvements, or receive recognition? Mention it here."
    },
    {
      title: "Skills Developed:",
      content: "Explain the skills you developed or enhanced during the internship. This might include technical skills, soft skills, or industry-specific knowledge."
    },
    {
      title: "Tools and Technologies:",
      content: "Mention any software, tools, or technologies you used during the internship. This can be especially important if you gained experience with industry-specific software."
    },
    {
      title: "Team Collaboration:",
      content: "Describe how you collaborated with colleagues, teams, or supervisors. Effective teamwork and communication skills are often highly valued by employers."
    },
    {
      title: "Challenges Faced:",
      content: "If you encountered and overcame challenges during your internship, it can demonstrate your problem-solving and adaptability skills."
    },
    {
      title: "Learnings and Takeaways:",
      content: "Reflect on what you learned during the internship and how it contributed to your professional growth."
    },
    {
      title: "Quantify Achievements:",
      content: "Where possible, use quantifiable data to showcase the impact of your work. For example, 'increased website traffic by 20%' or 'completed 10 projects ahead of schedule.'"
    },
    {
      title: "Relevant Projects:",
      content: "If you worked on specific projects during your internship, detail them separately, including project names, your role, and outcomes."
    },
    {
      title: "References:",
      content: "If appropriate, provide references or contacts from the internship organization who can vouch for your work."
    },
    {
      title: "Honesty and Accuracy:",
      content: "Ensure that all information you provide is accurate and truthful. Exaggerating or fabricating details on your resume can be detrimental to your job search."
    },
    {
      title: "Tailor to the Job:",
      content: "Customize the internship details based on the specific job you're applying for. Emphasize experiences and skills that are most relevant to the position."
    },
    {
      title: "Formatting:",
      content: "Organize the information in a clear and concise format. Use bullet points, headings, and a consistent structure to make it easy for the reader to scan your internship details."
    }
  ]
});





export  const projectSuggestion = atom({
  key: 'projectSuggestion',
  default: [
    {
      title: "Project Title:",
      content: "Mention the title of the project. The title should provide an immediate understanding of the project's nature."
    },
    {
      title: "Project Duration:",
      content: "Specify the start and end dates of the project. This helps employers understand the timeline of your work."
    },
    {
      title: "Project Description:",
      content: "Provide a brief overview of the project, including its purpose, goals, and any challenges it aimed to address."
    },
    {
      title: "Your Role:",
      content: "Explain your specific role and responsibilities within the project. Highlight your contributions and leadership if applicable."
    },
    {
      title: "Key Achievements:",
      content: "Describe the major accomplishments or results of the project. Use quantifiable metrics when possible, such as increased revenue, improved efficiency, or reduced costs."
    },
    {
      title: "Tools and Technologies:",
      content: "Mention the software, tools, programming languages, and technologies you used to complete the project. This is especially important for technical roles."
    },
    {
      title: "Team Collaboration:",
      content: "Highlight how you collaborated with team members, including your communication and problem-solving skills."
    },
    {
      title: "Challenges Faced:",
      content: "Describe any challenges, obstacles, or issues that arose during the project and how you addressed them."
    },
    {
      title: "Lessons Learned:",
      content: "Reflect on what you learned from the project, including new skills, knowledge, or personal growth."
    },
    {
      title: "Relevance to Job:",
      content: "Emphasize how the project is relevant to the job you're applying for. Connect the skills and experiences gained from the project to the job's requirements."
    },
    {
      title: "Use Action Verbs:",
      content: "Use strong action verbs to start your bullet points, such as 'implemented,' 'developed,' 'led,' 'designed,' and 'optimized.' This makes your achievements more impactful."
    },
    {
      title: "Consistency:",
      content: "Maintain a consistent format for presenting project details throughout your resume. This makes it easier for the reader to understand your experiences."
    },
    {
      title: "Tailor to the Job:",
      content: "Customize the project details based on the specific job you're applying for. Highlight experiences and skills that align with the position's requirements."
    },
    {
      title: "Prioritize Relevant Projects:",
      content: "If you have worked on multiple projects, prioritize and include the most relevant ones, especially if space is limited on your resume."
    },
    {
      title: "Formatting:",
      content: "Organize the information in a clear and concise format, using bullet points, headings, and a consistent structure."
    }
  ]
});


export const referenceSuggestion = atom({
  key: 'referenceSuggestion',
  default: [
    {
      title: "Include Professional References:",
      content: "Typically, include references who can speak to your professional qualifications and work experience. This could be former supervisors, colleagues, or clients."
    },
    {
      title: "Ask for Permission:",
      content: "Always ask for permission before including someone as a reference. Not only is this common courtesy, but it also ensures that they are prepared to vouch for you."
    },
    {
      title: "Provide Contact Information:",
      content: "Include the reference's full name, title, company or organization, phone number, and email address. Make it easy for potential employers to contact them."
    },
    {
      title: "Specify Your Relationship:",
      content: "Briefly explain your professional relationship with the reference. For example, 'Supervisor at XYZ Company.'"
    },
    {
      title: "Highlight Their Expertise:",
      content: "Mention what expertise or skills the reference can speak to. For example, 'Can speak to my project management skills and leadership abilities.'"
    },
    {
      title: "Tailor to the Job:",
      content: "If possible, tailor your choice of references to the job you're applying for. For instance, if the job requires a specific skill, choose a reference who can speak to your proficiency in that area."
    },
    {
      title: "Keep It Current:",
      content: "Ensure that your reference's information is up-to-date. If they have changed jobs or contact details, make sure your resume reflects this."
    },
    {
      title: "Number of References:",
      content: "It's common to provide 2-3 references. You can include more if requested, but don't overwhelm the employer with a long list of references."
    },
    {
      title: "Separate Page or Upon Request:",
      content: "It's common to create a separate 'References' page in your resume, or you can state 'References available upon request.' This is especially useful if you want to save space on your resume."
    },
    {
      title: "Notify Your References:",
      content: "If you're actively job hunting and expect potential employers to contact your references, it's a good practice to notify your references. This allows them to anticipate the calls and be prepared to provide a positive recommendation."
    },
    {
      title: "Follow Up with Your References:",
      content: "After providing your references, it's a good practice to follow up with them and inform them about the job applications you've submitted. This gives them context and allows them to provide relevant information."
    },
    {
      title: "Maintain Professional Relationships:",
      content: "Keep in touch with your references even when you're not actively job hunting. Building and maintaining professional relationships can make it easier to secure strong references when needed."
    },
  ]
});


export const socialLinksSuggestion = atom({
  key: 'socialLinksSuggestion',
  default: [
    {
      title: "LinkedIn Profile:",
      content: "Include a link to your LinkedIn profile. Make sure your LinkedIn profile is complete, up-to-date, and professional. This is a critical platform for networking and showcasing your professional background."
    },
    {
      title: "GitHub or Portfolio:",
      content: "If you're in a technical field, providing a link to your GitHub profile or an online portfolio of your work can be highly valuable. It allows employers to review your coding projects or creative work."
    },
    {
      title: "Personal Website:",
      content: "If you have a personal website or blog that's relevant to your field, consider sharing a link. Your website can showcase your expertise, projects, and personal brand."
    },
  ]
});




export const certificationSuggestion = atom({
  key: 'certificationSuggestion',
  default: [
    {
      title: "Certification Title:",
      content: "Include the title of the certification you earned. Make it clear and concise so that the employer immediately understands your qualification."
    },
    {
      title: "Issuing Organization:",
      content: "Mention the organization or institution that issued the certification. This provides credibility and context for your qualification."
    },
    {
      title: "Date of Certification:",
      content: "Specify the date when you received the certification. This information helps employers gauge the recency of your knowledge and skills."
    },
    {
      title: "Relevance:",
      content: "Highlight certifications that are directly related to the job you're applying for. Emphasize how the certification is beneficial for the specific role."
    },
    {
      title: "Certification Number (if applicable):",
      content: "If your certification comes with a unique identifier or certification number, consider including it. This can be important for verification."
    },
    {
      title: "Duration or Expiration:",
      content: "If the certification has an expiration date or duration of validity, mention it. Some certifications require periodic renewal, and employers may want to know the status."
    },
    {
      title: "Skills and Knowledge:",
      content: "In the bullet points or descriptions, briefly outline the key skills and knowledge you gained through the certification. Explain how these skills are applicable to the job."
    },
    {
      title: "Certification Achievements:",
      content: "If you achieved any notable distinctions during the certification process (e.g., highest scorer, completion of advanced modules), mention them."
    },
    {
      title: "Coursework or Curriculum:",
      content: "For longer certification programs, briefly describe the coursework or curriculum you completed. This provides insight into the depth of your training."
    },
    {
      title: "Use Action Verbs:",
      content: "Start your bullet points with strong action verbs to convey the impact of your certification. For example, use words like 'achieved,' 'earned,' 'mastered,' or 'specialized.'"
    },
    {
      title: "Formatting:",
      content: "Organize your certifications in a consistent and clear format. Use bullet points, headings, and a logical structure to make it easy for the reader to scan."
    },
    {
      title: "Prioritize Relevant Certifications:",
      content: "If you have multiple certifications, prioritize and include the most relevant ones. Tailor your list based on the job requirements."
    },
    {
      title: "Honesty and Accuracy:",
      content: "Ensure that all information regarding your certifications is accurate and truthful. Misrepresenting your qualifications can be detrimental to your job search."
    },
    {
      title: "Additional Details:",
      content: "Some certifications may require additional details, such as the number of training hours, specific modules completed, or specific skills acquired. Include such information when relevant."
    },
    {
      title: "Professional Designations:",
      content: "If you hold professional designations (e.g., CPA, PMP), be sure to include them in the certification section. These designations carry significant weight in certain industries."
    },
    {
      title: "Certification Logos (optional):",
      content: "If the certification provider offers official logos or badges, consider including them. These visual elements can add credibility to your qualifications."
    },
    {
      title: "Online Verification:",
      content: "Mention if the certification can be verified online through the issuing organization's website. This can reassure employers of the authenticity of your certification."
    },
    {
      title: "Tailor to the Job:",
      content: "Customize your certification details based on the specific job you're applying for. Highlight certifications that align with the role's requirements and responsibilities."
    },
  ]
});





export  const awardSuggestion = atom({
  key: 'awardSuggestion',
  default: [
    {
      title: "Award Title:",
      content: "Include the title of the award. The title should be clear and concise, giving the reader an immediate understanding of the recognition."
    },
    {
      title: "Issuing Organization:",
      content: "Mention the organization, company, or institution that issued the award. This provides context and credibility to the recognition."
    },
    {
      title: "Date of Award:",
      content: "Specify the date when you received the award. This helps employers gauge the recency of your achievements."
    },
    {
      title: "Significance:",
      content: "Describe why the award is significant. Explain the criteria or achievements that led to your recognition. Highlight any competition or selection process, if applicable."
    },
    {
      title: "Key Achievements:",
      content: "Detail the specific accomplishments that led to the award. Use quantifiable metrics when possible to showcase the impact of your work. For example, mention specific results, percentages, or improvements."
    },
    {
      title: "Relevance to Job:",
      content: "Emphasize how the award is relevant to the job you're applying for. Connect the recognition to the skills and qualities required for the position."
    },
    {
      title: "Use Action Verbs:",
      content: "Start your bullet points or descriptions with strong action verbs to convey the impact of your award. For example, use words like 'achieved,' 'won,' 'earned,' or 'received.'"
    },
    {
      title: "Formatting:",
      content: "Organize your awards in a consistent and clear format. Use bullet points, headings, and a logical structure to make it easy for the reader to scan."
    },
    {
      title: "Prioritize Relevant Awards:",
      content: "If you have received multiple awards, prioritize and include the most relevant ones. Tailor your list based on the job requirements."
    },
    {
      title: "Honesty and Accuracy:",
      content: "Ensure that all information regarding your awards is accurate and truthful. Misrepresenting your achievements can be detrimental to your job search."
    },
    {
      title: "Professional Associations:",
      content: "Mention if the award is associated with a specific professional organization or association. This can carry weight in certain industries."
    },
    {
      title: "Award Logos (optional):",
      content: "If the award provider offers official logos or badges, consider including them. These visual elements can add credibility to your achievements."
    },
    {
      title: "Publications or Media Coverage (if applicable):",
      content: "If your award resulted in publications, media coverage, or recognition in industry journals, mention it. This provides additional context and credibility."
    },
    {
      title: "Tailor to the Job:",
      content: "Customize the award details based on the specific job you're applying for. Highlight awards that align with the role's requirements and responsibilities."
    },
    {
      title: "Additional Details:",
      content: "Some awards may require additional details, such as the names of judges or committees, the award ceremony location, or the award's history. Include such information when relevant."
    },
  ]
});



export const volunteerExperienceSuggestion = atom({
  key: 'volunteerExperienceSuggestion',
  default: [
    {
      title: "Volunteer Position:",
      content: "Include the position or role you held as a volunteer. Make the title descriptive and relevant to the work you performed."
    },
    {
      title: "Organization:",
      content: "Mention the name of the organization or charity where you volunteered. This provides context and helps employers understand the nature of your volunteer work."
    },
    {
      title: "Dates of Volunteering:",
      content: "Specify the start and end dates of your volunteer work. This helps employers gauge the duration of your commitment."
    },
    {
      title: "Location:",
      content: "Include the location (city or region) where you volunteered. This can be important, especially if you're applying for a job in a specific area."
    },
    {
      title: "Key Responsibilities:",
      content: "Describe your main duties and responsibilities as a volunteer. Be specific and highlight tasks that are relevant to the job you're applying for. Use action verbs to start your bullet points, such as 'organized,' 'coordinated,' or 'managed.'"
    },
    {
      title: "Achievements:",
      content: "Highlight any significant achievements or projects you completed during your volunteer work. Did you contribute to a successful campaign, reach fundraising goals, or lead a team of volunteers? Mention it here."
    },
    {
      title: "Skills Developed:",
      content: "Explain the skills you developed or enhanced through your volunteer experience. This might include leadership skills, teamwork, communication, problem-solving, or industry-specific knowledge."
    },
    {
      title: "Impact:",
      content: "Describe the impact of your volunteer work on the organization or cause. Use quantifiable data, if possible, to showcase the results of your contributions. For example, 'increased volunteer participation by 30%.'"
    },
    {
      title: "Challenges Faced:",
      content: "If you encountered and overcame challenges during your volunteer work, it can demonstrate your problem-solving and adaptability skills."
    },
    {
      title: "Learnings and Takeaways:",
      content: "Reflect on what you learned from your volunteer experience and how it contributed to your personal and professional growth."
    },
    {
      title: "Relevance to Job:",
      content: "Emphasize how your volunteer experience is relevant to the job you're applying for. Connect the skills and qualities gained from volunteering to the job's requirements."
    },
    {
      title: "Tailor to the Job:",
      content: "Customize the volunteer experience details based on the specific job you're applying for. Highlight experiences and skills that align with the position's requirements."
    },
    {
      title: "Formatting:",
      content: "Organize the information in a clear and concise format, using bullet points, headings, and a consistent structure to make it easy for the reader to scan your volunteer experiences."
    },
    {
      title: "Honesty and Accuracy:",
      content: "Ensure that all information regarding your volunteer experiences is accurate and truthful. Exaggerating or fabricating details on your resume can be detrimental to your job search."
    },
    {
      title: "References:",
      content: "If appropriate, provide references or contacts from the volunteer organization who can vouch for your work and character."
    },
  ]
});



export const workSuggestion = atom({
  key: 'workSuggestion', // Unique ID (with respect to other atoms/selectors)
  default:[
    {
      title: "Start with Your Contact Information:",
      content: "At the top of your resume, include your name, phone number, email address, and possibly your LinkedIn profile (if applicable)."
    },
    {
      title: "Resume Title or Objective (Optional):",
      content: "A brief one- or two-line summary of your career objective or the type of position you are seeking."
    },
    {
      title: "List Your Work Experience:",
      subpoints: [
        {
          letter: "a.",
          content: "Job Title: Your position in the company."
        },
        {
          letter: "b.",
          content: "Company Name: The name of the company or organization."
        },
        {
          letter: "c.",
          content: "Location: The location (city, state) of the company."
        },
        {
          letter: "d.",
          content: "Dates Employed: The period you worked in that position (e.g., month/year - month/year)."
        },
        {
          letter: "e.",
          content: "Job Description: A description of your roles and responsibilities."
        },
     

      ]
    },
        {
          title: "Use Bulleted Lists:",
          content: "Describe your job responsibilities and accomplishments using bullet points for clarity and readability."
        },
        {
          title: "Quantify Achievements: ",
          content: "Whenever possible, use specific numbers and metrics to highlight your achievements and contributions (e.g., increased sales by 20%, managed a team of 10, completed projects under budget by 15% )."
        },
        {
          title: "Highlight Achievements and Skills:",
          content: "Emphasize your most relevant and impressive achievements and skills for each position.."
        },
        {
          title: "Use Action Verbs:",
          content: "Begin each bullet point with a strong action verb (e.g., managed, implemented, designed, improved)."
        },
        {
          title: "Tailor Your Content:",
          content: "Customize the content to match the job description and requirements of the position you're applying for."
        },
        {
          title: "Show Career Progression: ",
          content: "If applicable, demonstrate how your roles have advanced in terms of responsibilities and impact."
        },
        {
          title: "Include Relevant Experience:",
          content: "Prioritize work experiences that are most relevant to the job you're applying for. You may not need to include every job you've ever had."
        },
        {
          title: "Address Employment Gaps (if any):",
          content: "If you have employment gaps, provide brief explanations, if necessary."
        }
      ]
});

export const suggestionData= atom({
  key: 'suggestionData',
  default:1
});
export const selectedValue1= atom({
  key: 'selectedValue1',
  default:""
});
export const selectedValue2= atom({
  key: 'selectedValue2',
  default:""
});