import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getCountry,resetCountryDetails} from "../../redux/actions"
import Loading from '../home/loading/Loading'
import NavBar from '../navBar/NavBar'
import Activity from "./Activity"
import "./Detail.css"

const Detail = (props) => {
  const dispatch = useDispatch()
  const country = useSelector(state=>state.country)
  useEffect(()=>{
    dispatch(resetCountryDetails())
    dispatch(getCountry(props.match.params.id))
  },[])
  if(country.id){
    return (
      <>
      <div className='detail'>

      <NavBar/>
      <div className='detail-country-card-container'>
        <div className='detail-country-card'>
          <div className='detail-image-div'>
            <div className='detail-image-container'>            
              <img src={country.image} alt="flag"/>
            </div>
            <h1>{country.name}</h1>
          </div>
          <div className='detail-text-container'>
            <div className='detail-text'>
              <p>Continent: {country.continent}</p>
              <p>Capital: {country.capital}</p>
              <p>Subregion: {country.subregion}</p>
            </div>     
          <div className='detail-text'>
            <p>Area: {country.area} km</p>
            <p>Population: {country.population}</p>
          </div>     
        </div>
      </div>
        {country.activities.length ? 
        <>        
        <h1>Activities:</h1>
        <div className='activity-container'>
          {country.activities.map(a=><Activity
            name={a.name}
            key={a.id}
            difficulty={a.difficulty}
            duration={a.duration}
            seasons={a.seasons}  
          />)}
        </div>
        </>
        
        : null}
      </div>
      </div>
      </>
      
    )
  }else{
    return(
      <Loading/>
    )
  }
}

export default Detail