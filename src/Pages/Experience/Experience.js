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
      <p className='work_position'>QA Developer</p>
      <p className='work_location'>SiftMed</p>
    </div>
    <div className="work_info_box2">
      <p className='work_date'>June 2025 - Present</p>
      <p className='work_location'>St. John's, NL</p>
    </div>
  </div>
  <div className='work_achievements'>
            <p className='work_achievements_list'>
              Led end-to-end <span>QA for weekly web application releases</span>, executing manual, automated, exploratory, stress, API, and basic security testing to prevent critical bugs from reaching production.
            </p>
            <p className='work_achievements_list'>
              Built and maintained an automated <span>testing and data validation pipeline</span> using TypeScript, MySQL, and AWS Step Functions to process documents through LLM workflows and generate accuracy metrics.
            </p>
            <p className='work_achievements_list'>
              Developed and maintained <span>end-to-end functional test automation</span> using Playwright, reducing manual release testing time by 33% and increasing test coverage.
            </p>
            <p className='work_achievements_list'>
              Performed QA-focused <span>code reviews</span> to identify logic gaps, edge cases, and data handling issues while actively contributing to product discussions to improve workflow and feature quality.
            </p>
            <p className='work_achievements_list'>
              Triaged and investigated customer-reported issues through Salesforce tickets, verified and prioritized defects based on impact, and partnered with engineering teams to deliver fixes.
            </p>
            <p className='work_achievements_list'>
              Collaborated with pipeline and AI teams to analyze and improve <span>LLM-driven data workflows</span>, identifying annotation inconsistencies and improving data labeling accuracy by 47%.
            </p>
          </div>
        </div>
        <div className='work_container'>
  <div className='work_info'>
    <div className="work_info_box1">
      <p className='work_position'>Data Quality Specialist</p>
      <p className='work_location'>SiftMed</p>
    </div>
    <div className="work_info_box2">
      <p className='work_date'>May 2024 - May 2025</p>
      <p className='work_location'>St. John's, NL</p>
    </div>
  </div>

  <div className='work_achievements'>
    <p className='work_achievements_list'>
      Conducted comprehensive <span>validation, sorting, and labeling of sensitive medical and non-medical documents</span> uploaded by customers.
    </p>
    <p className='work_achievements_list'>
      Managed and tracked document workflows through <span>JIRA cases</span>, ensuring accurate documentation and timely updates.
    </p>
    <p className='work_achievements_list'>
      Ensured delivery of processed documents within <span>24-hour Service Level Agreements (SLAs)</span> while maintaining high data quality standards.
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
        Developed <span> visual C++ code </span> utilizing <span>Microsoft Foundation Classes (MFC) and Dynamic Link Library (DLL)</span> to integrate with existing CSIpix software, enabling extraction and display of data from <span>binary and XML NIST files </span> in a table
format.
        </p>
        <p className='work_achievements_list'>
        Implemented manual editing, copy and printing capabilities, enhancing functionality and usability in the software.
        </p>
        <p className='work_achievements_list'>
        Collaborated with the team to conduct comprehensive pre-release testing of CSIpix’s new software, actively identifying and diagnosing errors, including critical points leading to crashing of software.        </p>
         </div>
         </div>
        <div className='work_container last'>
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
        <div className='work_achievement'>
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
         
    </section>
  )
}

export default Experience
