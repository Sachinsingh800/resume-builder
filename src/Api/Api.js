import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie

//testing

const BASE_URL = "https://lizmyresumebuilder.onrender.com";

const authToken = Cookies.get("user_token");

export const getArticle = async (selectedSubid) => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/admin/resumeexampleartical/getResumeExampleArtical/${selectedSubid}`,
      {}
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const registration = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/register`,
      formData
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error creating resume:", error.message);
  }
};

export const otpverification = async (OTP) => {
  const Rmsubmit = localStorage.getItem("submit");
  const Cvsubmit = localStorage.getItem("coverletter");
  try {
    const response = await axios.post(`${BASE_URL}/user/auth/verify`, OTP);
    const { status, message, token } = response.data;
    if (status) {
      Cookies.set("user_token", token, { expires: 7 }); // Store token in cookies for 7 days
      alert("login successful");
      if (Rmsubmit === "true") {
        const data = JSON.parse(localStorage.getItem("pendingData"));
        localStorage.setItem("resume", JSON.stringify(data));
        window.location.href = "/CreateResume";
      } else if (Cvsubmit === "true") {
        window.location.href = "/CoverLetterForm";
      } else {
        window.location.href = "";
      }
    }
  } catch (error) {
    console.error("Error creating resume:", error.message);
  }
};

export const sendOtp = async (resendOtp) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/resendOtp`,
      resendOtp
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error creating resume:", error.message);
  }
};
export const forgetPassword = async (emailData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/forgetPass`,
      emailData
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error creating resume:", error.message);
  }
};
export const resetPassword = async (formdata) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/auth/resetPassword`,
      formdata
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error creating resume:", error.message);
  }
};

export const getUserProfile = async () => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(`${BASE_URL}/user/auth/profile`, {
      headers,
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getlastResume = async () => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/user/resume/getLatestResume`,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllUserResumes = async () => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(`${BASE_URL}/user/resume/getAllResume`, {
      headers,
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getUserCoverLetter = async () => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/user/coverletter/getYourCoverLetter`,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllArticleCategoy = async () => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/user/public/getAllResumeCateEx`,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllSubArticleCategoy = async (selectedid) => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/user/public/getAllResumeSubCateEx/${selectedid}`,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllCategoy = async () => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(`${BASE_URL}/user/public/getAllCategoy`, {
      headers,
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllBlog = async () => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(`${BASE_URL}/admin/blog/getAllBlog`, {
      headers,
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getResume = async (selectedCategory) => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/user/public/getFilteredDummyResume?category=${selectedCategory}`,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

// getAllTimeslot

// updateProfile

export const updateProfile = async (updatedData) => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.put(
      `${BASE_URL}/user/auth/updateProfile`,
      updatedData,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};
// updateProfile

export const updateResume = async (formData) => {
  const resumeId = JSON.parse(localStorage.getItem("resume"));
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.put(
      `${BASE_URL}/user/resume/updateResumeUser/${resumeId._id}`,
      formData,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};

//DeleteProduct

export const getAllSummary = async (selectedCategory) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/public/getSummary?category=${selectedCategory}`,
      {}
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllSkills = async (selectedCategory) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/public/getSkills?category=${selectedCategory}`,
      {}
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllAreaofInterest = async (selectedCategory) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/public/areaOfInterest?category=${selectedCategory}`,
      {}
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

export const getAllLanguages = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/user/public/getLanguages`,
      {}
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error getting services:", error.message);
  }
};

//addResume

export const createResume = async (Data) => {
  try {
    const response = await axios.post(
      `https://htmltopdf-yf6w.onrender.com/convert`,
      Data
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error creating resume:", error.message);
  }
};

export const addResume = async (formData) => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "multipart/form-data", // Set the content type for file uploads
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/user/resume/createResume`,
      formData,
      { headers }
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error creating resume:", error.message);
  }
};

//addCoverLetter

export const addCoverLetter = async (formData) => {
  const headers = {
    "x-auth-token": authToken,
    "Content-Type": "application/json", // Set the content type for JSON data
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/user/coverletter/createCoverLetter`,
      formData,
      { headers }
    );

    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error creating cover letter:", error.message);
    // Handle the error as needed
  }
};

//addCategory

export const addCategory = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admin/createDummyCategoy`,
      formData
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};

export const addSummary = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admin/createSummary`,
      formData
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};
export const addSkills = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admin/createSkills`,
      formData
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};

export const addAreaOfInterest = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admin/areaOfInterest`,
      formData
    );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};

export const addLanguages = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/languages`, formData);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("Failed to update blog");
  }
};
