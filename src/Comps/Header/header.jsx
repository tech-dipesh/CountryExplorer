import style from "./header.module.css"
import {useDarklightMode} from "../../../hooks/DarkLightmode"
import Logo from "../../assets/logo.png"
import { Link } from "react-router"
import DarkThemeContextProvider, { ThemeContext } from "../../contexts/ThemeContextProvider"
import { useContext } from "react"
const ClickToggle=(changeToggle, setChangeToggle)=>{
  setChangeToggle(!changeToggle)
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", !changeToggle)
}

export default function Header() {
    const [changeToggle, setChangeToggle]=useContext(ThemeContext);
  return (
    <header id={style.header} className={changeToggle ? 'dark': ''}>
      <Link to='./'>
      <img src={Logo} alt="Logo" width="60"/>
      </Link>
      <ul>
      <li><Link to={'../Home'}>Home</Link></li>
      <li><Link to={'../about'}>About</Link></li>
      <li><Link to={'../contact'}>Contact</Link></li>
      <li><Link to="/Random"><button id={style.Random}>Random</button></Link></li>
      <li>Toggle: <button id={style.toggle} onClick={(()=>ClickToggle(changeToggle, setChangeToggle))}>{changeToggle?'☀️': '🌛'}</button></li>
      </ul>
    </header>
  )
}