import React from 'react';
import  './Education.css';

function Education() 
{

  const education = [
    {
      degree:'Bachelor of Engineering',
      college:'SRM TRP ENGINEERING COLLEGE',
      discription:`I had pursued my Bachelor of Engineering in Mechanical Engineering. 
                   Though my background is different, I had participated in HackerRank competitions and intercollege coding competitions`,
      yop:'2017 to 2021'
    },
    
    {
      degree:'Higher Secondary Course',
      college:'Vidyaa Vikas Matric. Hr. Sec. School',
      discription:`I had completed my 12th in Computer Science.`,
      yop:'2016 to 2017'
    },

    {
      degree:'Secondary Course',
      college:'The Adiya Birla Public School',
      discription:`I had completed my 10th`,
      yop:'2014 to 2015'
    }  
  ]

  return (
    <div className='edubox'>
      {education.map((edu, index) => (
        <div key={index} className="educontent">

          <div className="institution">
            <h2 className='degree'>{edu.degree}</h2>
          </div>

          <div className='degcon'>

            <div className="clgnamebox">
              <h4 className='college'>{edu.college}</h4>
            </div>

            <div className="disbox">
              <p className='discription'>{edu.discription}</p>
            </div>

            <div className="durbox">
              <h3 className='dur'>Time Period :-</h3>
              <p className='period'>{edu.yop}</p>
            </div>

          </div> 

        </div>
      ))}

    </div>
  )
}

export default Education;

// function Education() 
// {
//   return (
//     <div className='edubox'>
//       <div className="educontent">

//         <div className="institution">
//           <h2 className='degree'>Bachelor of Engineering</h2>
//         </div>

//         <div className='degcon'>

//           <div className="clgnamebox">
//             <h4 className='college'>SRM TRP ENGINEERING COLLEGE</h4>
//           </div>

//           <div className="disbox">
//             <p className='discription'>I had pursued my Bachelor of Engineering in Mechanical Engineering. 
//               Though my background is different, I had participated in HackerRank competitions and intercollege coding competitions</p>
//           </div>  

//           <div className="durbox">
//             <h3>Durations :-</h3>
//             <p>2017 to 2021</p>
//           </div>       
          
//         </div>
           

//       </div>
//     </div>
//   )
// }

// export default Education;