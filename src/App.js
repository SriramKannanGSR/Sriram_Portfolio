
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar'; //D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\Components\Navbar.jsx
import Education from './Components/Education';//D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\Components\Education.jsx
import Experience from './Components/Experience';//D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\Components\Experience.jsx
import Home from './Components/Home';//D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\Components\Home.jsx
import Contact from './Components/Contact';//D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\Components\Contact.jsx
import Skills from './Components/Skills';//D:\Sriram Demo Projects\Portfolios\pradeep-portfolio\src\Components\Skills.jsx

import './App.css';

function App() {
  return (
    <div>
       <Router>
          <Navbar />
          <Routes>
              <Route path="/Home" element={<Home />}/>
              <Route path="/Education" element={<Education />}/>
              <Route path="/Experience" element={<Experience />}/>
              <Route path="/Contact" element={<Contact />}/>
              <Route path="/Skills" element={<Skills />}/>

              <Route path="*" element={<Navigate to={"/Home"}/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
