import React from 'react'

export default function Eachcomp(props) {
  const {img, country, population, area, region}=props;
  return (
    <>
    <img src={img} alt={props?.alt}/>
    <h1> Country: {country}</h1>
    <p>Population: {population}</p>
    <p>Area: {area} sq.km.</p>
    <p>Region: {region} </p>
    </>
  )
}
