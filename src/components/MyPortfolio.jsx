import React from 'react'

function MyPortfolio() {
  return (
    <>
    <h1 id="myportfolio" className='text-center my-5'>Experience</h1>
    <div className='myPortfolio container shadow'>
      <div className='row'>
        <div className='col-sm-9 mx-auto experience  rounded-3 mt-5 mb-2  mx-1 p-5'>
          <h5>Software Engineer (Full-time)</h5>
          <p>LogicHub | Karachi, Pakistan | Feb 2020 – Feb 2022</p>
          <p>-Developed and maintained robust web scraping solutions using Python, Beautiful Soup, Selenium, and Scrapy for structured and unstructured data extraction.<br/>
            -Designed and managed ETL pipelines to process, clean, and store data in MySQL and PostgreSQL databases.<br/>
            -Automated recurring data extraction tasks using CRON Jobs and cloud scheduling tools.<br/>
            -Deployed scraping applications on AWS EC2 and Azure VMs, ensuring fault tolerance and scalability.<br/>
            -Integrated comprehensive error handling, logging, and API-based data aggregation.<br/>
            -Created project documentation and onboarding guides, improving team efficiency and project clarity.<br/></p>
        </div>
        <div className='col-sm-9 mx-auto experience rounded-3 my-2 mx-1 p-5'>
        <h5>Freelance Data Engineer (Remote)</h5>
          <p>Fiverr | Feb 2020 – Present</p>
          <p>-Delivered custom data extraction and automation solutions using Python and Selenium.<br/>
            -Worked with clients globally, handling API interactions, data scraping, and cloud deployment.<br/>
            -Developed scripts for scraping dynamic websites, managing API rate limits, and structuring output data formats.<br/></p></div>
        <div className=' col-sm-9 mx-auto experience rounded-3 my-2 mx-1 p-5'>
        <h5>Junior Web Developer (Internship)</h5>
          <p>CEE Solutions (Pvt) Ltd | Karachi, Pakistan | Aug 2019 – Oct 2019</p>
          <p>-Assisted in front-end development using React.js, HTML5, CSS3, and Bootstrap.<br/>
            -Supported WordPress-based website development and customization using Elementor.<br/>
            -Collaborated with the development team on UI/UX enhancements and bug fixes for client projects.<br/></p></div>        
        <div className='col-sm-9 mx-auto experience rounded-3 my-2  mx-1 p-5'>
        <h5>Data Analyst (Final Year Project)</h5>
          <p>DHA Suffa University | Karachi, Pakistan | Sep 2019 – Aug 2020</p>
          <p>-Applied machine learning models using Python for predictive analysis..<br/>
            -Conducted Twitter data analysis and visualizations for sentiment and trend tracking.<br/>
            -Worked with REST APIs for data collection and JSON response handling..<br/>
            -Collaborated within a team to develop a comprehensive data analysis solution, contributing to model evaluation and deployment strategies.</p></div> 
      </div>
    </div>
    </>
  )
}

export default MyPortfolio