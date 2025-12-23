import style from "./option.module.css"
import {ConvertedObject} from "../../../hooks/firstIndexObject.js"
export default function Selectoption({setRegion}) {
  return (
    <>
    <select id={style.select} onChange={((e)=>{setRegion(e.target.value)})}>
        <option hidden defaultValue=''>Choose Continent</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Australia & Oceania</option>
        <option value="Americas">America</option>
      </select>
    </>
  )
}
