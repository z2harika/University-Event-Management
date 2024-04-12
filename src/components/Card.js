import React, { useState, useEffect } from 'react';
import axios from '../Axios';

export default function Card() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchedEvents();
  }, []);

  const fetchedEvents = async () => {
    try {
      const response = await axios.get('/aEvents');
      setEvents(response.data);
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {events.map(event => (
          <div key={event._id} className="col-lg-4 mb-4">
            <div className="card bg-light border-secondary">
              <div className="card-body">
                <h5 className="card-title text-secondary">
                  <span className='display-6'>{event.eventName}</span> 
                </h5>
                <p className="card-text"><strong>Club Name:</strong> {event.clubName}</p>
                <p className="card-text"><strong>Venue:</strong> {event.venue}</p>
                <p className="card-text"><strong>Date:</strong> {event.date}</p>
                <p className="card-text"><strong>Time:</strong> {event.timeIn} - {event.timeOut}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
