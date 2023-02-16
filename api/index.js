//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getCountriesFromApi} = require("./src/controllers/getCountries.api")
const {PostCountriesDB} = require("./src/helpers/Countries/postCountries.db")
const {postSeasonsDB} = require("./src/helpers/Seasons/postSeasons.db")
require("dotenv").config()


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async() => {
    const data = await getCountriesFromApi()   
    PostCountriesDB(data)
    postSeasonsDB()

    console.log('%s listening at ', process.env.PORT); // eslint-disable-line no-console
  });
});
