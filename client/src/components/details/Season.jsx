import React from 'react'
import "./Season.css"

const Season = ({name}) => {
  return (
    <div className='season'>
        <p>{name}</p>
    </div>
  )
}

export default Season