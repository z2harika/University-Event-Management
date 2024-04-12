import React, { useState, useEffect } from 'react';
import axios from '../Axios';

const ClubCard = () => {
  const [clubs, setClubs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/clubs')
      .then(res => {
        setClubs(res.data);
      })
      .catch(err => {
        console.error('Error fetching club data:', err);
        setError('An error occurred while fetching club data');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
  <div className="row">
    {clubs.map(club => (
      <div key={club._id} className="col-md-4 mb-4">
        <div className=" card bg-light border-secondary">
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title text-dark display-6" style={{"textAlign":"center"}}>{club.name}</h5>
            <img src={club.img} alt={club.name} className="rounded-circle mb-3" width="140" height="140"/>
            <p className="card-text">{club.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default ClubCard;
