import React from "react";
import { useRecoilValue } from 'recoil';
import { jobApplicationState } from "../../../Recoil"; 

const CoverLetter1 = () => {
  const formData = useRecoilValue(jobApplicationState);

  return (
    <div>
      <h2>Job Application Form</h2>

      {/* Personal Information */}
      <h3>Personal Information</h3>
      <p>
        <strong>Name:</strong> {formData.nameAndContact.firstName}{" "}
        {formData.nameAndContact.lastName}
      </p>
      <p>
        <strong>Profession:</strong> {formData.nameAndContact.profession}
      </p>
      <p>
        <strong>Contact:</strong> {formData.nameAndContact.phoneNumber},{" "}
        {formData.nameAndContact.email}
      </p>

      {/* Date */}
      <h3>Date</h3>
      <p>{formData.date}</p>

      {/* Recipient Information */}
      <h3>Recipient Information</h3>
      <p>
        <strong>Recipient:</strong> {formData.recipient.firstName}{" "}
        {formData.recipient.lastName}
      </p>
      <p>
        <strong>Company:</strong> {formData.recipient.companyName}
      </p>
      <p>
        <strong>Contact:</strong> {formData.recipient.phoneNumber},{" "}
        {formData.recipient.email}
      </p>

      {/* Cover Letter */}
      <h3>Cover Letter</h3>
      <p>
        <strong>Subject:</strong> {formData.subject}
      </p>
      <p>
        <strong>Greeting:</strong> {formData.greeting}
      </p>
      <p>
        <strong>Opening:</strong> {formData.opening}
      </p>
      <p>
        <strong>Letter Body:</strong> {formData.letterBody}
      </p>
      <p>
        <strong>Call to Action:</strong> {formData.callToAction}
      </p>
      <p>
        <strong>Closing:</strong> {formData.closing}
      </p>
      <p>
        <strong>Signature:</strong> {formData.signature}
      </p>

      {/* Additional Details */}
      <h3>Additional Details</h3>
      <p>
        <strong>Availability:</strong> {formData.availability}
      </p>
      <p>
        <strong>Confidentiality:</strong> {formData.confidentiality}
      </p>
      <p>
        <strong>Gaps in Employment:</strong> {formData.gaps}
      </p>
      <p>
        <strong>Relocation:</strong> {formData.relocation}
      </p>
      <p>
        <strong>Salary Requirements:</strong> {formData.salaryRequirements}
      </p>
    </div>
  );
};

export default CoverLetter1;
