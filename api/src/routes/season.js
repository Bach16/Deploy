const express = require('express');
const {Season} = require("../db")


const seasonRouter = express.Router()

seasonRouter.get("/", async (req,res) => {
    try {
        const activities = await Season.findAll()
        res.status(200).send(activities)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

module.exports = seasonRouter;