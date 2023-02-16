import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Countryadded from "./Countryadded"
import "./AddCountries.css"

const AddCountries = ({countries}) => {

    const countriesAdded = useSelector(state=>state.formCountries)
    let [render,setRender] = useState([])

    useEffect(()=>{
        let array =[]
        for (let i = 0; i < countriesAdded.length; i++) {
            array.push(countries.filter(c=>c.id===countriesAdded[i]))          
        }
        setRender(array.flat())
    },[countriesAdded])
    let counter = 200

  return (
    <div className='Countries-Selected'>
        <h2 className='h2-text' >Selected Countries</h2>
        {render.flat().map(c=> <Countryadded name={c.name} key={counter++} id={c.id}/>)}
    </div>
  )
}

export default AddCountries