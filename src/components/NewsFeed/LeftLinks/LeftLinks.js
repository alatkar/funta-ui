import React, {Component} from 'react'
import { List } from 'semantic-ui-react'

class LeftLinks extends Component {

  render() {
    return (
      <List verticalAlign='middle'>
        <List.Item as='a'>Resources</List.Item>
        <List.Item as='a'>Ask A Question</List.Item>
        <List.Item as='a'>Events & News</List.Item>
        <List.Item as='a'>Invite Friends</List.Item>
        <List.Item as='a'>About Us</List.Item>
        <List.Item as='a'>Contact Us</List.Item>
        <List.Item as='a'>FAQs & Help</List.Item>
        <p></p>
        <List.Item as='a'>Terms and Conditions</List.Item>
        <List.Item as='a'>Suggestion Box</List.Item>
      </List>
    )
  }
}

export default LeftLinks;
