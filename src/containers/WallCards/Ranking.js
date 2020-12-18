
import React from 'react'
import { Card, OverlayTrigger,Popover } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Logo from './../images/waterfall.jpg'
import './Ranking.css'
import {ThemeContext, themes} from './../../libs/contextLib';

class Stat extends React.Component{
  render() {
    const popover = (
      <Popover style={{backgroundColor:this.props.info.theme.body}}id="popover-basic">
        <Popover.Title style={{color:this.props.info.theme.text,backgroundColor:this.props.info.theme.body}} as="h3">Stat</Popover.Title>
        <Popover.Content style={{color:this.props.info.theme.text,backgroundColor:this.props.info.theme.body}}>
          This displays some statistic
        </Popover.Content>
      </Popover>
    );
  return(
    <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
      <Card style={{background:this.props.info.theme.text}} >

        <>
        <style type="text/css">
        {` .progress-bar { 
            background-color: ` + this.props.info.theme.body +` ;
          } `}
        </style>
      
    {(this.props.info.theme===themes.dark || this.props.info.theme===themes.dark1 || this.props.info.theme===themes.dark2 )?(<ProgressBar style={{background:'white'}} striped variant="" animated now={this.props.stat} />):
       (<ProgressBar style={{background:'black'}} striped variant="" animated now={this.props.stat} />)}
       
        
      
        </>
      
    
        
        <Card.Body>
        <Card.Title style={{color:this.props.info.theme.body}}>{this.props.statType}</Card.Title>
          <Card.Text >
            <div style={{color:this.props.info.theme.body}} >
              {this.props.statText}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      </OverlayTrigger>
  );
  }
}




export default Stat;