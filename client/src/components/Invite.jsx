import React from 'react';
import { GiSteeringWheel, GiAlarmClock } from 'react-icons/gi';
import { MdEventSeat } from 'react-icons/md';

const Invite = (props) => {
  return (
    <div className="invite-card">
      <div className="card-info">
        <div className="card-destination">{props.rideData.destination}</div>
        <div className="card-info-other"><GiSteeringWheel className="react-icon"/> ({props.rideData.driver})</div>
        <p className="card-info-other"><GiAlarmClock className="react-icon"/> {props.rideData.date}  {props.rideData.time}</p>
        <p className="card-info-other"><MdEventSeat className="react-icon"/> {props.rideData.seats} Spot(s) Remaining</p>
      </div>
      <div className="card-buttons">
        <button className="small-button edit-ride-button" onClick={() => {console.log('Edit Button Clicked')}}>Edit Ride</button>
        <button className="small-button drop-ride-button" onClick={() => {console.log('Drop Button Clicked')}}>Drop Ride</button>
      </div>
    </div>
  )
};


export default Invite;