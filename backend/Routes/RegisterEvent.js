const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
router.post("/submitEvent",async (req,res)=>{
    try {
        const eventData = req.body;
        eventData.status='pending';
        const newEvent = new Event(eventData);
        await newEvent.save();
        res.status(201).json({message:"Event submitted successfully"});
    } catch (error) {
        console.log("Error submitting event :",err);
        res.status(500).json({message:"Error occurred while submitting an event"})
    }

})
module.exports=router;