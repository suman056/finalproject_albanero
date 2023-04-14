import React from 'react'
import "../../app.scss"
import {  Link } from "react-router-dom";
import Button from '@mui/material/Button';


function Home() {
  return (
    <div>
    <h1>Projects</h1>
    <div className="container">
    <Link to="/project1"><Button variant="contained" className='project_button'> Form Data</Button></Link>
    <Link to="/project2"><Button variant="contained"className='project_button'>Select Card</Button></Link>
    <Link to="/project3"><Button variant="contained" className='project_button'>Custom dropdown</Button></Link>
    <Link to="/project4"><Button variant="contained" className='project_button'>Timer Show</Button></Link>
    </div>
    </div>
  )
}

export default Home