import style from "./header.module.css"
import {DarklightMode} from "../../../hooks/DarkLightmode.js"

const ClickToggle=(changeToggle, setChangeToggle)=>{
  setChangeToggle(!changeToggle)
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", !changeToggle)
}


export default function Header() {
    const [changeToggle]=DarklightMode();

  // let getLocalStorage=JSON.parse(localStorage.getItem("theme"));
  // console.log(getLocalStorage);

  // changeToggle===true?document.body.classList.add("dark"):document.body.classList.remove("dark");



  return (
    // <header id={style.header} className={changeToggle? 'dark': ''}>
    <header id={style.header} className={changeToggle ? 'dark': ''}>
      <ul>
      {/* <Link to=''>Home</Link> */}
      <li><a href="../home">Home</a></li>
      <li><a href="../about">About</a></li>
      <li><a href="./contact">Contact</a></li>
      <li><a href="/Random"><button id={style.Random}>Random</button></a></li>
      <li>Toggle: <button id={style.toggle} onClick={(()=>ClickToggle(changeToggle, setChangeToggle))}>{changeToggle?'☀️': '🌛'}</button></li>
      </ul>
    </header>
  )
}