import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class CreateRide extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      driver: this.props.userInfo.userData.userID,
      destination: '',
      time: '',
      date: '',
      seats: 0,
      invitees: []
    };
    this.clearForm = this.clearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let currentDate = moment().format('YYYY[-]MM[-]DD');
    let currentTime = moment().format('HH:mm');
  
    this.setState({
      time: currentTime,
      date: currentDate,
    });
  }

  clearForm() {
    let currentDate = moment().format('YYYY[-]MM[-]DD');
    let currentTime = moment().format('HH:mm');
  
    this.setState({
      destination: '',
      time: currentTime,
      date: currentDate,
      seats: 0,
      invitees: []
    });
  }

  // TODO: method to query database based on invitee input (autocomplete should be used)

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
        <Label htmlFor='destination' >Destination</Label>
        <input type='text' id='destination' required={true} onChange={this.handleChange} value={this.state.destination} required/>

        <Label htmlFor='time' >Time</Label>
        <input type='time' id='time' onChange={this.handleChange} value={this.state.time} required/>

        <Label htmlFor='date' >Date</Label>
        <input type='date' id='date' onChange={this.handleChange} value={this.state.date} required/>

        <Label htmlFor='seats' >Free Seats</Label>
        <input type='number' min='0' id='seats' onChange={this.handleChange} value={this.state.seats} required/>

        <Label htmlFor='invitees' >Invitees</Label>
        <input type='' id='invitees' onChange={this.handleChange} value={this.state.invitees} required/>

        <ButtonDiv>
          <Grid container spacing={2}>
            <Grid item>
              <Button type='button' size='small' variant='contained' color='secondary' onClick={this.clearForm}>Clear</Button>
            </Grid>
            <Grid item>
              <Button type='submit' size='small' variant= 'contained' color='primary'>Send Invite</Button>
            </Grid>
          </Grid>
        </ButtonDiv>
      </Form>
    )
  }
}

const ButtonDiv = styled.div`
  margin-top: 10px;
`;

const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 4px;
  margin-left: -20px;
`;

const Form = styled.form`
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 20px;
`;

export default CreateRide;
