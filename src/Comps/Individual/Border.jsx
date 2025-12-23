import React, { useEffect, useState } from 'react'
import style from "./Borders.module.css"
import { Link } from 'react-router';
import axios from 'axios';
export default function Border({borders, bordersName}) {
  const [allBorderName, setBorder]=useState({})

  return (
      <div id={style.head}>
        <h1>Borders</h1>
      {bordersName && 
        bordersName.map(m=>(
          <span id={style.border} key={m}>
            <button className={style.btn}><Link state={"Hello World a state value."} to={`/country/${m}`}>{allBorderName[m] || m}</Link></button>
        </span>
        ))
      }
      </div>
  )
}
