import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./RangeInputs.css"

const RangeInputs = ({value,setValue,setInput,input}) => {

   const getBackgroundSize = () => {
    return {backgroundSize: `${((value-1)*100)/4}% 100%`}
   }      

   const onChange = (e) => {   
    setValue(e.target.valueAsNumber)
    setInput({
      ...input,
      [e.target.name]:e.target.value            
    })             
  }
  return (
    <>
      <label className="label">Difficulty</label>
      <div className='range-container'>
        <input type="range" name='difficulty' onChange={onChange} style={getBackgroundSize()} min="1" max="5" value={value} id="myRange"/>
        <div id='Svalue' >{value}</div>
      </div>
    </>
  )
}

export default RangeInputs