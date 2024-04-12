import { Link ,useNavigate} from "react-router-dom";
import axios from '../Axios'
import { useState } from "react";
import Swal from 'sweetalert2'

function Navbar({ scrollToAbout, scrollToContact }) {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/login', {
      username,
      password
    });

    const { status, data } = response;

    if (status === 200) {
      const token = data.token;
      const role = data.role;
      
      localStorage.setItem('token', token);
    
      if (role === 'clubhead') {
        navigate("/clubhead");
      } else if (role === 'admin') {
        navigate("/admin");
      }

      window.location.reload();
    } else {
      // Handle other status codes (404, 401, etc.)
      if (status === 404) {
        Swal.fire({
          icon: "error",
          title: "User not found",
          text: "Login with correct credentials",
          confirmButtonText: "Ok",
        });
      } else if (status === 401) {
        Swal.fire({
          icon: "error",
          title: "Incorrect",
          text: "Incorrect Password",
          confirmButtonText: "Ok",
        });
      } else {
        // Handle other error cases
        console.error("Error:", response);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred. Please try again later.",
          confirmButtonText: "Ok",
        });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "An error occurred. Please try again later.",
      confirmButtonText: "Ok",
    });
  }
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor":"darkblue"}}>
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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#"
                onClick={scrollToAbout}
                style={{ color: "white" }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#"
                onClick={scrollToContact}
                style={{ color: "white" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="">
            <Link
              className="btn"
              style={{"color":"white"}}
              to="#"
              data-toggle="modal"
              data-target="#model"
            >
              Login
            </Link>
          </div>

          <div
            className="modal fade"
            id="model"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title display-7 font-weight-bold text-muted" id="exampleModalLabel">
                    Login with your credentials
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleLogin} >
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" className="form-label" style={{'fontFamily':'serif','fontSize':'20px'}}>Username</label>
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" className="form-label" style={{'fontFamily':'serif','fontSize':'20px'}}>Password</label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-secondary mb-2 mt-2">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
