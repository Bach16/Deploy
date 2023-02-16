const {Country,Activity,Season} = require("../../db")

const getCountriesFromDB = async() => {
    const data = await Country.findAll({
        include:{
            model: Activity,            
        }
    })

    const db = data.map((country) =>{
        return {
            id: country.id,
            name: country.name,
            image: country.image.toString('utf8'),
            continent: country.continent,
            capital: country.capital,
            subregion: country.subregion,
            area:country.area,
            population:country.population,
            activities: country.activities?.[0]
        } 
    })
    return db
}
const getCountryByIdFromDB  = async(id) => {
    const country = await Country.findByPk(id,{
        include:{            
            model: Activity,
            include:{            
                model: Season,    
            }
        }
    })
    country.image = country.image.toString('utf8')
    return country
}

module.exports = {
    getCountriesFromDB,
    getCountryByIdFromDB,
};