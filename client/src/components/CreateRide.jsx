import React from 'react';

class CreateRide extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      destination: '',
      departure: '',
      seats: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <label htmlFor='destination' >Destination</label>
        <input type='' id='destination' onChange={this.handleChange} value={this.state.destination} />

        <label htmlFor='departure' >Departure</label>
        <input type='' id='departure' onChange={this.handleChange} value={this.state.departure} />

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
