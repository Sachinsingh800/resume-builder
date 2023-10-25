import React, { useState, useEffect } from 'react';
import style from './FirstSection.module.css';
import Carsouel from '../../Component/Carsouel/Carsouel';
import { useNavigate } from 'react-router-dom';
import {  getAllCategoy, getResume} from '../../Api/Api'; // I corrected the function name and import
import { useRecoilState } from 'recoil';
import { resumeData } from '../../Recoil';

function FirstSection() {
  const [formData, setFormData] = useRecoilState(resumeData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate= useNavigate()

  

  useEffect(() => {
    handleAllCategory();
  }, []);

  const handleAllCategory = async () => {
    try {
      const response = await getAllCategoy(); // Corrected function name

      if (response.status === true) {
        setAllCategory(response.data);
        setIsLoading(false); // Set loading to false after fetching
      } else {
        console.error('Error fetching categories:', response.data.message);
        setIsLoading(false); // Handle loading state even in case of an error
      }
    } catch (error) {
      console.error('Error fetching categories:', error.message);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getResume(selectedCategory);

      if (response.status === true) {
        localStorage.setItem("resume",JSON.stringify(response.data[0]))
        navigate("/ResumeForm")
      } else {
        console.error('Error fetching resume:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching resume:', error.message);
    }
  }

  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h2>Resume Template For Every Kind Of Job Seeker</h2>
        <p>Find the best resume designs for your industry, job title, or experience level. Choose by style, color, or format. No matter your experience, there's a resume template for you.</p>
        <br />
        <input className={style.search_input} placeholder="🔍 Search here..." />
        <div>
          <label htmlFor="category">Choose Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            className={style.select}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {allCategory.map((item) => (
              <option key={item._id} value={item.category}> {item.category}</option>
            ))}
          </select>
        </div>
      </div>

     
        <button className={style.btn} onClick={handleSubmit}>Choose Templates</button>


      <div className={style.Carsouel}>
        <Carsouel />
      </div>
    </div>
  );
}

export default FirstSection;
