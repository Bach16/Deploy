const {Country,Activity} = require("../../db")

const getActivitiesFromDB = async() => {
    const data = await Activity.findAll({
        include:{
            model: Country,            
        }
    })
    return data
}

module.exports = {
    getActivitiesFromDB,    
};