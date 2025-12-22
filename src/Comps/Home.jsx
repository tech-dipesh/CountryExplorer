// Home.jsx (new file - this is your current App.jsx content)
import Country from './Comps/Home/countryList'
import Filter from "./Comps/Filter/filter"
import { useState } from 'react'

const Home = () => {
    const [value, setValue] = useState("");
    const [length, setLength] = useState(false);
    
  return (
    <main>
      <Filter setValue={setValue}/>
      <Country inputValue={value} setLength={setLength}></Country>
    </main>
  )
}

export default Home