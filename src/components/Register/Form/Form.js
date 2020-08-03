import React, {Component} from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import ParentProfile from '../../ParentProfile/ParentProfile';

class Forms extends Component{


  handleSubmit = (e) => {
    this.props.registerMessage("Register");
  }

  render(){

    return (

      <Form onSubmit={(event) => this.handleSubmit(event)}>

    <Form.Group unstackable widths={2}>
      <Form.Input label='First name' placeholder='First name' />
      <Form.Input label='Last name' placeholder='Last name' />

    </Form.Group>

    <Form.Group unstackable widths={2}>
      <Form.Input label='City' placeholder='City' />
      <Form.Input label='Postal Code' placeholder='Postal Code' />
    </Form.Group>

    <Form.Input label='Country' placeholder='Country' />


      <Form.Input label='Email' placeholder='Email' />

      <Form.Field>
      <label>Password</label>
      <input type='password' placeholder="Password"/>
      </Form.Field>
      {/* <Form.Input label='Password' placeholder='Password' /> */}

    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button>Register</Button>
  </Form>

    )
  }
}

export default Forms;
