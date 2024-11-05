import React from 'react'

import { Link } from 'react-router-dom';

import './Navbar.css';

import homeIcon from "../assets/Images/HomeIcon.png";
import ExperienceIcon from "../assets/Images/ExpIcon.png";
import EducationIcon from "../assets/Images/EduIcon.png";
import SkillsIcon from "../assets/Images/SkillsIcon.png";
import ContactusIcon from "../assets/Images/ConIcon.png";


function Navbar() 
{
                // public folder
  // const homeIcon = "./Images/HomeIcon.png";
  // const ExperienceIcon = "./Images/ExpIcon.png";
  // const EducationIcon = "./Images/EduIcon.png";
  // const SkillsIcon = "./Images/SkillsIcon.png";
  // const ContactusIcon = "./Images/ConIcon.png";

  // const homeIcon = "./assets/Images/HomeIcon.png";
  // const ExperienceIcon = "./assets/Images/ExpIcon.png";
  // const EducationIcon = "./assets/Images/EduIcon.png";
  // const SkillsIcon = "./assets/Images/SkillsIcon.png";
  // const ContactusIcon = "./assets/Images/ConIcon.png";

  return (
    <div className='navbarBox'>
        <div className="menubox">

            <Link to='/Home' className='routess'>
                <img src={homeIcon} alt="" className='logos'/>
                <span className='menunames'>Home</span>
              </Link>

            <Link to='/Experience' className='routess'>
              <img src={ExperienceIcon} alt="" className='logos'/>
              <span className='menunames'>Experience</span>
            </Link>

            <Link to='/Education' className='routess'>
              <img src={EducationIcon} alt="" className='logos'/>
              <span className='menunames'>Education</span>
            </Link>

            <Link to='/Skills' className='routess'>
              <img src={SkillsIcon} alt="" className='logos'/>
              <span className='menunames'>Skills</span>
            </Link>

            <Link to='/Contact' className='routess'>
              <img src={ContactusIcon} alt="" className='logos'/>
              <span className='menunames'>Contact me</span>
            </Link>

        </div>
    </div>
  )
}

export default Navbar