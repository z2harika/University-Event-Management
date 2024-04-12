import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "../Axios";

export default function Clubhead() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        let response;
        if (filter === "accepted") {
          response = await axios.get("/aEvents");
        } else if (filter === "declined") {
          response = await axios.get("/dEvents");
        } else if (filter === "pending") {
          response = await axios.get("/pEvents");
        } else {
          response = await axios.get("/events");
        }
        setEvents(response.data);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchedData();
  }, [filter]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " style={{"backgroundColor":"darkblue"}}>
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
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/clubhead/register"
                style={{ color: "white" }}
              >
                Register<span className="sr-only"></span>
              </Link>
            </li>
            <div className="">
              <Link
                className="btn"
                style={{"color":"white"}}
                onClick={handleLogout}
                
              >
                Logout
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="container">

        <h2 className='display-4 font-weight-bold text-muted' style={{"marginBottom":"20px","marginTop":"20px","textAlign":"center"}}>EVENTS</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="filter"className="form-label" style={{'fontFamily':'serif','fontSize':'20px'}}>Filter</label>
              <select
                className="form-control mb-2"
                id="filter"
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
              >
                <option value="">All</option>
                <option value="accepted">Accepted</option>
                <option value="declined">Declined</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          {events.map((event) => (
            <div key={event._id} className="col-lg-4 mb-4">
              <div className="card bg-light border-secondary">
                <div className="card-body">
                  <h5 className="card-title text-secondary display-6">{event.eventName}</h5>
                  <p className="card-text">
                    <strong>Club Name:</strong> {event.clubName}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
