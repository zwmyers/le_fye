import React from 'react'
import { Card, OverlayTrigger,Popover } from 'react-bootstrap';

import Logo from './../images/waterfall.jpg'


class Reccomendation extends React.Component{
  
 
  render() {
    const popover = (
      <Popover style={{backgroundColor:this.props.info.theme.body}}id="popover-basic">
        <Popover.Title style={{color:this.props.info.theme.text,backgroundColor:this.props.info.theme.body}} as="h3">Popover right</Popover.Title>
        <Popover.Content style={{color:this.props.info.theme.text,backgroundColor:this.props.info.theme.body}}>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );
    
  return(
    <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
      <Card style={{background:this.props.info.theme.text}} >
        <Card.Img variant="top" src={this.props.recImage} />
        <Card.Body>
          <Card.Title style={{color:this.props.info.theme.body}}>Track Recommendation</Card.Title>
          <Card.Text >
            <div style={{color:this.props.info.theme.body}} >
              {this.props.rec}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      </OverlayTrigger>
  );
  }
}




export default Reccomendation