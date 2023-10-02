import React from 'react';
import style from "./Template_2.module.css"
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

const Template_2= () => {
  return (
    <div className={style.main}>
      <div className={style.Left_container} style={{ backgroundColor: '#E5E5E5' }}>
     <div className={style.name_container}>
     <h1 className={style.name}>
            YOUR NAME
          </h1>
          <br/>
          <hr className={style.hr} />
  <div className={style.info_box}>
  <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p className="material-icons icon" style={{ color: 'black' }}>
               <AiOutlineMail/>
              </p>
            </div>
            <p className={style.email}>
              randfe@gmail.com
            </p>
          </div>
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p className="material-icons phoneIcon icon" style={{ color: 'black' }}>
         <AiOutlinePhone/>
              </p>
            </div>
            <p className={style.email}>
              +91 2842 59630
            </p>
          </div>
          
          <div className={style.contactInfo}>
            <div className={style.iconContainer}>
              <p className="material-icons addressIcon icon" style={{ color: 'black' }}>
               <CiLocationOn/>
              </p>
            </div>
            <p className={style.email}>
              New Delhi, India 110034
            </p>
          </div>

  </div>
     </div>
      
      
   
        
        <div className={style.skillsHeader}>
          <h2 >SKILLS</h2>
           <ul>
         <li>- Cash handling expert</li>      
          <li >- Point of sale knowledge</li>
          <li>- Customer service</li>
          <li>- Item promotion</li>
          <li>- Sales trends</li>
          <li>- Sales knowledge</li>
          <li>- Communications skills</li>
          <li>- Active listener</li>
          <li>- Stocking and replenishing</li>
           </ul>

        </div>
        <div className={style.educationHeader}>
          <h2 >EDUCATION</h2>
          <p className={style.school}>Snider High School</p>
          <p className={style.location}>Fort Wayne, IN - 06/2020</p>
          <p className={style.school}>High School Diploma</p>
        </div>
      </div>
      <div>
        <div className={style.objectiveHeader} style={{ backgroundColor: '#E5E5E5' }}>

            <h3 >CAREER OBJECTIVE</h3>
            <p className={style.objectiveText}>
              Motivated server with an engaging personality and flexible approach. Upbeat, friendly and anticipating customer needs to facilitate enjoyable dining experiences. Looking to obtain employment to enhance my customer service relations and skills as a sales associate with the potential for career growth
            </p>
         
        </div>
        <div>
          <h2 className={style.workHeader}>WORK HISTORY</h2>
          <p className={style.position}>Biaggi's - Server</p>
          <p className={style.employmentInfo}>Fort Wayne, IN - 06/2020 - Current</p>
          <p className={style.position}>Fresh Thyme Farmers Market - Cashier</p>
          <p className={style.employmentInfo}>Fort Wayne, IN - 06/2020 - 01/2021</p>
        </div>
        <div>
          <h2 className={style.skillsHeader2}>RELEVANT SKILLS</h2>
          <ul>
          <li className={style.skill2}>- Successful at building relationships with customers to increase likelihood of repeat business</li>
          <li className={style.skill2}>- Proven history of excellent customer service and conflict resolution skills.</li>
          <li className={style.skill2}>- Skilled at increasing sales of specials and beverages with excellent salesmanship.</li>
          </ul>
        </div>
        <div>
          <h2 className={style.professionalSkillsHeader}>PROFESSIONAL SKILLS</h2>
          <h3 className={style.customerService}>Customer Service</h3>
          <p className={style.professionalSkillsText}>
            - Greeted new customers, discussed specials, took drink orders and built immediate positive connections with guests
          </p>
          <p className={style.professionalSkillsText}>
            - Resolved guests and employee complaints to maintain complete customer satisfaction and workforce effectiveness.
          </p>
          <p className={style.professionalSkillsText}>
            - Shared knowledge of menu items and flavors, enabling customers to make personal decisions based on taste and interest.
          </p>
          <h3 className={style.sales}>Sales</h3>
          <p className={style.professionalSkillsText}>
            - Memorized restaurant wine stock and appropriate entree pairings, driving daily wine sales averaging $1500.
          </p>
          <p className={style.professionalSkillsText}>
            - Upsold high-profit items such as appetizers and mixed drinks to enhance sales numbers.
          </p>
          <p className={style.professionalSkillsText}>- Educated customers on promotions to enhance sales.</p>
          <h3 className={style.moneyHandling}>Money Handling</h3>
          <p className={style.professionalSkillsText}>
            - Collected credit card, cash, and gift certificate payments from customers and made good changes to cash transactions.
          </p>
          <p className={style.professionalSkillsText}>
            - Operated a cash register for cash, check, and credit card transactions with 100% accuracy.
          </p>
          <p className={style.professionalSkillsText}>
            - Reconciled cash drawer at the start and end of each shift, accounting for errors and resolving discrepancies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template_2;