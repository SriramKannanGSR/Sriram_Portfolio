import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

function Home() {
 
  //const profile = "./Images/sriram3.png";
  const github = "./Images/githubIcon.png";
  const linkedIn = "./Images/linkedInIcon.png";
  const instagram = "./Images/instagramIcon.png";
  const facebook = "./Images/facebookIcon.png";

  return (
    <div className='homebox'>
        <div className="mainbox">
            <div className="aboutme">              
                <h1 className='sriram myname'>SRIRAM KANNAN</h1>
                <h2 className='sriram rolename'>.Net Full Stack Developer</h2>
                <h2 className='sriram Objective'>I'm Passionate about delivering .NET full-stack solutions with expertise in backend, 
                                                 frontend technologies, API's and cloud integration.</h2>
            </div>
        </div>
        <div className="sidebox">
          {/* <img src={profile} alt="no data" srcset="" className='profileImg'/> */}

            <div className="socialBox">
              <Link to="https://github.com/SriramKannan04" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="no githubImg" srcset="" className='socialIcons'/></Link>              
              <p className='socialNames'>Github</p>
            </div> 

            <div className="socialBox">
              <Link to="https://www.linkedin.com/in/sriram-kannan-913458247/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="no linkedInImg" srcset="" className='socialIcons'/></Link>              
              <p className='socialNames'>LinkedIn</p>
            </div> 

            <div className="socialBox"> 
              <Link to="https://www.instagram.com/sriram_mr.imperfect?utm_source=qr&igsh=YWJ3NXo0YXh0MGc2" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="no githubImg" srcset="" className='socialIcons'/></Link>              
              <p className='socialNames'>Instagram</p>
            </div> 

            <div className="socialBox">
              <Link to="https://www.facebook.com/sriram.suka" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="no githubImg" srcset="" className='socialIcons'/></Link>              
              <p className='socialNames'>FaceBook</p>
            </div>              
          
        </div>

        {/* <div className="imagebox"></div> */}
    </div>
  )
}

export default Home