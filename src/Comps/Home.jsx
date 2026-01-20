import Country from './Home/countryList'
import Filter from "./Filter/filter"
import { useState } from 'react'
import {useDarklightMode} from "../../hooks/DarkLightmode.js"
import { ThemeContext } from '../contexts/ThemeContextProvider';

const Home = () => {
    const [input, setInput] = useState("");
    const [region, setRegion]=useState("");

    const [length, setLength] = useState(false);

    const [changeToggle]=useDarklightMode();
  return (
    <main className={changeToggle?'dark': ''}>
      <Filter allInput={[setInput, setRegion]}/>
      <Country  searchValue={input} regionValue={region} setLength={setLength}></Country>
    </main>
  )
}

export default Home