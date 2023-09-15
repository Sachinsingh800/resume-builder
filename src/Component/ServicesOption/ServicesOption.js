import React, { useState } from "react";
import style from "./ServicesOption.module.css";
// import { Servicesaccordian } from "../../Component/Accordion/Accordion";
import { Link } from "react-router-dom";


function ServicesOption() {
  const [hoveredOption, setHoveredOption] = useState("Option 1");

  const handleOptionHover = (option) => {
    setHoveredOption(option);
  };

  return (
    <div className={style.main}>
      <div className={style.navBar}>
        <ul className={style.optionList}>
          <li
            className={hoveredOption === "Option 1" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 1")}
          >
            Mobile App Development
            {hoveredOption === "Option 1" && (
              <div className={style.optionContent}>
                 <ul  className={style.options}>
                <Link to={"/Native-Mobile-App-Development"}> <li>Native Mobile App Development</li></Link> 
                <Link to={"/Cross-Platform-App-Development"}> <li>Cross-Platform App Development</li></Link> 
               <Link to={"/Android-Application-Development-Services"}><li>Android Application Development Services</li></Link>   
               <Link to={"/IOS-Application-Development-Services"}>     <li>IOS Application Development Services</li></Link>          
               <Link to={"/Hybrid-Application-Development-Services"}>    <li>Hybrid Application Development Services</li></Link>           
               <Link to={"/Mobile-App-Development"}>   <li>Mobile App Development</li></Link>          
               <Link to={"/App-Backend-Development"}><li>App Backend Development</li></Link>     
                 </ul>
                 <ul  className={style.options}>
                 <Link to={"/Flutter-App-Development"}>  <li>Flutter App Development</li></Link>        
                 <Link to={"/React-Native-App-Development"}>   <li>React Native App Development</li></Link>    
                 <Link to={"/Mobile-App-Testingand-Testing-Quality-Assurance"}>  <li>Mobile App Testing and Testing Quality Assurance</li></Link>     
                 </ul>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 2" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 2")}
          >
           Digital Marketing
            {hoveredOption === "Option 2" && (
              <div className={style.optionContent1}>
                  <ul  className={style.options}>
                  <Link to={"/Search-Engine-Optimization"}><li>Search Engine Optimization (SEO)</li></Link>  
                  <Link to={"/Pay-Per-Click-Advertising"}> <li>Pay-Per-Click (PPC) Advertising</li></Link>    
                  <Link to={"/Social-Media-Advertising"}> <li>Social Media Advertising</li></Link>      
                  <Link to={"/Google-Advertising"}><li>Google Advertising</li></Link>        
                  <Link to={"/Facebook-&-Instagram-Advertising"}> <li>Facebook & Instagram Advertising</li></Link> 
                  <Link to={"/Content-Marketing"}><li>Content Marketing</li></Link>        
                  <Link to={"/Social-Media-Marketing"}> <li>Social Media Marketing</li></Link> 
                 </ul>
                  <ul  className={style.options}>
                  <Link to={"/Email-Marketing"}>  <li>Email Marketing</li></Link>      
                  <Link to={"/Analytics-and-Reporting"}>  <li>Analytics and Reporting</li></Link>        
                  <Link to={"/Website-Traffic-Advertising"}> <li>Website Traffic Advertising</li></Link>        
                  <Link to={"/E-Commerce-Advertising"}>  <li>E-Commerce Advertising</li></Link>        
                  <Link to={"/App-Install-Advertising"}>  <li>App Install Advertising</li></Link>      
                  <Link to={"/Android-App-Advertising"}> <li>Android App Advertising</li></Link>        
                  <Link to={"/IOS-App-Advertising"}>  <li>IOS App Advertising</li></Link>        
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 3" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 3")}
          >
        Website Development
            {hoveredOption === "Option 3" && (
              <div className={style.optionContent2}>
                <ul  className={style.options}>
                <Link to={"/E-Commerce-Development"}> <li>E-Commerce Development</li></Link>   
                <Link to={"/FrontEnd-Development"}>    <li>Front-End Development</li></Link>    
                <Link to={"/Backend-Development"}>  <li>Backend Development</li></Link>       
                <Link to={"/FullStack-Development-Services"}> <li>Full Stack Development Services</li></Link>        
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 4" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 4")}
          >
     WordPress Development
            {hoveredOption === "Option 4" && (
              <div className={style.optionContent3}>
                 <ul  className={style.options}>
                 <Link to={"/Blog-or-Personal-Website"}><li>Blog or Personal Website</li></Link>     
                 <Link to={"/Business-Website"}><li>Business Website</li></Link>    
                 <Link to={"/E-commerce-Website-Online-Store"}><li>Ecommerce Website / Online Store</li></Link>         
                 <Link to={"/Online-Courses"}><li>Online Courses</li></Link>     
                 <Link to={"/Podcast-Website"}><li>Podcast Website</li></Link>       
                 <Link to={"/Affiliate-Website"}><li>Affiliate Website</li></Link>      
                 <Link to={"/JobBoard-Website"}><li>Job Board Website</li></Link>   
                 </ul>
                 <ul  className={style.options}>
                 <Link to={"/Portfolio-Websites"}> <li>Portfolio Websites</li></Link>     
                 <Link to={"/Travel-Website"}> <li>Travel Website</li></Link>      
                 <Link to={"/Fashion-Life-style-Website"}><li>Fashion / Lifestyle Website</li></Link>        
               
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 5" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 5")}
          >
      UI/UX Design
            {hoveredOption === "Option 5" && (
              <div className={style.optionContent4}>
                <ul  className={style.options}>
                <Link to={"/Mobile-App-UIUX-Design-Services"}><li>Mobile App UI /UX Design Services</li></Link>          
                <Link to={"/Android-App-UIUX-Design-Services"}>   <li>Android App UI/UX Design Services</li></Link>     
                <Link to={"/UIUX-Design-Services"}> <li>UI/UX Design Services</li></Link>       
                <Link to={"/ISO-UIUX-Design-Services"}> <li>ISO UI/UX Design Servicesg</li></Link>       
                <Link to={"/Website-UIUX-Design-Services"}>  <li>Website UI/UX Design Services</li></Link>     
                 </ul>
              </div>
            )}
          </li>

          <li
            className={hoveredOption === "Option 6" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 6")}
          >
Front End Development
            {hoveredOption === "Option 6" && (
              <div className={style.optionContent5}>
                <ul  className={style.options}>
                <Link to={"/ReactJs-Development"}><li>React Js Development</li></Link>      
                <Link to={"/Nextjs-Development"}> <li>Next js Development</li></Link>        
                <Link to={"/Vuejs-Development"}>     <li>Vue js Development</li></Link>     
                <Link to={"/Angular-Dvelopment"}>   <li>Angular Dvelopment</li></Link>      
                <Link to={"/ReactNative-Development"}><li>React Native Development</li></Link>       
                 </ul>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 7" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 7")}
          >
      Backend Development
            {hoveredOption === "Option 7" && (
              <div className={style.optionContent6}>
             <ul  className={style.options}>
             <Link to={"/Nodejs"}> <li>Node js</li></Link>       
             <Link to={"/Laravel"}>  <li>Laravel</li></Link>      
             <Link to={"/Python"}><li>Python</li></Link>        
             <Link to={"/API-Development"}><li>API Development</li></Link>        
             <Link to={"/Database-Designand-Management"}> <li>Database Design and Management</li></Link>        
             <Link to={"/Server-Architecture-and-Configuration"}>   <li>Server Architecture and Configuration</li></Link>       
             <Link to={"/Cloud-Services-Integration-SAP-Industry-Solutions"}><li>Cloud Services Integration,SAP Industry Solutions</li></Link>        
                 </ul>
             <ul  className={style.options}>
             <Link to={"/Backend-Framework-Development"}> <li>Backend Framework Development</li></Link>       
             <Link to={"/Web-Application-Development"}><li>Web Application Development</li></Link>      
             <Link to={"/Mobile-Backend-Development"}><li>Mobile Backend Development</li></Link>   
             <Link to={"/Real-TimeData-Processing"}><li>Real-Time Data Processing</li></Link>  
             <Link to={"/Performance-Optimization"}><li>Performance Optimization</li></Link>   
             <Link to={"/Integration-with-Third-Party-Services"}> <li>Integration with Third-Party Services</li></Link>      
             <Link to={"/DevOps-and-Continuous-Integration"}>   <li>DevOps and Continuous Integration/Continuous Deployment (CI/CD)</li></Link>    
                 </ul>
              </div>
            )}
          </li>
          <li
            className={hoveredOption === "Option 8" ? style.active : ""}
            onMouseOver={() => handleOptionHover("Option 8")}
          >
  Cloud
            {hoveredOption === "Option 8" && (
              <div className={style.optionContent7}>
                <ul  className={style.options}>
                <Link to={"/Azure"}>  <li>Azure</li></Link>       
                <Link to={"/Aws"}> <li>Aws</li></Link>        
                <Link to={"/Google-Cloud"}>   <li>Google Cloud</li></Link>      
                 </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesOption;
