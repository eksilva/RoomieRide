import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const Invite = (props) => {
  return (
    <Card>
      <h2>{props.rideData.destination} ({props.rideData.driver})</h2>
      <p>{props.rideData.date}  {props.rideData.time}</p>
      <p>Spots Remaining: {props.rideData.seats}</p>
      <div>
        <Button type='button' size='small' variant='contained' color='primary' onClick={() => {console.log('Edit Button Clicked')}}>Edit Ride</Button> <Button type='button' size='small' variant='contained' color='secondary' onClick={() => {console.log('Drop Button Clicked')}}>Drop Ride</Button>
      </div>
    </Card>
  )
};

const Card = styled.div`
  border-radius: 40px;
  background: #391c7d;
  box-shadow:  -10px -10px 27px #201047, 
             10px 10px 27px #5228b3; 
  padding-left: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  color: white;
  width: 300px;
  margin: 1.5em;
`;

export default Invite;