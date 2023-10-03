import React from 'react';
import style from "./Template_3.module.css"
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import dp from "../../Images/dp.png";
import ProgressBar from '../../ProgressBar/ProgressBar';

const Template_3= () => {
  return (
    <div className={style.main}>
      <div className={style.Left_container} style={{ backgroundColor: 'black',color:"white" }}>
  
     <div className={style.img_container}>
            <div className={style.img_box}>
              <img src={dp} alt="img" />
            </div>
          </div>
          <br/>
 
  <div className={style.info_box}>
          <h3>CONTACT</h3>
          <br/>
          <hr className={style.hr} />
  <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p  style={{ color: 'black' }}>
               <AiOutlineMail/>
              </p>
            </div>
            <p className={style.email}>
              randfe@gmail.com
            </p>
          </div>
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p  style={{ color: 'black' }}>
         <AiOutlinePhone/>
              </p>
            </div>
            <p className={style.email}>
              +91 2842 59630
            </p>
          </div>
          
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p  style={{ color: 'black' }}>
               <CiLocationOn/>
              </p>
            </div>
            <p className={style.email}>
              New Delhi, India 110034
            </p>
          </div>

  </div>

      
      
   
        
        <div className={style.skillsHeader}>
          <h3 >PROFESSIONAL SKILLS</h3>
          <br/>
          <hr className={style.hr} />
           <ul>
         <li><span>React js </span>  <ProgressBar bgcolor="aqua" progress="10" height={5} /></li>      
         <li><span>Express </span>  <ProgressBar bgcolor="aqua" progress="20" height={5} /></li>      
         <li><span>Node js </span>  <ProgressBar bgcolor="aqua" progress="70" height={5} /></li>      
         <li><span>Python </span>  <ProgressBar bgcolor="aqua" progress="90" height={5} /></li>      
         <li><span>Flutter </span>  <ProgressBar bgcolor="aqua" progress="40" height={5} /></li>      
       
           </ul>

        </div>
        <div className={style.skillsHeader}>
          <h3 >PERSONAL SKILLS</h3>
          <br/>
          <hr className={style.hr} />
           <ul>
         <li><span>React js </span>  <ProgressBar bgcolor="aqua" progress="10" height={5} /></li>      
         <li><span>Express </span>  <ProgressBar bgcolor="aqua" progress="20" height={5} /></li>      
         <li><span>Node js </span>  <ProgressBar bgcolor="aqua" progress="70" height={5} /></li>      
         <li><span>Python </span>  <ProgressBar bgcolor="aqua" progress="90" height={5} /></li>      
         <li><span>Flutter </span>  <ProgressBar bgcolor="aqua" progress="40" height={5} /></li>      
       
           </ul>

        </div>
        <div className={style.skillsHeader}>
          <h3 >LAGNUAGES</h3>
          <br/>
          <hr className={style.hr} />
           <ul>
         <li><span>ENGLISH </span>  <ProgressBar bgcolor="aqua" progress="10" height={5} /></li>      
         <li><span>HINDI </span>  <ProgressBar bgcolor="aqua" progress="20" height={5} /></li>      
 
       
           </ul>

        </div>


  
      </div>
      <div>
        <div className={style.objectiveHeader} >

            <h2 >CAREER OBJECTIVE</h2>
            <p className={style.objectiveText}>
              Motivated server with an engaging personality and flexible approach. Upbeat, friendly and anticipating customer needs to facilitate enjoyable dining experiences. Looking to obtain employment to enhance my customer service relations and skills as a sales associate with the potential for career growth
            </p>
         
        </div>
        <div className={style.workHeader}>
          <h2 >WORK HISTORY</h2>
          <p className={style.position}>Biaggi's - Server</p>
          <p className={style.employmentInfo}>Fort Wayne, IN - 06/2020 - Current</p>
          <p className={style.position}>Fresh Thyme Farmers Market - Cashier</p>
          <p className={style.employmentInfo}>Fort Wayne, IN - 06/2020 - 01/2021</p>
        </div>

        <div className={style.skillsHeader2}>
          <h2 >RELEVANT SKILLS</h2>
          <ul>
          <li >Successful at building relationships with customers to increase likelihood of repeat business</li>
          <li >Proven history of excellent customer service and conflict resolution skills.</li>
          <li >-Skilled at increasing sales of specials and beverages with excellent salesmanship.</li>
          </ul>
        </div>

        <div className={style.professionalSkillsHeader}>
          <h2 >PROFESSIONAL SKILLS</h2>
          <h3 className={style.customerService}>Customer Service</h3>
          <ul>
          <li className={style.professionalSkillsText}>
            Greeted new customers, discussed specials, took drink orders and built immediate positive connections with guests
          </li>
          <li className={style.professionalSkillsText}>
            Resolved guests and employee complaints to maintain complete customer satisfaction and workforce effectiveness.
          </li>
          <li className={style.professionalSkillsText}>
             Shared knowledge of menu items and flavors, enabling customers to make personal decisions based on taste and interest.
          </li>
          </ul>
        
          <h3 className={style.sales}>Sales</h3>
          <ul>
          <li className={style.professionalSkillsText}>
             Memorized restaurant wine stock and appropriate entree pairings, driving daily wine sales averaging $1500.
          </li>
          <li className={style.professionalSkillsText}>
            Upsold high-profit items such as appetizers and mixed drinks to enhance sales numbers.
          </li>
          <li className={style.professionalSkillsText}> Educated customers on promotions to enhance sales.</li>
         
          </ul>
      
          <h3 className={style.moneyHandling}>Money Handling</h3>
          <ul>
          <li className={style.professionalSkillsText}>
            Collected credit card, cash, and gift certificate payments from customers and made good changes to cash transactions.
          </li>
          <li className={style.professionalSkillsText}>
            Operated a cash register for cash, check, and credit card transactions with 100% accuracy.
          </li>
          <li className={style.professionalSkillsText}>
            Reconciled cash drawer at the start and end of each shift, accounting for errors and resolving discrepancies.
          </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default Template_3;
