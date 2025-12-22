import React, { useEffect, useState } from 'react'
import style from "./header.module.css"
import { Link } from 'react-router-dom'
// 🌛

const ClickToggle=(changeToggle, setChangeToggle)=>{
  setChangeToggle(!changeToggle)
  // changeToggle===true?document.documentElement.setAttribute('theme-toggle', 'light'): document.documentElement.setAttribute('theme-toggle', 'dark');

  document.body.classList.toggle("dark");
  console.log(document.body.getAttribute("classList"));

  localStorage.setItem("theme", !changeToggle)
  console.log(localStorage.getItem("theme"));
  console.log(JSON.parse(localStorage.getItem("theme")));
}


export default function Header() {
  // let getLocalStorage=JSON.parse(localStorage.getItem("theme"));
  // console.log(getLocalStorage);
  const [changeToggle, setChangeToggle]=useState(true)

  changeToggle===true?document.body.classList.add("dark"):document.body.classList.remove("dark");



  return (
    <div id={style.header}>
      <ul>
      {/* <Link to=''>Home</Link> */}
      <li><a href="../home">Home</a></li>
      <li><a href="../about">About</a></li>
      <li><a href="./contact">Contact</a></li>
      <li><a href="/Random"><button id={style.Random}>Random</button></a></li>
      <li>Toggle: <button id={style.toggle} onClick={(()=>ClickToggle(changeToggle, setChangeToggle))}>{changeToggle?'☀️': '🌛'}</button></li>
      </ul>
    </div>
  )
}


