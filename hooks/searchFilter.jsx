import { useEffect, useState } from "react";
import countryList from "../src/Data/countryList";

export const AllSearchFilter=(inputValue)=>{
    const [searchFilter, setSearchFilter]=useState([countryList]);
    useEffect(()=>{
      countryList.filter(f => {
        let convertLower = f.name?.common.toLowerCase().replaceAll(' ', '');
        setSearchFilter(convertLower.includes(inputValue))
      })
    }, [searchFilter])
    return [searchFilter];
}