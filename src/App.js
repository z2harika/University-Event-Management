import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from './screens/Home';
import Register from './screens/Register';
import Admin from './screens/Admin';
import Clubhead from './screens/Clubhead';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubhead/register" element={<ProtectedRoute Component={Register}/>} />
          <Route path="/clubhead" element={<ProtectedRoute Component={Clubhead} />} />
          <Route path="/admin" element={<ProtectedRoute Component={Admin} />} />
        </Routes>
      </div>
    </Router>
  );
}

// A wrapper component for protected routes
function ProtectedRoute({ Component, ...rest }) {
  const navigate = useNavigate();
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  if (!isAuthenticated()) {
    navigate("/");
    return null;
  }

  return <Component {...rest} />;
}

export default App;
