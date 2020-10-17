import React, { useState } from 'react';

import CreateRide from './CreateRide.jsx';

const Home = ({ userInfo }) => {
  const [create, setCreate] = useState(false);

  function createRide(event) {
    event.preventDefault();
    setCreate(!create);
  }

  if(!create) {
    return (
      <div>
        <img src={userInfo.picture} alt={userInfo.name} />
        <p>Welcome, {userInfo.name}!</p>
        <button onClick={createRide}>Create Ride Invite</button>
      </div>
    )
  } else {
    return (
      <CreateRide createRide={createRide} />
    )
  }
}

export default Home;
