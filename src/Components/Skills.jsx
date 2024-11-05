import React from 'react';
import './Skills.css';

//importing images
import CsharpIcon from "../assets/Images/CsharpIcon.png";
import JavaScriptIcon from "../assets/Images/JavaScriptIcon.png";
import HtmlIcon from "../assets/Images/htmlIcon.png";
import CssIcon from "../assets/Images/cssIcon.png";
import NetFrameworkIcon from "../assets/Images/netframeworkIcon.png";
import AngularIcon from "../assets/Images/angularIcon.png";
import ReactJsIcon from "../assets/Images/reactjsIcon.png";
import MySqlIcon from "../assets/Images/mysqlIcon.png";
import SqlServerIcon from "../assets/Images/sqlserverIcon.png";


function Skills() 
{ 

  // const emojis = [
  //   ["/Images/CsharpIcon.png", "C#", "Image", "Am good in C#"],  //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\CsharpIcon.png
  //   ["/Images/JavaScriptIcon.png", "JavaScript", "Image", "Am good in JavaScript"], //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\JavaScriptIcon.png
  //   ["/Images/htmlIcon.png", "HTML 5", "Image", "Am good in HTML 5"], //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\htmlIcon.png
  //   ["/Images/cssIcon.png", "CSS", "Image", "Am good in CSS"], //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\cssIcon.png
  //   ["/Images/netframeworkIcon.png", ".NET Core", "Image", "Am good in .NET Core Framework"],  //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\netframeworkIcon.png
  //   ["/Images/angularIcon.png", "Angular", "Image", "Am good in Angular"],  //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\angularIcon.png
  //   ["/Images/reactjsIcon.png", "React. js", "Image", "Am good in React.js"], //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\reactjsIcon.png
  //   ["/Images/mysqlIcon.png", "My SQL", "Image", "Am good in My SQL"], //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\mysqlIcon.png
  //   ["/Images/sqlserverIcon.png", "SQL Server", "Image", "Am good in SQL Server"],  //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\assets\Images\sqlserverIcon.png
  // ];

  const emojis = [
    [CsharpIcon, "C#", "Image", "Am good in C#"],
    [JavaScriptIcon, "JavaScript", "Image", "Am good in JavaScript"],
    [HtmlIcon, "HTML 5", "Image", "Am good in HTML 5"],
    [CssIcon, "CSS", "Image", "Am good in CSS"],
    [NetFrameworkIcon, ".NET Core", "Image", "Am good in .NET Core Framework"],
    [AngularIcon, "Angular", "Image", "Am good in Angular"],
    [ReactJsIcon, "React.js", "Image", "Am good in React.js"],
    [MySqlIcon, "MySQL", "Image", "Am good in MySQL"],
    [SqlServerIcon, "SQL Server", "Image", "Am good in SQL Server"],
  ];

  return (
    <div className='skillbox'>
      <div className="wrapper">
        <div className="carousel">
          {emojis.map((emoji, index) => (
            <div className="carousel__item" key={index}>
              <div className="carousel__item-head">
                {emoji[2] === 'Image' ? (
                  <img src={emoji[0]} alt={emoji[1]} className="emojiImage" />
                ) : (
                  emoji[0]
                )}
              </div>
              <div className="carousel__item-body">
                <p className="title">{emoji[1]}</p>
                <p>{emoji[3]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
}

export default Skills;


// return (
//   <div className='skillbox'>
//     <div className="wrapper">
//       <div className="carousel">
//         {emojis.map((emoji, index) => (
//           <div className="carousel__item" key={index}>
//             <div className="carousel__item-head">{emoji[0]}</div>
//             <div className="carousel__item-body">
//               <p className="title">{emoji[1]}</p>
//               <p>Unicode: {emoji[2]}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )



// return (
  //   <div className='skillbox'>
  //     <div className="wrapper">
  //       <div className="carousel">
  //         {emojis.map((emoji, index) => (
  //           <div className="carousel__item" key={index}>
  //             <div className="carousel__item-head">
  //               {typeof emoji[0] === 'string' && emoji[0].startsWith('./') ? (
  //                 <img src={emoji[0]} alt={emoji[1]} className="emojiImage" />
  //               ) : (
  //                 emoji[0]
  //               )}
  //             </div>
  //             <div className="carousel__item-body">
  //               <p className="title">{emoji[1]}</p>
  //               <p>Unicode: {emoji[2]}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // )