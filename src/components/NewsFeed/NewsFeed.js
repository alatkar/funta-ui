import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Segment, Grid, Image} from "semantic-ui-react";
import Posts from './Posts/Posts';
import DogCard from './DogOfTheWeek/DogOfTheWeek';
import LeftLinks from './LeftLinks/LeftLinks';
import Menubar from './Menubar/Menubar';
import RightLinks from './RightLinks/RightLinks';

class NewsFeed extends Component {

render(){

return(
  <div>
  <Menubar></Menubar>
    <Container style={{ margin: 50,  marginTop: '10em' }}>
      <Grid columns={3}>
      <Grid.Column width={4}>
      <DogCard></DogCard>
      <LeftLinks></LeftLinks>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment><p><Posts/></p></Segment>
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

export default NewsFeed;
