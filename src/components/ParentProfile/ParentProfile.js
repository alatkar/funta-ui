import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import { Container, Segment, Grid, Image, Form, Divider} from "semantic-ui-react";

import Menubar from './Menubar/Menubar';
import DogCard from './DogOfTheWeek/DogOfTheWeek';
import RightLinks from './RightLinks/RightLinks';
import LeftLinks from './LeftLinks/LeftLinks';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import OtherLinks from './OtherLinks/OtherLinks';
import RenderParentProfile from './RenderParent';

import AddPetProfile from './PetProfile/AddPetProfile';

class ParentProfile extends Component {

  render() {

    return (
      <div>
        <Switch>
          <Route path="/ParentProfile">
            <RenderParentProfile></RenderParentProfile>
          </Route>
          <Route exact path="/ParentProfile/ProductService"></Route>
          <Route exact path="/ParentProfile/OrganizationProfile"></Route>
          <Route exact path="/ParentProfile/AddPetProfile">
            <AddPetProfile></AddPetProfile>
          </Route>
        </Switch>

      </div>
    )
  }
}

export default withRouter(ParentProfile);
