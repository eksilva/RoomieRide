import React from 'react';

class CreateRide extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      destination: '',
      time: '09:00',
      date: '2020-11-03',
      seats: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const rideInfo = {
      destination: this.state.destination,
      time: this.state.time,
      date: this.state.date,
      seats: this.state.seats
    };

    let pack = [rideInfo];
    
    console.log(JSON.stringify(pack));
  }

  render() {
    return (
      <form>
        <label htmlFor='destination' >Destination</label>
        <input type='text' id='destination' required={true} onChange={this.handleChange} value={this.state.destination} />

        <label htmlFor='time' >Time</label>
        <input type='time' id='time' onChange={this.handleChange} value={this.state.time} />

        <label htmlFor='date' >Date</label>
        <input type='date' id='date' onChange={this.handleChange} value={this.state.date} />

        <label htmlFor='seats' >Free Seats</label>
        <input type='' id='seats' onChange={this.handleChange} value={this.state.seats} />

        <div>
          <button type='button' onClick={this.clearForm}>Clear</button>
          <button type='submit'>Send Invite</button>
        </div>
      </form>
    )
  }
}

export default CreateRide;
