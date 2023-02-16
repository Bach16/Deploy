const {Country,Activity,Season} = require("../../db")

const PostCountriesDB = async(data) => {
    Country.bulkCreate(data)
}

module.exports = {
    PostCountriesDB,
};