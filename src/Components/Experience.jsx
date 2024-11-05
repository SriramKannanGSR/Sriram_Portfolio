import React from 'react';
import  './Experience.css';

function Experience() 
{
  
  const experiences = [
    {
      company: 'Z Grow Solutions',
      duration: '2+ Years Exp',
      description: `
        I have 2+ years of experience at Z Grow Solutions Pvt. Ltd., 
        working on various full-stack technologies. Key projects include like
        Kiosk Application for a Korean based Automobile Company.
        Internal Projects such as Employee Overview Application and Customer Application.
      `,
      skills: '.NET Core, WPF.NET, Angular, React.js, RESTful API, SQL Server, MySQL, C#, JavaScript, TypeScript',
      fromto: 'Jan 2023  to  Present',
    },

    {
      company: 'DGS Technical Service',
      duration: '1 Year Exp',
      description: `
        I have 1 year of experience at DGS Technical Service Pvt. Ltd., 
        where I was developing front-end for an American based company.
      `,
      skills: 'Angular, React.js, HTML, CSS, JavaScript, TypeScript, Figma, Canva',
      fromto: 'Jan 2022  to  Jan 2023',
    },

    {
      company: 'Tata Strive',
      duration: '4 Months',
      description: `
        I did intenship and gained knowledge in Java Full Stack Development.
      `,
      skills: 'SpringBoot, Angular, React.js, MySQL, HTML, CSS, Java, JavaScript, Python, C++ and Github',
      fromto: 'Aug 2021  to  Dec 2021',
    },
  ]

  return (
    <div className='expbox'>

    {experiences.map((exp, index) => (
      <div key={index} className='expdet'>

        <div className="expname">

          <div className="expcompany">            
            <h3>{exp.company}</h3>
          </div>

          <div className="expyear">
            <div className="expyear1">
              <h4>{exp.duration}</h4>             
            </div>
          </div>

        </div>

        <div className="expcontent">

          <div className="myexpdis">
            <h4 className='decsription'>Description :-</h4>
            <p className='myexpdis2'>{exp.description}</p>
            {/* <p className='myexpdis2'  dangerouslySetInnerHTML={{ __html: exp.description }} /> */}
          </div>

          <div className="fromto">
            <h4 className='duration'>Durations :-</h4>
            <p className='durations2'>{exp.fromto}</p>
          </div>

          <div className="myexpskill">
            <h4 className='skillsused'>Skills Utilized :-</h4>
            <p className='myexpskill2'>{exp.skills}</p>
          </div>

        </div>

      </div>
    ))}

  </div>
  )
}

export default Experience;
