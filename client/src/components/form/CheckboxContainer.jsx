import React from 'react'
import { useEffect } from 'react'
import Checkbox from "./Checkbox"
import "./CheckboxContainer.css"
import { useDispatch, useSelector } from 'react-redux'

const CheckboxContainer = ({setIschecked,setErrorsToRender,errorsToRender,renderCheckboxError,errorMessage,ischecked,setInput,input}) => {
  //------------------------------------------States--------------------------------------
  const seasons = useSelector(state=>state.seasons)
  const dispatch= useDispatch()
  //-------------------------------------------Array-------------------------------------------------  

  let seasonsInput = [
        {
          key:1,
          id:seasons[0]?.id,
          render:seasons[0]?.name,
          type:"checkbox",
          name:"season",
        },
        {
          key:2,
          id:seasons[1]?.id,
          render:seasons[1]?.name,
          type:"checkbox",
          name:"season",
        },
        {
          key:3,
          id:seasons[2]?.id,
          render:seasons[2]?.name,
          type:"checkbox",
          name:"season",
        },
        {
          key:4,
          id:seasons[3]?.id,
          render:seasons[3]?.name,
          type:"checkbox",
          name:"season",
        }    
      ]
  //---------------------------------------Functions----------------------------------------------  
  const getIdSeasons=(seasons)=>{
    for (let i = 0; i < seasonsInput.length; i++) {
      seasons.map(e=>{
        if(seasonsInput[i].id.length>10) return
        else seasonsInput[i].id = e.id        
      })
    }
  }
  //----------------------------------------UseEffect----------------------------------------------
    useEffect(()=>{
      getIdSeasons(seasons)
      renderCheckboxError()
    },[ischecked])
  
  return (
    <div className='seasonInput'>
        {seasonsInput.map(e=>(
            <Checkbox
            ischecked={ischecked}
            setIschecked={setIschecked}
            setInput={setInput}
            input={input}
            setErrorsToRender={setErrorsToRender}
            errorsToRender={errorsToRender}
            {...e}
            />
        ))}
        <span id='checkbox-error-text'>{errorMessage}</span>
    </div>

  )
}

export default CheckboxContainer