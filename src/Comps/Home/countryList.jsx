import React, { useEffect, useState } from 'react'
import countryList from '../../Data/countryList'
import styles from "./countryList.module.css"
import Eachcomp from './eachComp';
import { IndividualCountry } from '../Individual/individualCountry';
import EmptyComp from '../Misc/Error';
import Shimmer from './Shimmer';
import axios from 'axios';
import { Link } from 'react-router';
import { AllSearchFilter } from '../../../hooks/searchFilter';
export default function Country({ inputValue, setLength }) {
  const [allCountry, setAllCountry]=useState([])
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region')
    .then(t=>{
      setAllCountry(t.data)
    },)
  }, [])
  


  // let listArray = countryList.filter(f => {
  //   const Region=(f.region.replaceAll(' ', ''))

  //   // console.log(Region==inputValue);


  //   console.log(Region.includes(inputValue));
  //   return Region.includes(inputValue);
    
  // })
  
  let listArray = countryList.filter(f => {
  const countryName = f.name?.common?.toLowerCase().replaceAll(' ', '') ?? '';
const regionName = f.region?.toLowerCase().replaceAll(' ', '') ?? '';
return countryName.includes(inputValue) || regionName.includes(inputValue);

  })



  
  listArray.length == 0 ? setLength(true) : setLength(false)



  return !allCountry.length ? (
  <Shimmer /> )
: (
      <div className={styles.topHead}>
        {listArray.map((c, i) => (
          <div className={styles.innerMap} key={i}>{
              listArray.length == 0 ? <EmptyComp /> : <Eachcomp children={i} key={i} img={c.flags.png} alt={c.flags.alt} country={c.name.common} population={c.population} area={c.area} region={c.region} />
            }
            {/* <Link to={`country/${c.name.common}`} className={styles.seeMore} state={{countryName: c.name.common, index: i}}>See More</Link> */}
            <Link to={`./country/${c.name.common}`} className={styles.seeMore} state={c}>See More</Link>
          </div>
        ))}
      </div>
      )
}