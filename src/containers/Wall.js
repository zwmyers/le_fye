import React,{ useState } from "react";
import Reccomendation from  "./WallCards/Recommendations";
import Stat from  "./WallCards/Ranking";
import NewsCard from "./WallCards/NewsCard"
import Fade from 'react-bootstrap/Fade'

import Logo from './images/waterfall.jpg'
import Logo1 from './images/snow.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import TabPane from 'react-bootstrap/TabPane'
import TabContainer from 'react-bootstrap/TabContainer'
import Image from 'react-bootstrap/Image'
import { CardColumns } from "react-bootstrap";
import Ranking from "./WallCards/Ranking";

class Wall extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      time:null,
      current:0,
      origin: null,
      c1:false,
      c2:false,
      c3:true,
      c4:true,
      c5:true,
      c6:true,
      c7:true,
      h:window.innerHeight,
      w:window.innerWidth

    }

  }


  visibilityManager(){
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {w:window.innerWidth}
    });
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {h:window.innerHeight}
    });
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {current: state.current + 1}
    });
    if (this.state.current%7===1){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c1: false}
      });
    }
    else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c1: true}
      });
    }
    if (this.state.current%7===2){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c2: false}
      });
    }
    else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c2: true}
      });
    }
    if (this.state.current%7===3){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c3: false}
      });
    }
    else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c3: true}
      });
    }
    if (this.state.current%7===4){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c4: false}
      });
    }
    else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c4: true}
      });
    }
    if (this.state.current%7===5){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c5: false}
      });
    }
    else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c5: true}
      });
    }
    if (this.state.current%7===6){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c6: false}
      });
    }
    else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c6: true}
      });
    }
    if (this.state.current%7===0){
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c7: false}
      });
    }
    else {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return {c7: true}
      });
    }
  }

   
   

  
  componentDidMount() {
    
    const self= this;
    const d =new Date();
    this.setState({origin:d.getTime()})
    self.time = setInterval(function() {
      // self.visibilityManager();
      var d = new Date();
      var seconds = (Math.round(d.getTime() / 1000));
      self.setState({time:(self.state.current.toString() +' --' +self.state.origin+'---'+self.props.theme.width+'---'+self.props.theme.height)});
    }, 1000); 
  
  }



  
    render() {

  
      return (
        <div className="Home" style={{flexDirection: 'row',position:'relative',backgroundImage:this.props.theme.theme.gradient,height:"100vh",width:'100%',top:'0px'}}>
          
          
          <CardColumns className="mx-auto" style={{maxWidth:'80vw'}}>
            <div style={{height:''}}>
            
            
              <NewsCard info={this.props.theme}/>  
             
              <div style={{width:'25vw'}}>
            <Stat info={this.props.theme}/>  
            </div>
              <div style={{position:'relative',width:'25vw'}}>
              <Reccomendation info={this.props.theme}/> 
            
            </div>  
            </div>
           
          
          
            <div style={{height:''}}>
            <div style={{width:'25vw'}}>
            <Stat info={this.props.theme}/>  
            </div>
            <div style={{width:'25vw'}}>
              <Reccomendation info={this.props.theme}/>    
            </div>
            </div>   
            <div style={{width:'25vw'}}>
            <Stat info={this.props.theme}/>  
            </div>
            <div style={{width:'25vw'}}>
              <Reccomendation info={this.props.theme}/>    
            </div>
            <div style={{width:'25vw'}}>
              <Reccomendation info={this.props.theme}/>    
            </div>
            
            <div style={{}}>
              <NewsCard info={this.props.theme}/>    
            </div>
            <div style={{width:'25vw'}}>
            <Stat info={this.props.theme}/>  
            </div>
           
          </CardColumns>
          
          
         
        </div>
      );
    }
  }
  export default Wall;