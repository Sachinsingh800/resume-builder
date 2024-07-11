import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { Box, Typography, Grid, Link } from "@mui/material";
import NavBar from "../../Component/NavBar/NavBar";
import { getlastResume } from "../../Api/Api";
import dp from "../../Component/Images/dp.png"

function Profile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    handleLastResume();
  }, []);


  const handleLastResume = async () => {
    setLoading(true);
    try {
      const response = await getlastResume();
      if (response) {
        setData(response.data);
        setLoading(false);
      } else {
        console.error("Error fetching user profile:", response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
      setLoading(false);
    }
  };

  const handleNavigateToUdapte=(e)=>{
    e.preventDefault()
    localStorage.setItem("resume", JSON.stringify(data));
    sessionStorage.setItem("update", true);
    localStorage.setItem("templateid", JSON.stringify(data?.tempId
    ));
    window.location.href = "/CreateResume";
  }

  return (
    <div className={styles.profileContainer}>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      {loading && <p>Loading...</p>}
      {data ? (
        <>
          <div className={styles.profileHeader}>
            <Typography variant="h4" component="h2">
              Personal Information
            </Typography>
            <button onClick={(e)=>handleNavigateToUdapte(e)}>Edit</button>
          </div>
          <div className={styles.user_dp}>
            <img src={data.profilePicture.url ? data.profilePicture.url : dp} alt="user dp" />
          </div>
          <div className={styles.profile_box}></div>
          <Grid container spacing={3} className={styles.profileFields}>
            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Name</Typography>
              <Typography>
                <strong>Name:</strong> {data?.name}
              </Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Contact Information</Typography>
              <Typography>
                <strong>Email:</strong> {data?.contact?.email}
              </Typography>
              <Typography>
                <strong>Phone:</strong> {data?.contact?.phone}
              </Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Address</Typography>
              <Typography>
                {data?.address?.address}, {data?.address?.city},{" "}
                {data?.address?.state}, {data?.address?.postalCode},{" "}
                {data?.address?.country}
              </Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Social Links</Typography>
              <Typography>
                <strong>LinkedIn:</strong>

                <Link
                  href={data?.socialLinks?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.socialLinks?.linkedin}
                </Link>
              </Typography>
              <Typography>
                <strong>GitHub:</strong>

                <Link
                  href={data?.socialLinks?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.socialLinks?.github}
                </Link>
              </Typography>
              <Typography>
                <strong>Portfolio:</strong>

                <Link
                  href={data?.socialLinks?.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data?.socialLinks?.portfolio}
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Job Title</Typography>
              <Typography>{data?.jobTitle}</Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Summary</Typography>
              <Typography>{data?.summary}</Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Date of Birth</Typography>
              <Typography>{data?.dob}</Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Gender</Typography>
              <Typography>{data?.gender}</Typography>
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Education</Typography>
              {data?.education?.map((edu) => (
                <Box key={edu?._id}>
                  <Typography>
                    <strong>Degree:</strong> {edu?.degree}
                  </Typography>
                  <Typography>
                    <strong>College:</strong> {edu?.collegeName}
                  </Typography>
                  <Typography>
                    <strong>Stream: </strong>
                    {edu?.stream}
                  </Typography>
                  <Typography>
                    <strong>Years:</strong> {edu?.startYear} - {edu?.endYear}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Work Experience</Typography>
              {data?.work?.map((work) => (
                <Box key={work._id}>
                  <Typography>
                    <strong>Title:</strong> {work?.title}
                  </Typography>
                  <Typography>
                    <strong>Company:</strong> {work?.company}
                  </Typography>
                  <Typography>
                    <strong>Location:</strong> {work?.location}
                  </Typography>
                  <Typography>
                    <strong>Dates:</strong> {work?.startDate} - {work?.endDate}
                  </Typography>
                  <Typography>
                    <strong>Description:</strong> {work?.description}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Skills</Typography>
              {data?.skillsAndLevel?.map((skill) => (
                <Box key={skill?._id}>
                  <Typography>
                    {skill?.skills} ({skill?.level})
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Internships</Typography>
              {data?.internShips?.map((intern) => (
                <Box key={intern?._id}>
                  <Typography>
                    <strong>Title: </strong>
                    {intern?.title}
                  </Typography>
                  <Typography>
                    <strong>Company:</strong> {intern?.company}
                  </Typography>
                  <Typography>
                    <strong>Location:</strong> {intern?.location}
                  </Typography>
                  <Typography>
                    <strong>Dates:</strong> {intern?.startDate} -{" "}
                    {intern?.endDate}
                  </Typography>
                  <Typography>
                    <strong>Description:</strong> {intern?.description}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Projects</Typography>
              {data?.projects?.map((project) => (
                <Box key={project._id}>
                  <Typography>
                    <strong>Title:</strong>
                    {project?.title}
                  </Typography>
                  <Typography>
                    <strong>Description:</strong> {project?.description}
                  </Typography>
                  <Typography>
                    <strong>Year:</strong> {project?.year}
                  </Typography>
                  <Typography>
                    <strong>Link:</strong>
                    <Link
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project?.link}
                    </Link>
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Languages</Typography>
              {data?.knownLanguages?.map((lang) => (
                <Box key={lang?._id}>
                  <Typography>{lang?.lang}</Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Certifications</Typography>
              {data?.certifications?.map((cert) => (
                <Box key={cert?._id}>
                  <Typography>
                    <strong>Title:</strong>
                    {cert?.title}
                  </Typography>
                  <Typography>
                    <strong>Organization:</strong> {cert?.issuingOrganization}
                  </Typography>
                  <Typography>
                    <strong>Date:</strong> {cert?.date}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Awards</Typography>
              {data?.awards?.map((award) => (
                <Box key={award._id}>
                  <Typography>
                    <strong>Title:</strong> {award?.title}
                  </Typography>
                  <Typography>
                    <strong>Organization:</strong> {award?.issuingOrganization}
                  </Typography>
                  <Typography>
                    <strong>Date:</strong> {award?.date}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Volunteer Experience</Typography>
              {data?.volunteerExperience?.map((volunteer) => (
                <Box key={volunteer?._id}>
                  <Typography>
                    <strong>Title:</strong> {volunteer?.title}
                  </Typography>
                  <Typography>
                    <strong>Company:</strong> {volunteer?.company}
                  </Typography>
                  <Typography>
                    <strong>Location:</strong> {volunteer?.location}
                  </Typography>
                  <Typography>
                    <strong>Dates: </strong>
                    {volunteer?.startDate} - {volunteer?.endDate}
                  </Typography>
                  <Typography>
                    <strong>Description:</strong> {volunteer?.description}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">Areas of Interest</Typography>
              {data?.areaOfInterest?.map((interest) => (
                <Box key={interest?._id}>
                  <Typography>{interest?.interest}</Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} className={styles.section}>
              <Typography variant="h6">References</Typography>
              {data?.references?.map((reference) => (
                <Box key={reference?._id}>
                  <Typography>
                    <strong>Name:</strong> {reference?.name}
                  </Typography>
                  <Typography>
                    <strong>Company:</strong> {reference?.company}
                  </Typography>
                  <Typography>
                    <strong>Position:</strong> {reference?.position}
                  </Typography>
                  <Typography>
                    <strong>Email:</strong> {reference?.email}
                  </Typography>
                  <Typography>
                    <strong>Phone:</strong> {reference?.phone}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </>
      ) : (
        "no data found"
      )}
    </div>
  );
}

export default Profile;
