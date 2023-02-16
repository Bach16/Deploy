import React, { useEffect, useState } from 'react'
import "./Cards.css"
import Card from "./Card"
import Pagination from './pagination/Pagination'
import { useSelector } from 'react-redux'

const Cards = ({countries}) => {
  const searchInput = useSelector(state=>state.searchInput)
  const filteredCountries = useSelector(state=>state.filteredCountries)
  const sortedCountries = useSelector(state=>state.sortedCountries)
  const inputSort = useSelector(state=>state.inputSort)


  const toRender = () => {
    if(sortedCountries.length) {
      if(filteredCountries.length && !searchInput.length) return filteredCountries
      else return sortedCountries
    } else {
      if(filteredCountries.length && !searchInput.length) return filteredCountries
      else return countries
    }
  }
  
  //-----------------------------------Pagination---------------------------------------------------
  const [countriesToRender,setCountriesToRender] = useState(toRender())
  const [perPage,setPerPage] = useState(9)
  const page = useSelector(state=>state.page)
  const max = Math.ceil(countries.length / perPage)

  const lastCardIndex = page * perPage;
  const firstCardIndex = lastCardIndex - perPage
  const currentCard =  countries.slice(firstCardIndex,lastCardIndex) 
  //-------------------------------------------------------------------------------------------------
  useEffect(()=>{
    if (page === 1) setPerPage(9)
    else setPerPage(10)
    setCountriesToRender(toRender())

  },[page,inputSort,filteredCountries,searchInput])

  return (
    <>
    <div className='cards'>
        {currentCard.map(countrie =>{
            return <Card
            key={countrie.id}
            id={countrie.id}
            image={countrie.image}
            name={countrie.name}
            continent={countrie.continent}
            />
        })}
    </div>
    <Pagination max={max}/>
    </>
  )
}

export default Cards