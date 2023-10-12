import { atom } from 'recoil';
import resume_1 from "./Component/Images/Template_1.png"
import resume_2 from "./Component/Images/Template_2.png"
import resume_3 from "./Component/Images/Template_3.png"
import Template_1 from './Component/ResumeTemplates/Template_1/Template_1';
import Template_2 from './Component/ResumeTemplates/Template_2/Template_2';
import Template_3 from './Component/ResumeTemplates/Template_3/Template_3';


// Define a placeholder value for 'dp'
import dp from "./Component/Images/dp.png"

export const resumeData = atom({
  key: 'resumeData',
  default: {
    status: true,
    message: "Resume created successfully",
    resume: {
      userId: "65105c16ac774d90e09123fb",
      jobTitle: "NodeJs Developer",
      name: "John Doe",
      summary: "A professional summary, also known as a career summary or executive summary, is a brief statement that provides a snapshot of your qualifications, skills, and career goals. It typically appears at the top of your resume or CV and is meant to grab the reader's attention quickly. Here's a short description of a professional summary:.",
      contact: {
        email: "john.doe@example.com",
        phone: "+1 (123) 456-7890",
      },
      address: {
        address: "new Address",
        city: "Anytown",
        state: "CA",
        postalCode: "12345",
        country: "USA",
      },
      dob: "1985-05-15",
      gender: "Male",

      profilePicture: {
        url:
          "https://res.cloudinary.com/decjoyrmj/image/upload/v1696400898/course_profilePictures/puhwvmekanurjar8l4dk.png",
        public_Id: "course_profilePictures/puhwvmekanurjar8l4dk",
      },
      education: [
        {
          degree: "Bachelor of Science",
          collegeName: "ABC University",
          stream: "Computer Science",
          startYear: "2003",
          endYear: "2007",
          _id: "651d0603587cea4128a820f5",
        },
        {
          degree: "Bachelor of Science",
          collegeName: "ABC University",
          stream: "Computer Science",
          startYear: "2003",
          endYear: "2007",
          _id: "651d0603587cea4128a820f5",
        },
      ],
      work: [
        {
          title: "Senior Software Engineer",
          company: "XYZ Tech",
          startDate: "2007-06-15",
          endDate: "2021-12-31",
          location: "Techville",
          description: "Led development teams and delivered high-quality software solutions.Led development teams and delivered high-quality software solutions.",
          _id: "651d0603587cea4128a820f6",
        },
        {
          title: "Senior Software Engineer",
          company: "XYZ Tech",
          startDate: "2007-06-15",
          endDate: "2021-12-31",
          location: "Techville",
          description: "Led development teams and delivered high-quality software solutions.",
          _id: "651d0603587cea4128a820f6",
        },
        {
          title: "Senior Software Engineer",
          company: "XYZ Tech",
          startDate: "2007-06-15",
          endDate: "2021-12-31",
          location: "Techville",
          description: "Led development teams and delivered high-quality software solutions.",
          _id: "651d0603587cea4128a820f6",
        },
      ],
      skillsAndLevel: [
        {
          skills: "JavaScript",
          level: "Advanced",
          _id: "651d0603587cea4128a820f7",
        },
        {
          skills: "JavaScript",
          level: "Advanced",
          _id: "651d0603587cea4128a820f7",
        },
        {
          skills: "JavaScript",
          level: "Advanced",
          _id: "651d0603587cea4128a820f7",
        },
        {
          skills: "JavaScript",
          level: "Advanced",
          _id: "651d0603587cea4128a820f7",
        },
        {
          skills: "JavaScript",
          level: "Advanced",
          _id: "651d0603587cea4128a820f7",
        },
        {
          skills: "JavaScript",
          level: "Advanced",
          _id: "651d0603587cea4128a820f7",
        },
      ],
      internShips: [
        {
          title: "Software Development Intern",
          company: "Internship Corp",
          startDate: "2006-05-01",
          endDate: "2006-08-31",
          location: "Intern City",
          description: "Gained experience in web development during the summer internship.",
          _id: "651d0603587cea4128a820f8",
        },
      ],
      projects: [
        {
          title: "E-commerce Website",
          description: "Built a fully functional e-commerce website using React and Node.js.",
          year: "2019",
          link: "https://example.com/ecommerce",
          _id: "651d0603587cea4128a820f9",
        },
      ],
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        portfolio: "https://johndoe.dev",
      },
      knownLanguages: [
        {
          lang: "English",
          _id: "651d0603587cea4128a820fa",
        },
        {
          lang: "Spanish",
          _id: "651d0603587cea4128a820fb",
        },
      ],
      certifications: [
        {
          title: "Certified AWS Developer",
          issuingOrganization: "AWS",
          date: "2020-03-15",
          _id: "651d0603587cea4128a820fc",
        },
        {
          title: "Certified AWS Developer",
          issuingOrganization: "AWS",
          date: "2020-03-15",
          _id: "651d0603587cea4128a820fc",
        },
        {
          title: "Certified AWS Developer",
          issuingOrganization: "AWS",
          date: "2020-03-15",
          _id: "651d0603587cea4128a820fc",
        },
        {
          title: "Certified AWS Developer",
          issuingOrganization: "AWS",
          date: "2020-03-15",
          _id: "651d0603587cea4128a820fc",
        },
      ],
      awards: [
        {
          title: "Employee of the Month",
          issuingOrganization: "XYZ Tech",
          date: "2018-11-01",
          _id: "651d0603587cea4128a820fd",
        },
      ],
      volunteerExperience: [
        {
          title: "Volunteer Tutor",
          company: "Local Community Center",
          startDate: "2015-09-01",
          endDate: "2016-05-31",
          location: "Community City",
          description: "Provided tutoring services to local students.",
          _id: "651d0603587cea4128a820fe",
        },
      ],
      areaOfInterest: [
        {
          interest: "Machine Learning",
          _id: "651d0603587cea4128a820ff",
        },
        {
          interest: "Web Development",
          _id: "651d0603587cea4128a82100",
        },
      ],
      references: [
        {
          name: "Jane Smith",
          company: "ABC Inc.",
          position: "Manager",
          email: "jane.smith@example.com",
          phone: "+1 (987) 654-3210",
          _id: "651d0603587cea4128a82101",
        },
      ],
      interestedIn: "job",
      _id: "651d0603587cea4128a820f4",
      createdAt: "2023-10-04T06:28:19.546Z",
      updatedAt: "2023-10-04T06:28:19.546Z",
      __v: 0,
    },
  },
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
  default: null, // Initial value is null
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
  resume_1,
  resume_2,
  resume_3,
  resume_1,
  resume_2,
  resume_3,
  ], // Set the default value to an empty array
});



export const fontState = atom({
  key: 'fontState',
  default:  "Arial"

});
export const fontSizeState = atom({
  key: 'fontSizeState',
  default:  "12px"

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