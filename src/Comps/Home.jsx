import Country from './Home/countryList'
import Filter from "./Filter/filter"
import { useContext, useState } from 'react'
import {DarklightMode} from "../../hooks/DarkLightmode.js"
import { ThemeContext } from '../contexts/ThemeContextProvider';

const Home = () => {
  const override=useContext(ThemeContext)
    const [input, setInput] = useState("");
    const [region, setRegion]=useState("");


    const [length, setLength] = useState(false);

    const [changeToggle]=DarklightMode();
  return (
    <main className={changeToggle?'dark': ''}>
      <Filter allInput={[setInput, setRegion]}/>
      <Country  inputValue={input || region} setLength={setLength}></Country>
    </main>
  )
}

export default Home