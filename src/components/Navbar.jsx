import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'



function Navbar() {

  return (
    <div className='Navbar sticky-top'>
         <nav className={`navbar navbar-right navbar-expand-lg navbar-light shadow-sm px-6 mx-1 py-3 sticky`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-uppercase" href="/">M . A . K</a>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
         
     
      <div className="collapse navbar-collapse justify-content-center px-6 " id="navbarNavAltMarkup">
          <ul className="navbar-nav mx-auto ">
             <li className='nav-item'> 
              <NavLink className={({isActive})=>isActive?"nav-link active fw-semibold mx-1 px-4" : "nav-link px-4 mx-1"} style={{width:'130px'}} end to="/" aria-current="page" ><Link to="/"> Home</Link> </NavLink>
            </li>

             <li className='nav-item'> 
            <NavLink className={({isActive})=>isActive?"nav-link active fw-semibold mx-1 px-4" : "nav-link  mx-1 px-4"} style={{width:'130px'}} end to="/portfolio" aria-current="page" ><Link to="projects">Projects </Link></NavLink>
            </li>

           <li className='nav-item'> 
              <NavLink className={({isActive})=>isActive?"nav-link active mx-1 fw-semibold px-4" : "nav-link mx-1 px-4"} style={{width:'130px'}} end to="/login" aria-current="page"><span><Link to="myportfolio">Experience</Link></span></NavLink>
            </li>
          
          <li className='nav-item'> 
          <NavLink className={({isActive})=>isActive?"nav-link active fw-semibold mx-1 px-4" : "nav-link mx-1 px-4"} style={{width:'130px'}} end to="myportfolio" aria-current="page" ><Link to="contactMe">Contact</Link> </NavLink>
        </li>
            

           
            

           
           
            
            
          </ul>
        
        </div>

        <Link to="contactMe"><button className="contactme btn btn-light d-none d-lg-inline-block" style={{ color: 'rgb(159, 70, 255)',border: '1px solid rgb(159, 70, 255)' }}>Contact Me</button></Link>
       

        </div>
    </nav>
    </div>
  )
}

export default Navbar