import React from 'react'
import "./Checkbox.css"
const Checkbox = ({id,render,setIschecked,errorsToRender,setErrorsToRender,renderCheckboxError,ischecked,input,setInput,...props}) => {

  const findingErrorCheckbox = (id,season)=>{
    if(season) return [id,...season]
    else return[id]
  }
  const onChange = (e) => {   
    setIschecked({ ...ischecked,
      [render]:e.target.checked
    })
    setInput({
      ...input,
      season:e.target.checked?[...input.season,id]:input.season.filter((i)=>i !== e.target.id)
  })  
  setErrorsToRender({...errorsToRender,season:e.target.checked?findingErrorCheckbox(id,errorsToRender.season):errorsToRender.season.filter((i)=>i !== e.target.id)})       

  }
  
  return (
    <div className='checkbox'>
      <input value={ischecked[render]} id={id} {...props}  checked={ischecked[id]} onChange={onChange}/>
      <label>{render}</label>
    </div>
  )
}

export default Checkbox