import React from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Project1 from "./Components/Project1/Project1";
import Project2 from "./Components/Porject2/Project2";
import Project3 from "./Components/Project3/Project3";
import "./app.scss"
import { Button } from "@mui/material";
const App = () => {
  return (
    <div className="home_container">
      
    <Router>
      
      <Link to="/"> <Button variant="contained">Home</Button></Link>
       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/project1" element={<Project1/>} />
        <Route path="/project2" element={<Project2/>} />
        <Route path="/project3" element={<Project3/>}/>
        </Routes>
        
    </Router>
    </div>
    
  );
};

export default App;
