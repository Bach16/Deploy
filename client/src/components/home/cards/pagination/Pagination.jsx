import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./pagination.css"
import {changePage} from "../../../../redux/actions"

const Pagination = ({max}) => {
    const page = useSelector(state=>state.page)
    const dispatch = useDispatch()
    const [input,setinput] = useState(1)
    const nextPage = ()=>{
        setinput(parseInt(input)+1)
        dispatch(changePage(parseInt(page)+1))
    }
    const prevPage = ()=>{
        setinput(parseInt(input)-1)
        dispatch(changePage(parseInt(page)-1))
    }


  return (
    <div>
      <div className="Pagination">
          {page > 1 ? <button onClick={prevPage}>{"<"}</button> : null}
          <p>{page} of {max}</p>
          {page < max ? <button  onClick={nextPage}>{">"}</button> : null}
      </div>    
    </div>
  )
}

export default Pagination