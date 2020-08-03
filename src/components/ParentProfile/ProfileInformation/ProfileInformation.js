import React, {Component} from 'react'
import {Grid, Image, List} from 'semantic-ui-react'

class ProfileInformation extends Component {

  render() {

    return(
      <Grid columns={2} celled ="internally">
        <Grid.Column>
          <Image centered src="https://react.semantic-ui.com/images/wireframe/image.png" size="small"/>
          <a href="#"><p >Upload/Change Photo</p></a>
        </Grid.Column>
          <Grid.Column>
        <List size='large' divided verticalAlign='middle'>
            <List.Item>
                  <List.Content>Atul Alatkar</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>Address</List.Content>
                </List.Item>

                    <List.Item>
                      <List.Content>Seattle</List.Content>
                    </List.Item>

                    <List.Item>
                      <List.Content>98052</List.Content>
                    </List.Item>


                <List.Item><List.Content>
                  USA
                  </List.Content></List.Item>

              </List>


        </Grid.Column>
      </Grid>
    )
  }
}

export default ProfileInformation;
