const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  clubName: { type: String, required: true },
  eventName: { type: String, required: true },
  eventDescription: { type: String, required: true },
  venue: { type: String, required: true },
  participants: { type: Number, required: true },
  date: { type: Date, required: true },
  timeIn: { type: String, required: true },
  timeOut: { type: String, required: true },
  refreshments: { type: String, enum: ['yes', 'no'], required: true },
  refreshmentsDescription: { type: String },
  status: { type: String, enum: ['success', 'pending', 'denied'], default: 'pending' }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
