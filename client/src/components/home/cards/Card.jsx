import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"


const Card = ({id,name,image,continent}) => {
  return (
    <div className='card'>
      <Link to={`/countrie/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <img src={image} alt="country flag"/>
        <h3>{name}</h3>
        <h4>{continent}</h4>
      </Link>
     </div>
  )
}

export default Card