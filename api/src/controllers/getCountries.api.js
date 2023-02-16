const axios = require("axios");

async function getApiInfo (url= "https://restcountries.com/v3/all") {
    const apiResponse = await axios.get(url)
    return apiResponse.data
}

async function getCountriesFromApi () {
   const data = await getApiInfo()
   const response = data.map(country => {
    return{
        id:country.cca3,
        name:country.name.official,
        image:country.flags?.[1],
        continent:country.continents?.[0],
        capital:country.capital? country.capital[0] : country.name.official,
        subregion:country.subregion? country.subregion:country.name.official,
        area:country.area,
        population:country.population,                
    }
}) 
    return response
}

module.exports = {
    getApiInfo,
    getCountriesFromApi,    
};