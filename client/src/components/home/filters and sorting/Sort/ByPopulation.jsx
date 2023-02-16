import React from 'react'
import { useDispatch } from 'react-redux'
import {sortByPopulation,changeInputSort} from "../../../../redux/actions"
import "./ByPopulation.css"


const ByPopulation = () => {
    const dispatch = useDispatch()
    const onChange=(e)=>{
      dispatch(changeInputSort(e.target.value))
      dispatch(sortByPopulation(e.target.value))
    }
  return (
    <div className='select'>
      <select name="population" className='by-population' onChange={onChange}>
        <option className='option' value="">By Population</option>
        <option className='option' value="Minor">Minor</option>
        <option className='option' value="Major">Major</option>
      </select>
    </div>
  )
}

export default ByPopulation