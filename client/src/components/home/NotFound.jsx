import React from 'react'
import { useSelector } from 'react-redux'
import "./NotFound.css"

const NotFound = ({search_Input}) => {
  const searchInput = useSelector(state=> state.searchInput)
  return (
    <div className='not-found'>
        <h1>Sorry</h1>
        <p>We couldn't find a result {search_Input ? ("for "  + {searchInput}): null} </p>
    </div>
  )
}

export default NotFound