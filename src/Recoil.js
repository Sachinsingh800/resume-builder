import { atom } from 'recoil';
import Template_1 from './Component/ResumeTemplates/Template_1/Template_1';
import Template_2 from './Component/ResumeTemplates/Template_2/Template_2';
import Template_3 from './Component/ResumeTemplates/Template_3/Template_3';

// Define a placeholder value for 'dp'
import dp from "./Component/Images/dp.png"

export const resume = atom({
  key: 'resume',
  default: {
    status: true,
    message: "Resume created successfully",
    resume: {
      userId: "65105c16ac774d90e09123fb",
      jobTitle: "NodeJs Developer",
      name: "John Doe",
      summary: "Experienced software engineer with a passion for coding.",
      contact: {
        email: "john.doe@example.com",
        phone: "+1 (123) 456-7890",
      },
      dob: "1985-05-15",
      gender: "Male",
      address: {
        address: "new Address",
        city: "Anytown",
        state: "CA",
        postalCode: "12345",
        country: "USA",
      },
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
      ],
      work: [
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
export const chooseTemplates = atom({
  key: 'chooseTemplates',
  default:0
});




export const resumeType = atom({
  key: 'resumeType',
  default: "", // Set an appropriate default value
});