import React, { useState, useEffect } from "react";
import axios from "../Axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
export default function Admin() {
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchedEvents();
  }, []);

  const fetchedEvents = async () => {
    try {
      const response = await axios.get("/events");
      setEvents(response.data);
    } catch (error) {
      console.log("Error in fetching events", error);
    }
  };

  const handleAccept = async (eventId) => {
    try {
      await axios.put(`/events/${eventId}`, { status: "accepted" });
      Swal.fire({
        icon: "success",
        title: "ACCEPTED",
        text: "Event Registered Successfully !!",
        confirmButtonText: "Ok",
      });
      fetchedEvents();
    } catch (error) {
      console.log("Error accepting event", error);
    }
  };

  const handleDecline = async (eventId) => {
    try {
      await axios.put(`/events/${eventId}`, { status: "declined" });
      Swal.fire({
        icon: "error",
        title: "DECLINED",
        text: "Event Declined !",
        confirmButtonText: "Ok",
      });
      fetchedEvents();
    } catch (error) {
      console.log("Error decling event", error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor":'darkblue'}}>
        <Link
          className="navbar-brand mx-3"
          to="#"
          style={{ color: "white"}}
        >
          UEMS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#" style={{ color: "white" }}>
                Events <span className="sr-only"></span>
              </Link>
            </li>
            <div className="">
              <Link className="btn" style={{"color":"white"}} onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="container">
          <h2
            className="display-4 font-weight-bold text-muted"
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            PENDING EVENTS
          </h2>
        </div>
        <div className="row">
          {events.map((event) => (
            <div key={event._id} className={`col-lg-4 mb-4 ${events.length === 1 ? 'offset-lg-4' : ''}`}>
              {event.status === "pending" && (
                <div className="card bg-light border-secondary">
                  <div className="card-body">
                    <h4 className="card-title text-secondary display-6">
                      <strong>{event.eventName}</strong>
                    </h4>
                    <p className="card-text">
                      <strong>Club Name:</strong> {event.clubName}
                    </p>
                    <p className="card-text">
                      <strong>Description:</strong> {event.eventDescription}
                    </p>
                    <p className="card-text">
                      <strong>Venue:</strong> {event.venue}
                    </p>
                    <p className="card-text">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="card-text">
                      <strong>Time:</strong> {event.timeIn} - {event.timeOut}
                    </p>
                    <button
                      style={{ margin: "5px" }}
                      className="btn btn-success mr-2"
                      onClick={() => handleAccept(event._id)}
                    >
                      Accept
                    </button>
                    <button
                      style={{ margin: "5px" }}
                      className="btn btn-danger"
                      onClick={() => handleDecline(event._id)}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
