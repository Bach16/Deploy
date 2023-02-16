const express = require('express');
const {postActivityDB} = require("../helpers/Activities/postActivity.db")
const {getActivitiesFromDB}= require("../helpers/Activities/getActivities.db")


const activityRouter = express.Router()

activityRouter.get("/", async (req,res) => {
    try {
        const activities = await getActivitiesFromDB()
        res.status(200).send(activities)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

activityRouter.post("/", async (req,res) => {
    try {
        const activity = await postActivityDB(req.body) 
        res.status(200).send(activity)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

module.exports = activityRouter;