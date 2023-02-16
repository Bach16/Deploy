import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addFormCountries} from "../../../redux/actions"
import "./Result.css"


const Result = ({result,id}) => {
  const dispatch = useDispatch()
  const countriesAdded = useSelector(state=>state.formCountries)
  

  const onClick = (e)=> {
    if(countriesAdded.includes(id)) return
    dispatch(addFormCountries([
      ...countriesAdded, id
    ]))
  }

  return (
    <div className='result'>
        <div className='text-container'>
          <p>{result.name}</p>
        </div>
        <button type='none' onClick={onClick}>+</button>
    </div>
  )
}

export default Result