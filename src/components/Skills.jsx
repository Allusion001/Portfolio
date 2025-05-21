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
            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
          </div>

          <div className=' skillsList col-md-3  py-5 rounded-3'>
            <SiDjango size={60}/>
            <h3 className='fw-normal py-3'>Back-End</h3>
            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
          </div>

          <div className=' skillsList col-md-3  py-5 rounded-3'>
            <SiRender size={60}/>
            <h3 className='fw-normal py-3'>Deployment</h3>
            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
          </div>

          <div className=' skillsList col-md-3 py-5 rounded-3'>
            <SiPostgresql size={60}/>
            <h3 className='fw-normal py-3'>Databases</h3>
            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills