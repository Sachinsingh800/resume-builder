import axios from 'axios';




const BASE_URL = 'https://lizmyresume.onrender.com';

const authToken = JSON.parse(localStorage.getItem("token"))


export const registration = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/auth/register`, formData );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error creating resume:', error.message);

  }
};


export const signInuser = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/auth/logIn`, formData );
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error creating resume:', error.message);

  }
};








export const getUserProfile = async () => {
  const headers = {
    'x-auth-token': authToken,
    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
  };
  try {
    const response = await axios.get(`${BASE_URL}/user/auth/profile`, {headers});
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};

export const getlastResume = async () => {
  const headers = {
    'x-auth-token': authToken,
    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
  };
  try {
    const response = await axios.get(`${BASE_URL}/user/getLatestResume`, {headers});
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};


export const getAllArticleCategoy = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/user/public/getAllResumeCateEx`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};
export const getAllSubArticleCategoy = async (selectedid) => {
  
  try {
    const response = await axios.get(`${BASE_URL}/user/public/getAllResumeSubCateEx/${selectedid}`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};

export const getAllCategoy = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/user/public/getAllCategoy`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};
export const getAllBlog = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/admin/getAllBlog`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};






export const getResume = async (selectedCategory) => {
  
  try {
    const response = await axios.get(`${BASE_URL}/user/public//getFilteredDummyResume?category=${selectedCategory}`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};


// getAllTimeslot




// updateProfile

export const updateProfile = async (updatedData) => {
  const headers = {
    'x-auth-token': authToken,
    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
  };
  try {
    const response = await axios.put(`${BASE_URL}/user/updateProfile`, updatedData,{headers});
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw new Error('Failed to update blog');
  }
};
// updateProfile

export const updateResume = async (id,formData) => {
  const headers = {
    'x-auth-token': authToken,
    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
  };
  try {
    const response = await axios.put(`${BASE_URL}/user/updateResumeUser/${id}`, formData,{headers});
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw new Error('Failed to update blog');
  }
};

//DeleteProduct



















export const getAllSummary = async (selectedCategory) => {

  try {
    const response = await axios.get(`${BASE_URL}/user/public/getSummary?category=${selectedCategory}`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};




export const getAllSkills = async (selectedCategory) => {
  
  try {
    const response = await axios.get(`${BASE_URL}/user/public/getSkills?category=${selectedCategory}`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};



export const getAllAreaofInterest = async (selectedCategory) => {
  
  try {
    const response = await axios.get(`${BASE_URL}/user/public/areaOfInterest?category=${selectedCategory}`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};


export const getAllLanguages = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/user/public/getLanguages`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};


//addResume


export const addResume = async (formData) => {
  const headers = {
    'x-auth-token': authToken,
    'Content-Type': 'multipart/form-data', // Set the content type for file uploads
  };
  try {
    const response = await axios.post(`${BASE_URL}/user/createResume`, formData, { headers });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error creating resume:', error.message);

  }
};


//addCategory

export const addCategory= async ( formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/createDummyCategoy`, formData);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw new Error('Failed to update blog');
  }
};


export const addSummary= async ( formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/createSummary`, formData);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw new Error('Failed to update blog');
  }
};
export const addSkills= async ( formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/createSkills`, formData);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw new Error('Failed to update blog');
  }
};

export const addAreaOfInterest= async ( formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/areaOfInterest`, formData);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw new Error('Failed to update blog');
  }
};

export const addLanguages= async ( formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/languages`, formData);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw new Error('Failed to update blog');
  }
};





