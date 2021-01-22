import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const Invite = (props) => {
  return (
    <div className="invite-card">
      <div className="card-info">
        <div className="card-destination">{props.rideData.destination}</div>
        <div className="card-driver">({props.rideData.driver})</div>
        <p>{props.rideData.date}  {props.rideData.time}</p>
        <p>Spots Remaining: {props.rideData.seats}</p>
      </div>
      <div className="card-buttons">
        <Button type='button' size='small' variant='contained' color='secondary' onClick={() => {console.log('Drop Button Clicked')}}>Drop Ride</Button> <Button type='button' size='small' variant='contained' color='primary' onClick={() => {console.log('Edit Button Clicked')}}>Edit Ride</Button>
      </div>
    </div>
  )
};


export default Invite;