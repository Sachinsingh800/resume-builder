import { atom } from 'recoil';

// Define a placeholder value for 'dp'
import dp from "./Component/Images/dp.png"

export const Name = atom({
  key: 'name',
  default: {
    profilePicture: dp,
    jobTitle: 'Web Developer',
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
    address: '123 Main Street',
    city: 'Sample City',
    postCode: '12345',
    state: 'Sample State',
    country: 'Sample Country',
    bio:
      "Creating a fully functional resume template in React.js is a complex task that involves designing the user interface, handling user input, and possibly integrating with a database or backend service to store and retrieve resume data. I'll provide you with a simplified example of a basic resume template in React.js to get you started. This example won't include all possible features but will serve as a starting point.",
    workExperience: [
      {
        positionTitle: 'Software Engineer',
        companyName: 'ABC Inc.',
        startDate: 'January 2019',
        endDate: 'Present',
        workSummary: 'Worked on various web development projects.',
      },
    ],
    education: [
      {
        schoolName: 'University of XYZ',
        schoolLocation: 'Sample Location',
        startDate: 'August 2015',
        endDate: 'May 2019',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        description: 'Graduated with honors.',
      },
    ],
    skillSummary: ["JavaScript", "React", "HTML", "CSS", "Node.js"],
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