import React from 'react';
import  './Contact.css';

function Contact() {
  return (
    <div className='contactbox'>

      <div className="leftbox">
        <div className="personalinfo">
          <div class="ribbon ribbon-top-left"><span>Personal Info</span></div>
          <div className="personalinfo2">

            <div className="aboutme">
              <p className='aboutme2'>I'am Sriram Kannan, an aspiring .NET Full Stack Developer with a strong foundation in both front-end and back-end development.<br/>
                 I am proficient in designing and building dynamic, responsive web applications using .NET technologies.<br/>              
                 I am passionate about coding, eager to solve complex problems, and continually working to refine my technical expertise.
              </p>
            </div>

            <div className="bio">

              <div className="biocon">
                <label className='biolabel'>Date of Birth</label>
                <label className='biolabel'>04th, October 1998</label>
              </div>

              <div className="biocon">
                <label className='biolabel'>Current Location</label>
                <label className='biolabel'>Chennai</label>
              </div>

              <div className="biocon">
                <label className='biolabel'>Native Location</label>
                <label className='biolabel'>Kovilpatti</label>
              </div>

              <div className="biocon">
                <label className='biolabel'>Nationality</label>
                <label className='biolabel'>Indian</label>
              </div>

            </div>

          </div>          
        </div>
      </div>

      <div className="rightbox">
        <div className="personalinfo">
          <div class="ribbon ribbon-top-left"><span>Contact Info</span></div>
          <div className="personalinfo3">

            <div className="contactme">
              <label className='biolabel'>Email Id</label>            
              <a className='mailid' href='mailto:sriramkannan04@outlook.com'>sriramkannan04@outlook.com</a>
            </div>

            <div className="contactme">
              <label className='biolabel'>Mobile Number</label>
              <label className='biolabel'>7094896529</label>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;