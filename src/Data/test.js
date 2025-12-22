import countryList from "./countryList.js";
// console.log(countryList);
const first10=countryList.slice(0, 25);


// console.log(first10);
let value=first10.findIndex(f=>{
  return f.population==2540916;
})

let search=("Nami").toLowerCase().replaceAll(' ', '');


const Filter=first10.filter(f=>{
 let fa=f.name.common.toLowerCase().replaceAll(' ', '');
  return fa.includes(search)
})



const list={
    "name": {
      "common": "Estonia",
      "official": "Republic of Estonia",
      "nativeName": {
        "est": {
          "official": "Eesti Vabariik",
          "common": "Eesti"
        }
      }
    }
  }
  const native=list.name.nativeName;
  console.log(Object.values(native)[0].common.toLowerCase());
  console.log(list.name.nativeName);



  

{/* {sliceFirst10.map((s) => (
  <li >{s.name.common}</li>
))} */}
  


{/* //   // Showing homepage, flag, name, population, area, region. */}
// /* // List:  <h1>Country: {Nepal.name.common}</h1>, <h2>Capital: {Nepal.capital[0]}</h2>, <h2>Languages: {Nepal.languages?.nep}</h2>,    <h2>Area: {Nepal.area}</h2>,   <h2>Population: {Nepal.population}</h2>,    <h2>{Nepal.flags.png}</h2>,   <img src={Nepal.flags.png} alt={Nepal.flags.alt} />,  <button>See More</button>, {Nepal.capital}</h1>