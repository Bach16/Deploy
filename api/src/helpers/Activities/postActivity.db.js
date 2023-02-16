const {Activity} = require("../../db")

const postActivityDB = async(data) => {
    const post = {
        name:data.name,
        difficulty:data.difficulty,
        duration:data.duration
    }
    const newActivity = await Activity.create(post);
    await newActivity.addSeason(data.season)
    return newActivity.addCountry(data.countries)
}

module.exports = {
    postActivityDB,
};