import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteFormCountries} from "../../../redux/actions"
import "./Countryadded.css"

const Countryadded = ({name,id}) => {

    const dispatch = useDispatch()
    const countriesAdded = useSelector(state=>state.formCountries)
    const deletCountry = (id)=>{
        return countriesAdded.filter(e=>e !== id)
    }
    const onClick = (e)=> {
        dispatch(deleteFormCountries(deletCountry(id)))
    }
    
  return (
    <div className='Selected-countries'>
        <p className='text-container-results'>{name}</p>
        <button onClick={onClick}>x</button>
    </div>
  )
}

export default Countryadded