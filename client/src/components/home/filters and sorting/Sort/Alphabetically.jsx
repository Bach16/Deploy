import React from 'react'
import { useDispatch } from 'react-redux'
import "./Alphabetically.css"
import {changeInputSort,sortAlphabetically} from "../../../../redux/actions"

const Alphabetically = () => {
  const dispatch = useDispatch()
  
  const onChange=(e)=>{
    console.log(e.target.value);
    dispatch(changeInputSort(e.target.value))
    dispatch(sortAlphabetically(e.target.value))
  }
    
  return (
    <div className='select'>
      <select name="alphabetically" className='alphabetically' onChange={onChange}>
        <option className='option' value="">Alphabetically</option>
        <option className='option' value="A_Z">A-Z</option>
        <option className='option' value="Z_A">Z-A</option>
      </select>
    </div>
  )
}

export default Alphabetically