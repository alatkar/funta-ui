import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import { Container, Segment, Grid, Image, Form, Divider} from "semantic-ui-react";

import Menubar from './Menubar/Menubar';
import DogCard from './DogOfTheWeek/DogOfTheWeek';
import RightLinks from './RightLinks/RightLinks';
import LeftLinks from './LeftLinks/LeftLinks';
import Forms from './Form/Form';

class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      postalCode: "",
      country: "",
      email: "",
      password: "",
      confirmPassword: "",
      successMessage: null
    }
  }

  handleChange = (e) => {
    const {id, value} = e.target
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }))

  }

  redirectToHome = () => {
    this.props.updateTitle('NewsFeed')
    this.props.history.push("/home");
  }

  redirectToLogin = () => {
    this.props.updateTitle('Login')
    this.props.history.push('/login');
  }

handleSubmitClick = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      // props.showError("All fields are mandatory");
    }
    else if(this.state.password === this.state.confirmPassword) {
      // sendDetailsToServer() send details to server, make API calls
      console.log("Passwords matched")
      // redirectToHome();
    } else {
      // props.showError("Passwords do not match");
    }
  }

  redirectToParentProfile = (message) => {

    if (message === "Register") {

    this.props.updateTitle('ParentProfile')
    this.props.history.push('/parentProfile');
   }
  }



  render() {

    const {toRegister} = this.state;
    // const renderRegistration = () => {
    //   if (toRegister){
    //     this.toRegister = false;
    //       return <RegistrationForm></RegistrationForm>
    //     } else {
    //       return <Posts></Posts>
    //     }
    //   }

    return (
      <div>
        <Menubar Authmessage={this.updateAuthMessage}></Menubar>
        <Container style={{ margin: 50,  marginTop: '10em' }}>
          <Grid columns={3}>
          <Grid.Column width={4}>
          <DogCard></DogCard>
          <LeftLinks></LeftLinks>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment><Forms registerMessage={this.redirectToParentProfile}></Forms></Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <RightLinks></RightLinks>
          </Grid.Column>
        </Grid>
        </Container>

      </div>
    )
  }



}

export default withRouter(Register);
