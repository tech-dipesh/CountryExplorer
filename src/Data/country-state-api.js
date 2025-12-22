const response = await fetch('https://api.countrystatecity.in/v1/countries', {
  headers: { 'X-CSCAPI-KEY': 'WVQ0UGpjTHlFT25IelA0OEJTWWkyaFd1ejFqRnQzNjFjYkNBeEt5Tw==' }
});

const countries = await response.json();
console.log(countries);