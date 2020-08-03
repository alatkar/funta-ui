import React, {Component} from 'react'
import { Segment, Divider, Image, Card } from 'semantic-ui-react'

const src = "https://react.semantic-ui.com/images/wireframe/image.png";

class RightLinks extends Component{

  render() {

    return(
      <div>
        <Segment>
          <p style ={{ color: "#016936" }}><b><a href='www.google.com'>Pet Profiles you may like</a></b></p>
          <Image.Group size='mini'>
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
          </Image.Group>
          <a href='www.google.com'>more...</a>
      </Segment>
        <Segment>
          <p style={{ color: "#016936" }}><b><a href='www.google.com'>Products and Services you may like</a></b></p>
          <Image.Group size='mini'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        <a href='www.google.com'>more...</a>
      </Segment>

        <Segment>
          <p style={{ color: "#016936" }}><b><a href='#'>Featured Products and Services</a></b></p>
          <Image.Group size='mini'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        <a href='www.google.com'>more...</a>
        </Segment>
        {/* <Segment>
          <p style={{ color: "#0E6EB8" }}><b><a href='www.google.com'>Articles and Questions you may like</a></b></p>

          <p style={{ fontSize: '10px' }}><a href='#'> Why do dogs like taking care of developmentally disabled child?</a></p>
        </Segment> */}
        <Card>
          <Card.Header>
            <b><a href='www.google.com'>Articles and Questions you may like</a></b>
        </Card.Header>
          <p></p>
          <Card.Description>
            <p style={{ fontSize: '10px' }}><a href='#'> Why do dogs like taking care of developmentally disabled child?</a></p>
          </Card.Description>
        </Card>
      </div>
    )
  }
}

export default RightLinks;
