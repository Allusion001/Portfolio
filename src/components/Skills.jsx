import React from 'react'
import { FaReact } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";




function Skills() {
  return (
    <div className='Skills'>
     <h1 className='my-5 text-center'>Expertise</h1>
      <div className='container shadow-lg'>
      
        <div className='skillsSet row my-5 '>
            <div className='skillsList col-md-3  py-5 rounded-3'>
            <FaReact size={60}/>
            <h3 className='fw-normal py-3 '>Front-End</h3>
            <p className='lead small'><small className='bg-white'>With 2 years of hands-on experience in front-end development, I specialize in building responsive, user-friendly interfaces using React.js, HTML5, CSS3, and Bootstrap. I’m skilled at creating dynamic single-page applications (SPAs) and component-based architectures that deliver a smooth and interactive user experience. I also focus on mobile responsiveness, clean UI/UX practices, and optimizing performance for modern web applications.</small></p>
          </div>

          <div className=' skillsList col-md-3  py-5 rounded-3'>
            <SiDjango size={60}/>
            <h3 className='fw-normal py-3'>Back-End</h3>
            <p className='lead'><small className='bg-white'>On the back end, I bring 2 years of practical experience working with Django and Python to develop scalable, secure, and maintainable web applications. My backend projects often involve implementing RESTful APIs, JWT-based authentication systems, and integrating third-party payment services. I take pride in writing clean, efficient code while ensuring data security and application performance.</small></p>
          </div>

          <div className=' skillsList col-md-3  py-5 rounded-3'>
            <SiRender size={60}/>
            <h3 className='fw-normal py-3'>Deployment</h3>
            <p className='lead'><small className='bg-white'>I have solid experience deploying full-stack applications to modern cloud platforms like Render and Netlify. From configuring continuous deployment pipelines to managing environment variables and production-ready builds, I ensure that my applications are not just built well but are also delivered smoothly to end users with high availability and reliability.</small>

</p>
          </div>

          <div className=' skillsList col-md-3 py-5 rounded-3'>
            <SiPostgresql size={60}/>
            <h3 className='fw-normal py-3'>Databases</h3>
            <p className='lead '><small className='bg-white'>In terms of databases, I work extensively with PostgreSQL for managing structured, relational data in my projects. Additionally, I’m experienced with AWS S3 for cloud-based file storage and asset management, integrating it seamlessly into web applications to handle image uploads, static file hosting, and secure content delivery.</small></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills