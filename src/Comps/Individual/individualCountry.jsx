import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {DarklightMode} from "../../../hooks/DarkLightmode.js"

import React, { useContext, useEffect, useState } from 'react'
import style from "./individualCountry.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useParams } from 'react-router';
import NoCountry from './noCountry';
import Border from './Border';
import Shimmer from '../Home/Shimmer';
import IndiShimmer from './IndiShimmer';
import { ThemeContext } from '../../contexts/ThemeContextProvider';
export const IndividualCountry = () => {

  const getStateValue=useLocation().state;
  // location.href=`$?name={value.name?.common}`
  const getName=useParams();

  // Js Way:
  // const getCountryName=new URLSearchParams(location.search)?.get('countryname');

  // react use Param Way:
 let getCountryName=getName.country;


  const [country, setcountry] = useState({})
  const [loading, setLoading]=useState(null)
  const [currencies, setCurrencies]=useState(null)
  const [ifCountryNotFound, setIfCountryNotFound]=useState(false);
  const [bordersName, setBordersNames]=useState([])



  const setData=((data)=>{
    setcountry(data);
    setLoading(data.fifa)
      let curr=data?.currencies;
      setCurrencies((Object.values(curr)[0]))
        if (data.borders && data.borders.length > 0) {
        return axios.get(
          `https://restcountries.com/v3.1/alpha?codes=${data.borders.join(',')}&fields=name,cca3`
        );
      }
      return Promise.resolve(null);
    }) 


  useEffect(()=>{
 if(getStateValue){
  setData(getStateValue)
    .then(borderResponse => {
      if(borderResponse) {
        const names = borderResponse.data.map(country => 
          country.name.common.replaceAll(' ', '').toLowerCase()
        );
        setBordersNames(names);
      }
    })
    .catch(err => console.log('Border fetch error:', err));
  return;
}

    const url=`https://restcountries.com/v3.1/name/${getCountryName}?fullText=true`
       axios.get(url)
       .then(t=>{
            const datas=t.data[0];
            return setData(datas);
       }) 
       .then(b=>{
        if(b){
          const names = b.data.map(country => 
          country.name.common.replaceAll(' ', '').toLowerCase()
        );
        setBordersNames(names);
        }
       })
       .catch(c=>{
        console.log(c);
        setIfCountryNotFound(true);
       })
  }, [getCountryName])
  

  const [changeToggle]=DarklightMode();

  if(ifCountryNotFound==true){
    return <NoCountry/>
  }
  const {name, indepedent, unMember, capital, region, subregion, borders, area, population, fifa, timezones, flags, startOfWeek}=country;
  let nativFulleName=null, nativeCommonName=null;


  if(!loading && name?.nativeName && currencies){
    const firstValue = Object.values(name?.nativeName)[0];
    nativFulleName = firstValue.official;
    nativeCommonName = firstValue.common; 
  }

  let svg=flags?.svg, alt=flags?.alt;
  

  

  return loading===null? (
    <div className={style.loading}><IndiShimmer/></div>)
    :  (
    <main className={changeToggle ? 'dark' : ''}>
    <button onClick={()=>history.back()} id={style.backButton}><FontAwesomeIcon id={style.i} icon={faArrowLeft} />Go Backward</button>
    <h1>Country Name: {name?.common}</h1>
    <p>Official Name: {name?.official}</p>
    {
    loading &&
    <>
    <h3>Native Name: {nativFulleName || ''}</h3>  
    <h3>Native Common Name: {nativeCommonName|| ''}</h3>   
    <h3>Currency Name: {currencies.name || ''}</h3>
    <h3>Currency Symbol: {currencies.symbol || ''}</h3>
    </>
}


    <h4>Capital City: {capital || ''}</h4>
    <h3>Continent: {region}</h3>
    <p>Independenty Country: {indepedent===true?'Yes': 'NO'}</p>
    <h5>SubRegion: {subregion}</h5>
    <h4>Fifa Code: {fifa}</h4>
    <h6>Start Week: {startOfWeek}</h6>
    <h3>Area: {area}</h3>
    <h4>Population: {population}</h4>
    <p>Un Member: {unMember==true? 'Yes': 'No'}</p>
    <img id={style.image} src={svg} alt={alt} />
    <Border borders={borders} bordersName={bordersName}>{borders}</Border>
        {
          timezones.map(t=>(
            <p key={t}>TimeZone: {t}</p>
          ))
        }

        </main>
  )
}
