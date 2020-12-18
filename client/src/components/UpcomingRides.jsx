import React from 'react';
import styled from 'styled-components';

import Invite from './Invite.jsx';

const ViewRides = (props) => {
  let rideData = [{
    destination: 'Campus',
    driver: 'Rachel',
    date: '12/18/2020',
    time: '10:00AM',
    seats: '3'
  },{
    destination: 'Safeway Run',
    driver: 'Ashley',
    date: '12/18/2020',
    time: '4:00PM',
    seats: '4'
  },{
    destination: 'George\'s Party',
    driver: 'You',
    date: '12/18/2020',
    time: '6:00PM',
    seats: '1'
  },];

  const rides = rideData.map((obj) => <Invite key={Math.random()+1} rideData={obj} />);

  return (
    <div>
      {rides}
    </div>
  )
}



export default ViewRides;