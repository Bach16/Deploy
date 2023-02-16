import React from 'react'
import { useEffect } from 'react';
import "./FormInput.css"

const FormImput = ({label,onChange,changeVisibility,errorMessage,errorsToRender,name,value,...inputProps}) => {

  useEffect(()=>{
    changeVisibility(name)
  },[value])

  return (
    <>
        <div className='formInput'>
            <label className="label">{label}</label>
            <input id='aja' {...inputProps} name={name} value={value} onChange={onChange} />
            <span id={name}>{errorMessage}</span>
        </div>
    </>
  )
}

export default FormImput