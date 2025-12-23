import React from 'react'
import style from "./filter.module.css"
import Filtersearch from './filterSearch'
import Selectoption from './Select-Option'
export default function Filter({allInput}) {
  const [setInput, setRegion]=allInput
  return (
    <div id={style.filter}>
      <Filtersearch setValue={setInput}/>
      <Selectoption setRegion={setRegion}/>
    </div>
  )
}