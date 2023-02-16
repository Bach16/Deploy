import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SearchBar.css"
import {changeSearchInput} from "../../../redux/actions"

const SearchBar = () => {
  const searchInput = useSelector(state=>state.searchInput)
  const dispatch = useDispatch()

  const onChange=(e)=>{
    dispatch(changeSearchInput(e.target.value))
  }

  return (
    <div className="home-search-bar-container">
      <form >
        <input
        value={searchInput}
        placeholder='Search Country'
        type="text"
        id='home-search-bar'
        onChange={onChange}
        />
      </form>
    </div>
  )
}

export default SearchBar