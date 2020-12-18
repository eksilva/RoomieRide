import React from 'react';
import styled from 'styled-components';

const Invite = (props) => {
  return (
    <Card>
      <h2>George's Party        (You)</h2>
      <p>12/19/2020  6:00PM</p>
      <p>Spots Remaining: 1</p>
    </Card>
  )
};

const Card = styled.div`
  border-radius: 45px;
  background: #391c7d;
  box-shadow:  -10px -10px 27px #201047, 
             10px 10px 27px #5228b3; 
  padding-left: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  color: white;
  width: 400px;
  margin: 1.5em;
`;

export default Invite;