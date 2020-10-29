import React from 'react';
import styled from 'styled-components';

class CreateRide extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      destination: '',
      time: '09:00',
      date: '2020-11-03',
      seats: '',
      invitees: []
    };
    this.clearForm = this.clearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm() {
    this.setState({
      destination: '',
      time: '09:00',
      date: '2020-11-03',
      seats: ''
    })
  }

  handleChange(event) {
    if (event.target.id === 'invitees') {
      let riders = this.state.invitees;
      riders.push(event.target.value);
      this.setState({
        [event.target.id]: riders,
      })
    } else {
      this.setState({
        [event.target.id]: event.target.value,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const rideInfo = {
      destination: this.state.destination,
      time: this.state.time,
      date: this.state.date,
      seats: this.state.seats,
      invitees: []
    };

    let pack = [rideInfo];
    
    console.log(JSON.stringify(pack));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <label htmlFor='destination' >Destination</label>
        <input type='text' id='destination' required={true} onChange={this.handleChange} value={this.state.destination} />

        <label htmlFor='time' >Time</label>
        <input type='time' id='time' onChange={this.handleChange} value={this.state.time} />

        <label htmlFor='date' >Date</label>
        <input type='date' id='date' onChange={this.handleChange} value={this.state.date} />

        <label htmlFor='seats' >Free Seats</label>
        <input type='' id='seats' onChange={this.handleChange} value={this.state.seats} />

        <label htmlFor='invitees' >Free Seats</label>
        <input type='' id='invitees' onChange={this.handleChange} value={this.state.invitees} />

        <div>
          <button type='button' onClick={this.clearForm}>Clear</button>
          <button type='submit'>Send Invite</button>
        </div>
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default CreateRide;
