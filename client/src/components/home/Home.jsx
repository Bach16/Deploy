import React, { useEffect, useState } from 'react'
import {getCountries} from "../../redux/actions"
import {useSelector, useDispatch} from "react-redux"
import Cards from "./cards/Cards"
import NavBar from "../navBar/NavBar"
import Loading from "./loading/Loading"
import "./Home.css"
import NotFound from "./NotFound"
import FilterSortingBar from "./filters and sorting/FilterSortingBar"


const Home = () => {
  let dispatch = useDispatch()
  //--------------------------------------States------------------------------------------
  const [render,setRender]= useState([])
  const countries = useSelector(state => state.countries)
  const searchInput = useSelector(state=>state.searchInput)
  const filteredCountries = useSelector(state=>state.filteredCountries)
  const activityInput= useSelector(state=>state.filterInputs.byActivity)
  const continentInput= useSelector(state=>state.filterInputs.byContinent)

  //--------------------------------------------Functions----------------------------------
  const searchByName=()=>{
    if(filteredCountries.length &&(activityInput.length || continentInput.length)) {
      return filteredCountries.filter(country=>country.name.toLowerCase().includes(searchInput.toLowerCase()))
    } else {
      return countries.filter(country=>country.name.toLowerCase().includes(searchInput.toLowerCase()))
    } 
  }
  
  //-----------------------------------------------UseEffect-------------------------------
  useEffect(()=>{
    if(!countries.length) dispatch(getCountries())
    setRender(searchByName())    
  },[searchInput])
 //-----------------------------------------------------------------------------------------
 
  if(!countries.length){
    return(
      <Loading/>
    )
  }
  if (filteredCountries.length &&(activityInput.length || continentInput.length)) {
    return (
      <div className='home'>
        <NavBar searchBar={true}/>
        <FilterSortingBar/>
        <Cards countries={filteredCountries}/>
      </div>
    )

  }

  if((searchInput.length&&!render.length) || (activityInput.length&&!render.length) || (continentInput.length&&!render.length) ) {
    return (
    <div className='home'>
      <NavBar searchBar={true}/>
      <FilterSortingBar/>
      <NotFound search_Input={true}/>
    </div>
  )
  } else if (searchInput.length && render.length) {
    return (
      <div className='home'>
        <NavBar searchBar={true}/>
        <FilterSortingBar/>
        <Cards countries={render}/>
      </div>
    )

  } else {
    return (
      <div className='home'>
        <NavBar searchBar={true}/>
        <FilterSortingBar/>
        <Cards countries={countries}/>
      </div>
    )
  }
}

export default Home