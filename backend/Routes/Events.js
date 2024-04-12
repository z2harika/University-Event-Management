const express = require('express');
const router = express.Router();
const Event = require("../models/Event")
router.get("/events",async (req,res)=>{
    try {
        const events = await Event.find();
        res.json(events);
      } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'An error occurred while fetching events' });
      }
})

router.get("/aEvents",async(req,res)=>{
  try {
    const acceptedEvents = await Event.find({status:'accepted'});
    res.json(acceptedEvents);
  } catch (error) {
    console.log('Error in fetching accepted Events',error);
    res.status(500).json({error:'An error occured while fetching accepted events'});
  }
})

router.get('/dEvents',async(req,res)=>{
  try{
    const declinedEvents = await Event.find({status:'declined'});
    res.json(declinedEvents);
  }
  catch(error){
    console.log("Error in fetching declined events",error);
    res.status(500).json({error:'An error occured while fetching declined events'});
  }
})


router.get('/pEvents',async(req,res)=>{
  try{
    const pendingEvents = await Event.find({status:'pending'});
    res.json(pendingEvents);
  }
  catch(error){
    console.log("Error in fetching declined events",error);
    res.status(500).json({error:'An error occured while fetching declined events'});
  }
})


router.put('/events/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
    const { status } = req.body;
  
    try {
     
      const updatedEvent = await Event.findByIdAndUpdate(eventId, { status }, { new: true });
  
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      
      res.status(200).json(updatedEvent);
    } catch (error) {
      console.error('Error updating event status:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports=router;