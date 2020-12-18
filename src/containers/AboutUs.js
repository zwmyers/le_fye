import React,{ useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AboutUs.css";
import Dots from './sections/dots';
import Title from './sections/title';
import us from './images/IMG_3014.jpeg'
class AboutUs extends React.Component {
    render() {
  
      return (
        <div className="AboutUs"  style={{background:this.props.theme.theme.gradient,
            width: "100%",
            height: "100vh",
            textAlign:"center"
            }}>
            <h1 style={{color: this.props.theme.theme.text,left:"center"}} >About Us</h1>
            <div className="Jacob" style={{marginTop:"5vh"}}>
              <h3 style={{color: this.props.theme.theme.text}}>Jacob Somer and Zachary Myers</h3>
              <img src={us} widht={200} height={200}></img>
              <p style={{color: this.props.theme.theme.text}}>Jacob and Zachary are Computer Science students at William and Mary.</p>
              <p style={{color: this.props.theme.theme.text}}>Jacob's Github: https://github.com/jacobsomer</p>
              <p style={{color: this.props.theme.theme.text}}>Zachary's Github: https://github.com/zwmyers</p>
            </div>
            <div id="particles" >
                <Dots color={this.props.theme}/>
            </div>
          </div>
  
      
      );
    }
  }
  export default AboutUs;