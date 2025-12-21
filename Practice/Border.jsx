    // return https://restcountries.com/v3.1/alpha?codes=np&fields=name,cca3

  //   useEffect(()=>{
  //     const borderJoin=borders.join(',')
  //     axios.get(`https://restcountries.com/v3.1/alpha?codes=${borderJoin}&fields=name,cca3`)
  //     .then(t=>{
  //       // console.log(t.data);
  //       let data=t.data[0];
  //       console.log(data);
  //       let allObjets={};
  //       let countryCode=t.cca3;
  //       let countryName=data.name.common.replaceAll(' ', '').toLowerCase();
  //       allObjets[countryCode]=countryName
  //       setBorder(allObjets)
  //     })
  //     .catch(console.error)
  // }, [])