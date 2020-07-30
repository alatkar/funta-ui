import React, {Component} from 'react'
import {Menu, Container, Image, Button, Search, Icon, Segment} from 'semantic-ui-react'

class Menubar extends Component {

  render() {
    return (
      <div>
    <Menu fixed='top' inverted color='blue' size='mini'>
      <Container>

        <Menu.Item as='a'>
          <Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' centered/>
        </Menu.Item>

        <Menu.Item as='a' active>
          Home
        </Menu.Item>

        <Menu.Item as='a'>
          Profiles
        </Menu.Item>

        <Menu.Item as='a'>
          Pet Products
        </Menu.Item>

        <Menu.Item as='a'>
          Pet Services
        </Menu.Item>

        <Menu.Item as='a'>
          Classified
        </Menu.Item>

        <Menu.Item >
          <Search/>
        </Menu.Item>

        <Menu.Item as='a' position='right'>
          <Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' style={{ marginRight: '1.5em' }} />
          Hi Atul!
        </Menu.Item>

        <Menu.Item >
          <Icon link name='bell' size='big'/>
        </Menu.Item>

        <Menu.Item>

            <Icon link name='facebook' size='big'/>
            <Icon link name='tumblr' size='big'/>
            <Icon link name='twitter' size='big'/>
            <Icon link name='linkedin' size='big'/>

        </Menu.Item>

      </Container>

    </Menu>
  </div>
    )
  }
}

export default Menubar;
