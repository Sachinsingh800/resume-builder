import axios from 'axios';




const BASE_URL = 'https://lizmyresume.onrender.com';













export const getAllCategoy = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/admin/getAllCategoy`, {
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
    const response = await axios.get(`${BASE_URL}/adminDummy/getFilteredDummyResume?category=${selectedCategory}`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};


// getAllTimeslot




//updateProduct

// export const updateProduct = async (id, updatedData) => {
//   try {
//     const response = await axios.put(`${BASE_URL}/admin/update/product/${id}`, updatedData);
//     const { status, message, data } = response.data;
//     return { status, message, data };
//   } catch (error) {
//     console.error('Error updating blog:', error.message);
//     throw new Error('Failed to update blog');
//   }
// };

//DeleteProduct






export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/deleteCategoy/${id}`);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw new Error('Failed to delete product');
  }
};


export const deleteSummary = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/deleteSummary/${id}`);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw new Error('Failed to delete product');
  }
};



export const deleteSkills = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/deleteSkill/${id}`);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw new Error('Failed to delete product');
  }
};



export const deleteAreaOfInterest = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/areaOfInterest/${id}`);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw new Error('Failed to delete product');
  }
};




export const deleteLanguages = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/deleteLanguages/${id}`);
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error deleting product:', error.message);
    throw new Error('Failed to delete product');
  }
};



export const getAllSummary = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/admin/getSummary`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};




export const getAllSkills = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/admin/getSkills`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};



export const getAllAreaofInterest = async () => {
  
  try {
    const response = await axios.get(`${BASE_URL}/admin/areaOfInterest`, {
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
    const response = await axios.get(`${BASE_URL}/admin/getLanguages`, {
    });
    const { status, message, data } = response.data;
    return { status, message, data };
  } catch (error) {
    console.error('Error getting services:', error.message);
    throw new Error('Failed to get services');
  }
};


//addResume
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEwNWMxNmFjNzc0ZDkwZTA5MTIzZmIiLCJyb2xlIjoiam9iLXNlZWtlciIsImlhdCI6MTY5NTU3MTAzN30.or65-WGU5htf2knlYp0DRGZD4D8rxFWpGBblKvAWDOA';

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





