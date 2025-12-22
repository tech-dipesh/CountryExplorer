import './App.css'
import Country from './Comps/Home/countryList'
 import Filter from "./Comps/Filter/filter"
import { useState } from 'react'

 const App=()=>{
    const [value, setValue]=useState("");
    const [length, setLength]=useState(false);
    
  return (
    <main>
      <Filter setValue={setValue}/>
      {/* {length==false?  <Country inputValue={value} setLength={setLength}/>: <EmptyComp/>} */}
      <Country inputValue={value} setLength={setLength}></Country>
   </main>
  )
}

export default App
