import React from 'react'
import "./Activity.css"
import Season from "./Season"

const Activity = ({name,difficulty,duration,seasons}) => {
  return (
    <div className="activity">
        <div className='activity-name'>
          <h1>{name}</h1>
        </div>
        <hr/>
          <div className='asdas'>
            <div className='activity-atributes'>
              <h3>Difficulty</h3>
              <p>{difficulty}</p>
            </div>
            <div className='activity-atributes'>
              <h3>Duration</h3>
              <p>{duration} h</p>
            </div>
          </div>
        <div className='activity-atributes-container'>
          <h3>Seasons</h3>
          <div className='seasons-div'>
          {seasons?.map(s=><p key={s.id}>{s.name}</p>)} 
            </div>
        </div>
    </div>
  )
}

export default Activity
