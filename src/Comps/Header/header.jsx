import style from "./header.module.css"
import {DarklightMode} from "../../../hooks/DarkLightmode.js"
import Logo from "../../../public/logo.png"
import { Link } from "react-router"
const ClickToggle=(changeToggle, setChangeToggle)=>{
  setChangeToggle(!changeToggle)
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", !changeToggle)
}


export default function Header() {
    const [changeToggle, setChangeToggle]=DarklightMode();
  return (
    <header id={style.header} className={changeToggle ? 'dark': ''}>
      <Link to='./'>
      <img src={Logo} alt="Logo" width="60"/>
      </Link>
      <ul>
      <li><Link to={'../Home'}>Home</Link></li>
      <li><Link to={'../contact'}>About</Link></li>
      <li><Link to={'../about'}>Contact</Link></li>
      <li><a href="/Random"><button id={style.Random}>Random</button></a></li>
      <li>Toggle: <button id={style.toggle} onClick={(()=>ClickToggle(changeToggle, setChangeToggle))}>{changeToggle?'☀️': '🌛'}</button></li>
      </ul>
    </header>
  )
}