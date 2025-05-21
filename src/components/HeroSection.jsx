import React from 'react'
import myImage from "../assets/portProfile.png"


function HeroSection() {
  return (
    <div className='HeroSection'>
      <div className=' container-fluid d-flex justify-content-center align-items-center p-5'>
          <div className='row ' >
              <div className='col-md-7 order-2 order-md-1 d-flex flex-column justify-content-center mb-3 p-3 '>
                  <h5 >MUHAMMAD ALI KHAN</h5>
                  <h1 style={{fontSize:'70px',fontFamily:'"Roboto", sans-serif'}}>Full Stack Developer /
                  <br/> Software Engineer
                  </h1>
                  <p>Seeking to work in an esteemed organisation as a developer where I can further shine my skills & knowledge, which challenges me
  intellectually while utilising my previous technical and creative educational skills.    </p>
              </div>
              <div className='col-md-5 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center'>
                  <img src={myImage} className='img-fluid rounded-circle' style={{height:'auto',maxWidth: '50%' }}/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default HeroSection