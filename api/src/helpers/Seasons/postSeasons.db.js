const {Season} = require("../../db")


const postSeasonsDB  = async(data = [{name:"spring"},{name:"summer"},{name:"fall"},{name:"winter"}]) => {
    const country = await Season.bulkCreate(data)
    return country
}

module.exports = {
    postSeasonsDB,
};