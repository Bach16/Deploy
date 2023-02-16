import React from 'react'
import { Link } from "react-router-dom"
import "./LandingPage.css"


const LandingPage = () => {
  return (
    <div className="landing"> 
      <div className='landing-text'>
        <h1>PI Countries</h1>
          <p>Henry Individual Proyect</p>
          <hr/>
          <Link to="/home"  style={{ color: 'inherit', textDecoration: 'inherit'}}>           
            <button className="boton">Start</button>          
          </Link>     
        </div>
      <div className='world-image'/>
    </div>

  )
}

export default LandingPage