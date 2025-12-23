import React from 'react'
import style from "./IndiShimmer.module.css"

export default function IndiShimmer() {
  const arr=new Array(5).fill(undefined);
  return (
    <>
    {
      arr.map((m, i)=>(
        <h1 className={style.title} key={i}></h1>
      ))
    }
    </>
  )
}
