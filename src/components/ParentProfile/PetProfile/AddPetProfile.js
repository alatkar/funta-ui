import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Container, Segment, Grid, Image, Form, Divider} from "semantic-ui-react";

import Menubar from '../Menubar/Menubar';
import DogCard from '../DogOfTheWeek/DogOfTheWeek';
import RightLinks from '../RightLinks/RightLinks';
import LeftLinks from '../LeftLinks/LeftLinks';
import ProfileInformation from '../ProfileInformation/ProfileInformation';
import OtherLinks from '../OtherLinks/OtherLinks';

class AddPetProfile extends Component {

  render() {
    return(
      <div>
      <Menubar Authmessage={this.updateAuthMessage}></Menubar>
      <Container style={{ margin: 50}}>
        <Grid columns={3}>
        <Grid.Column width={4}>
        <DogCard></DogCard>
        <LeftLinks></LeftLinks>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment>
            <h2>Add Pet Profile</h2>
            <Grid celled='internally'>
              <Grid.Row>
                 <ProfileInformation></ProfileInformation>
              </Grid.Row>

              <Grid.Row>
                <OtherLinks></OtherLinks>
              </Grid.Row>
            </Grid>
          </Segment>
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

export default withRouter(AddPetProfile);
