import React, {Component} from 'react'
import {Menu, Container, Image, Button, Search, Icon, Segment, Form, Divider, Input} from 'semantic-ui-react'
import { HashLink as Link} from 'react-router-hash-link'
import {withRouter} from "react-router-dom";
import Authentication from './Authentication';
import './Menubar.css';

class Menubar extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:"",
      successMessage:null
    }

  }



  handleChange = (e, {name, value}) => this.setState({ [name]: value})


  handleSubmit = () => {
    const { email,password } = this.state

    const message = Authentication(this.state);
    console.log(message);
      this.props.Authmessage(message);
  }

  goToRegister = () => {

    this.props.Registermessage("Register");
  }



  render() {

    const {email,password} = this.state;

    return (
      <div>
    <Menu fixed='top' inverted color='blue' size='mini' fluid>
      <Container>

        <Menu.Item as='a'>
          <Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' centered/>
        </Menu.Item>

        <Menu.Item as='a' active>
          <Icon link name='home' size='large'/>
          Home
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon link name='user' size='large'/>
          Profiles
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon link name='paperclip' size='large'/>
          Pet Products
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon link name='paperclip' size='large'/>
          Pet Services
        </Menu.Item>

        <Menu.Item as='a'>
          <Icon link name='list alternate' size='large'/>
          Classified
        </Menu.Item>

        <Menu.Item >
          <Search/>
        </Menu.Item>

        <Menu.Item position='right' >
          <div class="ui middle aligned">
          <Form onSubmit={this.handleSubmit} size='mini'>
          <Form.Group>
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
            <Form.Button content='Submit' size="tiny"/>
            </Form.Group>
            <Form.Group>
            <Form.Checkbox label='Keep Logged in' style={{ color: '#FFF', fontSize: '14px'}}/>
            <Link onClick={this.goToRegister} style={{ color: '#FFF', fontSize: '14px', padding:'2px', marginLeft:'37px' }}>Sign up</Link>
          </Form.Group>
        </Form>
        </div>
    </Menu.Item>
      </Container>

    </Menu>
  </div>
    )
  }
}

export default withRouter(Menubar);
