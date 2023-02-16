import React from 'react'
import FormImput from "./FormInput"
import "./Form.css"
import CheckboxContainer from "./CheckboxContainer"
import RangeInputs from "./RangeInputs"

const Form = ({setInput,changeVisibility,value,setValue,input,renderCheckboxError,setErrorsToRender,errorsToRender,ischecked,setIschecked}) => {

  //----------------------Error--Functions--------------------------------------------------
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*£[()_+\/-=\]{};':"\-\|,.<>?~]/;
    return specialChars.test(str);
  }

  function moreThan7Hours(num) {
    if(num>0 && num<8) return false
    else return true
  }
  const numberErrorFinder = (num) => {
    let error = false
    if(!num.length || moreThan7Hours(num)) error = true
    else error = false
    return error
  }

  const errorsFinder = (input,type) => {
    let error = false
    if (input.length && type === "text"){
      if (!isNaN(input) || containsSpecialChars(input)) {
        error = true      
      }
      
    } else if (input.length && type === "number"){      
      error = numberErrorFinder(input) 
    }else error = true   
    return error
  } 
  //---------------------------------------------------------------------  

  const inputs = [
    {
        id:1,
        name:"name",
        type:"text",
        placeholder:"Name",
        errorMessage:"Name required, it shouldn't include any special character",
        label:"Name",
    },
    {
      id:3,
      name:"duration",
      type:"number",
      min:"0",
      max:"7",
      placeholder:"Duration in hours",
      errorMessage:"Duration required, it shouldn't be more than 7 hours",
      label:"Duration",
      }
  ]
  const onChange = (e) => {   
    setInput({
      ...input,
      [e.target.name]:e.target.value            
  })
    setErrorsToRender({...errorsToRender,[e.target.name]:[errorsFinder(e.target.value,e.target.type)]}) 
  }
  return (
    <>
      <div className='formContainer'>
            <div className='inputsContainer'>
              {inputs.map(i=> (
                <FormImput
                  key={i.id} 
                  {...i} 
                  changeVisibility={changeVisibility}
                  value={input[i.name]} 
                  onChange ={(e)=>onChange(e)}   
                  errorsToRender= {errorsToRender}      
                />
              ))}
              <RangeInputs
              value={value}
              setValue={setValue}
              setInput={setInput}
              input={input}/>
              <label>Seasons</label>
            </div>
              <CheckboxContainer
              ischecked={ischecked}
              setIschecked={setIschecked}
              setInput={setInput}
              input={input}
              errorMessage="Season required"
              renderCheckboxError={renderCheckboxError}
              setErrorsToRender={setErrorsToRender}
              errorsToRender={errorsToRender}
              />
      </div>      
    </>
  )
}

export default Form