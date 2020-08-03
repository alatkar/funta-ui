import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import { Container, Segment, Grid, Image, Divider} from "semantic-ui-react";

import Menubar from './Menubar/Menubar';
import DogCard from './DogOfTheWeek/DogOfTheWeek';
import RightLinks from './RightLinks/RightLinks';
import LeftLinks from './LeftLinks/LeftLinks';
import Posts from './Posts/Posts';
// import RegistrationForm from './Register/RegistrationForm';

class Login extends Component {

constructor(props) {
  super(props);

}

updateAuthMessage = (message) => {

  if (message === "Success") {

    this.redirectToHome();
    this.props.showError(null);
  }
  else {
    this.props.showError("Incorrect credentials")
  }
}


redirectToHome = () => {
  this.props.updateTitle('NewsFeed');
  this.props.history.push('/home');

}

redirectToRegister = () => {
  this.props.updateTitle('Register');
  this.props.history.push('/register');
}

  render() {


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
            <Posts></Posts>
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

export default withRouter(Login);
