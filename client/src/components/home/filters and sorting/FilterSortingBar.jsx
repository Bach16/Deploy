import React from 'react'
import "./FilterSortingBar.css"
import Sorting from "./Sort/Sorting"
import Filtrers from "./filters/Filtrers"

const FilterSortingBar = () => {
  return (
    <div className='FilterSortingBar'>
        <Filtrers/>
        <Sorting/>
    </div>
  )
}

export default FilterSortingBar