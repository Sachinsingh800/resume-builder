import React, { useState, useEffect } from "react";
import style from "./Blog.module.css";
import NavBar from "../../Component/NavBar/NavBar";
import Footer from "../../Component/Footer/Footer";
import { getAllBlog } from "../../Api/Api";


function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    handleAllBlog();
  }, []);

  const handleAllBlog = async () => {
    try {
      const response = await getAllBlog();
      if (response.status === true) {
        setBlogs(response?.data);
      } else {
        console.error("Error fetching blogs:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, '-').replace(/:/g, '');
  };

  return (
    <div className={style.main}>
      <NavBar />
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Blogs</h1>
      <br/>
      <div className={style.blogContainer}>
        {blogs.map((blog, index) => (
          <div key={index} className={style.blogCard} onClick={()=>window.location.href=`/blog/${formatTitleForUrl(blog?.blogData?.blogTitle)}`}>
            <div  className={style.blogImage}>
            <img src={blog?.blogData?.blogImg?.url} alt="blog visual" />
            </div>
            <div className={style.blogDetails}>
              <h3>{blog?.blogData?.blogTitle}</h3>
              <p>{blog?.publishDate}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
