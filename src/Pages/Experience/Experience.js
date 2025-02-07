import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <section className='experience_section'>
       <article data-aos="fade-up">
          <p className="subtitle">My Experience</p>
          <h2 className="title">Some Things I have</h2>
        </article>
        <div className='work_container'>
        <div className='work_info'>
        <div className="work_info_box1">
        <p className='work_position'>Medical Document Specialist</p>
        <p className='work_location'>SiftMed</p>
        </div>
        <div className="work_info_box2">
        <p className='work_date'>May 2024 - Present</p>
        <p className='work_location'>St. John's, NL</p>

        </div>
        </div>
        <div className='work_achievements'>
        <p className='work_achievements_list'>
        Conduct comprehensive <span>data sorting, review, and analysis</span> of both medical and non-medical information, including <span> precise medical data labeling to ensure high accuracy</span>.
        </p>
        <p className='work_achievements_list'>
       Utilized Salesforce to assign tasks to team members, and ensure the platform is updated for efficient work management.
        </p>
         </div>
         </div>
        <div className='work_container'>
        <div className='work_info'>
        <div className="work_info_box1">
        <p className='work_position'>Software Developer</p>
        <p className='work_location mun'>Memorial University of Newfoundland</p>
        
        </div>
        <div className="work_info_box2">
        <p className='work_date'>Sep 2023 - Sep 2024</p>
        <p className='work_location'>St. John's, NL</p>

        </div>
        </div>
        <div className='work_achievements'>
        <p className='work_achievements_list'>
        Implemented a highly efficient search functionality in a web application, leveraging <span> Remix, TypeScript.js,
        PostgreSQL, Python, Docker and Linux</span> enabling users to seamlessly explore chemistry compounds and filter results based
        on specific properties.
        </p>
        <p className='work_achievements_list'>
        Collaborating closely with the development team to optimize the website’s user interface and experience using Chakra UI, resulting in a more user-friendly and visually appealing design.
        </p>
         </div>
         </div>
         <div className='work_container'>
        <div className='work_info'>
        <div className="work_info_box1"> 
        <p className='work_position'>Software Developer</p>
        <p className='work_location'>CSIpix Forensic Software</p></div>
        <div className="work_info_box2">
        <p className='work_date'>Apr 2023 - Aug 2023</p>
        <p className='work_location'>St. John's, NL</p>
        </div>
        </div>
        <div className='work_achievements'>
        <p className='work_achievements_list'>
        Developed <span> visual C++ code </span> utilizing <span>Microsoft Foundation Classes (MFC) and Dynamic Link Library (DLL)</span> to integrate with existing CSIpix software, enabling extraction and display of data from <span>binary and XML NIST files </span> in a table.
format.
        </p>
        <p className='work_achievements_list'>
        Implemented manual editing, copy and printing capabilities, enhancing functionality and usability in the software.
        </p>
        <p className='work_achievements_list'>
        Collaborated with the team to conduct comprehensive pre-release testing of CSIpix’s new software, actively identifying and diagnosing errors, including critical points leading to crashing of software.        </p>
         </div>
         </div>
         <div className='work_container'>
        <div className='work_info'>
        <div className="work_info_box1">
        <p className='work_position'>Restaurant Team Member</p>
        <p className='work_location'>Ziggy Peelgood's</p>
        </div>
        <div className="work_info_box2">
        <p className='work_date'>May 2021 - Aug 2023</p>
          <p className='work_location'>St.John's, NL</p>
          </div>
        </div>
        <div className='work_achievements'>
        <p className='work_achievements_list'>
        Excelled as a front-end staff member in a dynamic restaurant environment, seamlessly multitasking between cashier responsibilities, order taking, cooking orders, and providing exceptional customer service.
        </p>
        <p className='work_achievements_list'>
        Demonstrated a strong work ethic by going beyond typical front-end duties, engaging in various physically demanding tasks such as restaurant cleaning and heavy lifting during the production of raw ingredients, showcasing dedication to maintaining a smoothly functioning establishment.
        </p>
         </div>
         </div>
        <div className='work_container'>
        <div className='work_info'>
        <div className="work_info_box1">
        <p className='work_position'>Software Developer</p>
        <p className='work_location'>GAOTek Inc.</p>
          </div>
          <div className="work_info_box2">
          <p className='work_date'>Nov 2022 - Feb 2023</p>
          <p className='work_location'>Remote</p>
        
          </div>
        
        </div>
        <div className='work_achievements'>
        <p className='work_achievements_list'>
        Debugged and successfully build different <span>C++ projects</span> using Microsoft Visual Studio.
        </p>
        <p className='work_achievements_list'>
        Completed the code files provided by the team manager using the C++ programming language.
        </p>
        <p className='work_achievements_list'>
        Collaborated with business development team in expanding the company products by contacting the clients on LinkedIn.
        </p>
         </div>
         </div>
         <div className='work_container last'>
        <div className='work_info'>
        <div className="work_info_box1">
        <p className='work_position'>Cashier</p>
        <p className='work_location'>Walmart</p>
          </div>
          <div className="work_info_box2">
          <p className='work_date'>Nov 2020 - Jul 2021</p>
          <p className='work_location'>St. John's, NL</p>
        
            </div>
        </div>
        <div className='work_achievements'>
        <p className='work_achievements_list'>
        Initiated my journey at Walmart as a dedicated cashier, efficiently processing transactions and providing top-notch service to customers at the checkout.
        </p>
        <p className='work_achievements_list'>
        Successfully transitioned to the self-checkout area, taking on increased responsibilities and ensuring a seamless and user-friendly experience for shoppers.
        </p>
        <p className='work_achievements_list'>
        Transferred to the Customer Service Desk, leveraging strong interpersonal abilities to assist customers with basic returns, refunds, and exchanges. Resolved diverse customer inquiries, maintaining a high level of satisfaction and building positive relationships.
        </p>
         </div>
         </div>
    </section>
  )
}

export default Experience
