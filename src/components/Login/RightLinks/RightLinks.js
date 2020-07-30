import React, {Component} from 'react'
import { Segment, Divider, Image } from 'semantic-ui-react'

const src = "https://react.semantic-ui.com/images/wireframe/image.png";

class RightLinks extends Component{

  render() {

    return(
      <div>
        <Segment>
          <p style ={{ color: "#0E6EB8" }}><b><a href='www.google.com'>Reach out to thousands of pet profiles</a></b></p>
          <Image.Group size='mini'>
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
            <Image src={src} />
          </Image.Group>

      </Segment>
        <Segment>
          <p style={{ color: "#0E6EB8" }}><b><a href='www.google.com'>Find out best Products for your Dog</a></b></p>
          <Image.Group size='mini'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
      </Segment>

        <Segment>
          <p style={{ color: "#0E6EB8" }}><b><a href='www.google.com'>Get the best services for your Pet</a></b></p>
          <Image.Group size='mini'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        </Segment>
        <Segment>
          <p style={{ color: "#0E6EB8" }}><b><a href='www.google.com'>Get support, tips and suggestions from your community</a></b></p>
          <Image.Group size='mini'>
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
          <Image src={src} />
        </Image.Group>
        </Segment>
      </div>
    )
  }
}

export default RightLinks;
