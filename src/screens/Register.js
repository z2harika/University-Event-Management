import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Axios";
function Register() {
  const [formData, setFormData] = useState({
    clubName: "",
    eventName: "",
    eventDescription: "",
    venue: "",
    participants: "",
    date: "",
    timeIn: "",
    timeOut: "",
    refreshments: "no",
    refreshmentsDescription: "",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRefreshmentsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      refreshmentsDescription:
        value === "yes" ? "" : prevState.refreshmentsDescription,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your submit logic goes here
    // You can access form data using formData state
    console.log(formData);
    try {
      const response = await axios.post("/submitEvent", formData);
      if (response.status === 201) {
        console.log("Form successfully submitted");
        setFormData({
          clubName: "",
          eventName: "",
          eventDescription: "",
          venue: "",
          participants: "",
          date: "",
          timeIn: "",
          timeOut: "",
          refreshments: "no",
          refreshmentsDescription: "",
        });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Request sent successfully",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.error("Failed to submit form");
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to submit form",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "darkblue" }}
      >
        <Link className="navbar-brand mx-3" to="#" style={{ color: "white" }}>
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
                style={{ color: "white" }}
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div>
          <h2
            className="display-4 font-weight-bold text-secondary"
            style={{ margin: "20px", textAlign: "center" }}
          >
            REGISTER AN EVENT
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label
              htmlFor="clubName"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Club Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="clubName"
              name="clubName"
              value={formData.clubName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="eventName"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Event Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="eventDescription"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Event Description
            </label>
            <textarea
              className="form-control mb-2"
              id="eventDescription"
              name="eventDescription"
              rows="3"
              value={formData.eventDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label
              htmlFor="venue"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Venue
            </label>
            <select
              className="form-control mb-2"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
            >
              <option value="">Select Venue</option>
              <option value="Venue1">Venue 1</option>
              <option value="Venue2">Venue 2</option>
              <option value="Venue3">Venue 3</option>
            </select>
          </div>
          <div className="form-group">
            <label
              htmlFor="participants"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Number of Participants
            </label>
            <input
              type="number"
              className="form-control mb-2"
              id="participants"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="date"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Date
            </label>
            <input
              type="date"
              className="form-control mb-2"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="timeIn"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Time In
            </label>
            <input
              type="time"
              className="form-control mb-2"
              id="timeIn"
              name="timeIn"
              value={formData.timeIn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="timeOut"
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Time Out
            </label>
            <input
              type="time"
              className="form-control mb-2"
              id="timeOut"
              name="timeOut"
              value={formData.timeOut}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label
              className="form-label"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              {" "}
              Refreshments
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="refreshments"
                id="refreshmentsYes"
                value="yes"
                checked={formData.refreshments === "yes"}
                onChange={handleRefreshmentsChange}
              />
              <label className="form-check-label" htmlFor="refreshmentsYes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input mb-2"
                type="radio"
                name="refreshments"
                id="refreshmentsNo"
                value="no"
                checked={formData.refreshments === "no"}
                onChange={handleRefreshmentsChange}
              />
              <label className="form-check-label" htmlFor="refreshmentsNo">
                No
              </label>
            </div>
          </div>
          {formData.refreshments === "yes" && (
            <div className="form-group">
              <label
                htmlFor="refreshmentsDescriptionInput"
                className="form-label"
                style={{ fontFamily: "serif", fontSize: "20px" }}
              >
                Refreshments Description
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="refreshmentsDescriptionInput"
                name="refreshmentsDescription"
                value={formData.refreshmentsDescription}
                onChange={handleChange}
              />
            </div>
          )}

          <button type="submit" className="btn btn-secondary mb-3 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
