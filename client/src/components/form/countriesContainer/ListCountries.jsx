import React from 'react'
import { useSelector } from 'react-redux'
import Result from "./Result"

const ListCountries = ({searchResults,countriesToRender,setCountriesToRender}) => {

  let counter = 0
  const searchInputLength = useSelector(state=> state.searchInputLength)

  if(searchInputLength && searchResults?.length) {
    return(
    searchResults.map(r => <Result key={counter++} id={r.id} result={r} countriesToRender={countriesToRender} setCountriesToRender={setCountriesToRender}/>)
    )
  }else if (searchInputLength && !searchResults?.length){
    return <h2>Country not found</h2>
  } else {
    return null
  }

}

export default ListCountries