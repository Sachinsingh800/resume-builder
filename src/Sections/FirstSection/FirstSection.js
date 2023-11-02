import React, { useState, useEffect } from 'react';
import style from './FirstSection.module.css';
import Carsouel from '../../Component/Carsouel/Carsouel';
import { useNavigate } from 'react-router-dom';
import { getAllCategoy, getResume } from '../../Api/Api';
import { useRecoilState } from 'recoil';
import { resumeData ,resumeDataApi, selectedJobCate  } from '../../Recoil';

function FirstSection() {
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [allCategory, setAllCategory] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');



  useEffect(() => {
    handleAllCategory();
    handleDemoData()
  }, []);

  const handleAllCategory = async () => {
    try {
      const response = await getAllCategoy();

      if (response.status === true) {
        setAllCategory(response.data);
      } else {
        console.error('Error fetching categories:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
localStorage.setItem("category",JSON.stringify(selectedCategory))
    try {
      const response = await getResume(selectedCategory);

      if (response.status === true) {
        localStorage.setItem('resume', JSON.stringify(response.data[0]));
        navigate('/ResumeForm');
      } else {
        console.error('Error fetching resume:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching resume:', error.message);
    }
  };
  const handleDemoData = async (e) => {

localStorage.setItem("category",JSON.stringify(selectedCategory))
    try {
      const response = await getResume(selectedCategory);

      if (response.status === true) {
        localStorage.setItem('resume', JSON.stringify(response.data[0]));
      } else {
        console.error('Error fetching resume:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching resume:', error.message);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h2>Resume Template For Every Kind Of Job Seeker</h2>
        <p>
          Find the best resume designs for your industry, job title, or experience level. Choose by style, color, or format. No matter your experience, there's a resume template for you.
        </p>
        <br />
        <input
          onChange={(e) => setSearch(e.target.value)}
          className={style.search_input}
          placeholder="🔍 Search here..."
          value={search}
        />

        {search.length > 0 && (
          <div className={style.optionList}>
            {allCategory
              .filter((item) => item.category.toLowerCase().includes(search.toLowerCase()))
              .map((item) => (
                <div
                  className={style.list}
                  key={item._id}
                  onClick={() => {
                    setSearch(item.category); // Update the search state
                    setSelectedCategory(item.category);
                  
                  }}
                >
                  {item.category}
                </div>
              ))}
          </div>
        )}
      </div>

      <button className={style.btn} onClick={handleSubmit}>
        Choose Templates
      </button>

      <div className={style.Carsouel}>
        <Carsouel />
      </div>
    </div>
  );
}

export default FirstSection;
