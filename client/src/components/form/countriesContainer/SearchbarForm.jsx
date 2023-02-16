import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SearchbarForm.css"
import {changeFormInput,changeInputLength} from "../../../redux/actions"

const SearchbarForm = ({countriesToRender,setSearchResults,}) => {
    
  const formInput = useSelector(state=> state.formInput)
  const dispatch = useDispatch()
  const onChange = (e)=> {
      dispatch(changeFormInput(e.target.value))
      dispatch(changeInputLength(e.target.value.length))
      if(!e.target.value) return setSearchResults([])
      let resultsArray = countriesToRender.filter(country=>country.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchResults(resultsArray)
  }
  return (
    <div>
        <form >
            <input
              value={formInput}
              className='search_input'
              placeholder='Search Country'
              type="text"
              id='search'
              onChange={onChange}
            />
        </form>
    </div>
  )
}

export default SearchbarForm