import React, {Component} from 'react'
import { Card, Icon, Image, List } from 'semantic-ui-react'

class DogCard extends Component {

  render(){
    return (
      <Card>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Dog of the Week</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Bruno loves to play in the water.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    )
  }
}

export default DogCard;
