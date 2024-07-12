import React, { useEffect, useState } from "react";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import "./BlogLayout.css";
import { useParams } from "react-router-dom";
import { getAllBlog } from "../../Api/Api";
import NavBar from "../../Component/NavBar/NavBar";
import Footer from "../../Component/Footer/Footer";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import FirstSection from "../../Sections/FirstSection/FirstSection";
import { Divider } from "@mui/material";
import { format, parse } from 'date-fns';

const BlogLayout = () => {
  const { title } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    handleAllBlog();
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleAllBlog = async () => {
    try {
      const response = await getAllBlog();
      if (response.status === true) {
        setBlogs(response.data);
      } else {
        console.error("Error fetching blogs:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

  const formatTitleForUrl = (title) => {
    return title?.replace(/\s+/g, "-").replace(/:/g, "");
  };

  const formatDate = (dateString) => {
    const parsedDate = parse(dateString, 'M/d/yyyy h:mm a', new Date());
    return format(parsedDate, 'd MMMM yyyy - h:mm a');
  };
  

  const filteredBlog = blogs.find(
    (item) => formatTitleForUrl(item?.blogData?.blogTitle) === title
  );
  const sortedSections = filteredBlog
    ? Object.keys(filteredBlog.blogData)
        .filter((section) => section.startsWith("Section"))
        .sort((a, b) => {
          const numA = parseInt(a.replace("Section", ""), 10);
          const numB = parseInt(b.replace("Section", ""), 10);
          return numA - numB;
        })
    : [];

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="header_container">
      <div className="header">
            <h1>{filteredBlog?.blogData?.blogTitle}</h1>
            <span>{filteredBlog?.publishDate}</span>
          </div>
          <div className="image_box">
            <img
              src={filteredBlog?.blogData?.blogImg?.url}
              alt={filteredBlog?.blogData?.blogTitle}
              title={filteredBlog?.blogData?.blogTitle}
              height="auto"
              width="auto"
              loading="lazy"
            />
      </div>
      </div>

      <div className="container">
        <div className="left">
          <p>Content</p>
          <nav>
            <ul>
              {filteredBlog &&
                sortedSections.map(
                  (section, index) =>
                    filteredBlog.blogData[section].title && (
                      <li key={index}>
                        <Link
                          to={section}
                          spy={true}
                          smooth={true}
                          duration={500}
                          containerId="middle-content"
                          activeClass="active"
                        >
                          {filteredBlog.blogData[section].title}
                        </Link>
                      </li>
                    )
                )}
            </ul>
          </nav>
        </div>
        <div className="middle" id="middle-content">
          <div className="content">
            {filteredBlog &&
              sortedSections.map((section, index) => (
                <>
                  {index === 3 && <FirstSection />}
                  <Element name={section} key={section}>
                    <h2>{filteredBlog.blogData[section].title}</h2>
                    {filteredBlog.blogData[section].url && (
                      <img
                        src={filteredBlog.blogData[section].url}
                        alt={filteredBlog.blogData[section].title}
                      />
                    )}
                    {filteredBlog.blogData[section].description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: filteredBlog.blogData[section].description,
                        }}
                      ></div>
                    )}
                  </Element>
                  {index === 35 && <FirstSection />}
                </>
              ))}
          </div>
        </div>
        <div className="right">
          <div className="share">
            <p>Share this article</p>
            <br />
            <ul>
              <li>
                <a href="#!">
                  <AiOutlineTwitter />
                </a>
                <span>129</span>
              </li>
              <li>
                <a href="#!">
                  <AiFillLinkedin />
                </a>
                <span>32</span>
              </li>
              <li>
                <a href="#!">
                  <BsFacebook />
                </a>
                <span>12</span>
              </li>
              <li>
                <a href="#!">
                  <AiFillInstagram />
                </a>
                <span>123</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom_box">
        <h2>Did you enjoy this article? Then the below might interest you.</h2>
        <Divider />
        <div className="blogContainer">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blogCard"
              onClick={() =>
                (window.location.href = `/blog-layout/${formatTitleForUrl(
                  blog?.blogData?.Section1?.title
                )}`)
              }
            >
              <div className="blogImage">
                <img src={blog.blogData.Section2.url} alt="blog visual" />
              </div>

              <div className="blogDetails">
                <h3>{blog.blogData.Section1.title}</h3>
                <p>{blog.publishDate}</p>
                <p>Sample Read Time</p>
                <p
                  className="des"
                  dangerouslySetInnerHTML={{
                    __html: blog.blogData.Section1.description,
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogLayout;
