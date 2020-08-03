import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Grid, Image, Button, Divider} from 'semantic-ui-react'

class OtherLinks extends Component{

  render() {

    return(
      <div>
        <Grid celled='internally' columns={3}>
          <Grid.Column>
            <Image centered src="https://react.semantic-ui.com/images/wireframe/image.png" size="small"/>
            <Divider hidden/>
            <Button as={Link} to="/ParentProfile/AddPetProfile">Add Dog Profile</Button>
          </Grid.Column>

          <Grid.Column>
            <Image centered src="https://react.semantic-ui.com/images/wireframe/image.png" size="small"/>
            <Divider hidden/>
            <button class="ui button">Add Product/Service</button>
          </Grid.Column>

          <Grid.Column>
            <Image centered src="https://react.semantic-ui.com/images/wireframe/image.png" size="small"/>
            <Divider hidden/>
            <button class="ui button">Add Organization</button>
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}

export default OtherLinks;
