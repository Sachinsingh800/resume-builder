// utils.js
export function formatResumeData(formData, image) {
    return {
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
      workExperience: [
        {
          positionTitle: formData.positionTitle,
          companyName: formData.companyName,
          startDate: formData.startDate,
          endDate: formData.endDate,
          workSummary: formData.workSummary,
        },
      ],
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
    };
  }
  


  