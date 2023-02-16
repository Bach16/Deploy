import React from 'react'
import "./Sorting.css"
import Alphabetically from "./Alphabetically"
import ByPopulation from "./ByPopulation.jsx"

const Sorting = () => {
  return (
    <div className="sort">
      <div className='sort-container'>
        <Alphabetically/>
        <ByPopulation/>
      </div>
    </div>
  )
}

export default Sorting