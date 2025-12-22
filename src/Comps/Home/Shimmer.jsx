import React from 'react'
import style from "./countryList.module.css"
import styles from "./Shimmer.module.css";
import { useOutletContext } from 'react-router';
export default function Shimmer() {
  
  const [changeToggle]=useOutletContext();
  
  const arr=new Array(50).fill(undefined);
  return (
    <div className={style.topHead} id={styles.shimmer}>
    {arr.map((i, ind)=>(
      <div id={style.shimmer} className={style.topHead} key={ind}>

      </div>
    ))
  }
  </div>
  )
}