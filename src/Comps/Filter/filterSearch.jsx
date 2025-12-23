import React from 'react'
import style from "./filter.module.css"

export default function Filtersearch({setValue}) {
  return (
    <div>
       <div className={style.inputDiv}>
          <input onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Search here" autoComplete="off"/>
          <button className={style.buttonSubmit}>submit</button>
          </div>
    </div>
  )
}
