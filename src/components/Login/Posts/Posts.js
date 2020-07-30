import React, { Component } from 'react'
import { Button, Divider, Embed, Message } from 'semantic-ui-react'

class Posts extends Component {

  state = {}

  handleClick = () => this.setState({ active: true })

  render() {

    const {active} = this.state;
    return (
      <div>

        <Message>
          <p>Everything for your best friend! </p>
          <Button color="green">Join Now</Button>
        </Message>

        <Embed
          active={active}
          icon='arrow circle down'
          id='90Omh7_I8vI'
          placeholder='https://react.semantic-ui.com/images/wireframe/image.png'
          source='youtube'
        />
      </div>
    )
  }
}


export default Posts;
