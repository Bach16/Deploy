const express = require('express');
const {getCountriesFromDB,getCountryByIdFromDB} = require("../helpers/Countries/getCountries.db")
const axios = require("axios");


const countryRouter = express.Router()

countryRouter.get("/", async (req,res) => {
    try {
        const {name} = req.query
         if (Object.keys(req.query).length) { // Get country by name
            if (!name) {
                const data = await getCountriesFromDB()
                console.log(data[0]);
                res.status(200).send(data)
            }else{
                throw new Error("Pokemon not found")
            } 
        } else { // Get all countries
            const db = await getCountriesFromDB()
            res.status(200).send(db)
        }
    }catch (error) {
        res.status(400).send({error:error.message})
    }
})

countryRouter.get("/:id", async (req,res) => {
    try {
        const {id} = req.params
        if(id.length) { //Get country by id
            const response = await getCountryByIdFromDB(id)
            if (response) res.status(200).send(response)
            else throw new Error("Pokemon not found")
        } else {
            throw new Error("Missing id")
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}) 


module.exports = countryRouter