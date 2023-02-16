import React, { useEffect, useState } from 'react'
import NavBar from "../navBar/NavBar"
import Form from "../form/Form"
import "./Create.css"
import CountriesContainer from "./countriesContainer/CountriesContainer"
import { useDispatch, useSelector } from 'react-redux'
import {deleteFormCountries,getSeasons,postActivity,changeFormInput} from "../../redux/actions"


const Create = () => {  
  //------------------------------------------States---------------------------------
  const error = useSelector(state=>state.error)
  const seasons = useSelector(state=>state.seasons)
  const dispatch = useDispatch()
  const countriesAdded = useSelector(state=>state.formCountries)
  const [input,setInput] = useState({
    name: "",
    difficulty: 1,
    duration:"",
    season:[],  
    countries:[]
  })
  const [errorsToRender, setErrorsToRender] = useState({
    name:undefined,
    duration:undefined,
    season: undefined
  })
  const [ischecked, setIschecked] = useState({
    spring:false,
    summer:false,
    fall:false,
    winter:false
  });
  const [value,setValue] = useState(1);
  //----------------------------------------UseEffect----------------------------------------------
  useEffect(()=>{
    if(!seasons.length)dispatch(getSeasons())
    setInput({
      ...input,
      countries:countriesAdded
    })
  },[countriesAdded])
  //---------------------------------------Functions----------------------------------------------  
  const renderCheckboxError= (onSubmit) =>{
    let errorText = document.getElementById("checkbox-error-text")
    if (onSubmit) {
      if(!errorsToRender.season?.length || !errorsToRender.season) {
        return errorText.style.visibility ="visible"        
      } 
    }
    if(errorsToRender.season?.length || !errorsToRender.season) return errorText.style.visibility =  "hidden"
    else return errorText.style.visibility ="visible"
  }
  const changeVisibility = (name,submit) => {
    let errText = document.getElementById(name)
    if(submit){
      if (errorsToRender[name] === undefined) {
        errText.style.visibility = "visible"
      } else if ( errorsToRender[name] === true) errText.style.visibility = "visible"
      else errText.style.visibility = "hidden"
    } else {
      if (errorsToRender[name]?.[0]) errText.style.visibility = "visible"
      else errText.style.visibility = "hidden"    
    }
  }
  //---------------------------------------Handlers---------------------------------------------  
  const handleSubmit = (e) => {
    e.preventDefault() 
    if(errorsToRender.name === undefined) changeVisibility("name",true)
    if(errorsToRender.duration === undefined) changeVisibility("duration",true)
    if (!input.season.length) renderCheckboxError(true)
    if(
       !input.name.length
      || !input.duration.length
      || errorsToRender.name === false
      || errorsToRender.duration === false
      || !input.season.length
      || !countriesAdded.length
      ){
      return 
    }
    dispatch(deleteFormCountries())
    dispatch(postActivity(input))
    dispatch(changeFormInput(""))    
    setIschecked({
      spring:false,
      summer:false,
      fall:false,
      winter:false
    })
      setInput({
      name: "",
      difficulty: 1,
      duration:"",
      season:[]     
          }) 
    setValue(1)           
  }
  return (
    <>    
      <div className='create' >
      <NavBar/>
        <form className='form' onSubmit={handleSubmit}>
          <button 
              className="submit" 
              type="submit" 
               disabled={
                (countriesAdded.length && errorsToRender.duration?.[0] === false && errorsToRender.season?.length && errorsToRender.name?.[0] === false) ? false : true
              }             
          >Create activity</button>

        </form>
        <div className='Inputs-Countainer'>
          {error.message ? "error" : <Form classname="form" changeVisibility={changeVisibility} setValue={setValue} value={value} errorsToRender={errorsToRender} setErrorsToRender={setErrorsToRender} renderCheckboxError={renderCheckboxError} input={input} setInput={setInput} ischecked={ischecked} setIschecked={setIschecked}/>}
          <CountriesContainer />
        </div>
      </div>
    </>

)
}

export default Create