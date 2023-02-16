import "./CountriesCointainer.css"
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getCountries} from "../../../redux/actions"
import SearchbarForm from "./SearchbarForm"
import ListCountries from "./ListCountries"
import AddCountries from "./AddCountries"


const CountriesContainer = () => {
    const countries = useSelector(state=>state.countries)
    const [searchResults,setSearchResults] = useState([])
    const dispatch = useDispatch()
    const [searchInput,setSearchInput] = useState(0)
    const [countriesToRender,setCountriesToRender] = useState(countries)

    useEffect(()=>{
        if(!countries.length) dispatch(getCountries())
        if(countries.length){
          setCountriesToRender(countries)
        }
    },[countries])
    
  return (
    <div className="Countries-container">
      <div className="Search-container">
       <SearchbarForm setCountriesToRender={setCountriesToRender} countriesToRender={countriesToRender} countries={countries} searchInput={searchInput} setSearchInput={setSearchInput} searchResults={searchResults} setSearchResults={setSearchResults}/>
       <ListCountries countriesToRender={countriesToRender} setCountriesToRender={setCountriesToRender} searchInput={searchInput} searchResults={searchResults}/>
      </div>
      <div className="Results-container">
        <AddCountries countries={countries}/>
      </div>
    </div>
  )
}

export default CountriesContainer