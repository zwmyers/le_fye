import { CardView } from 'react-card-with-image'
import './ArtistCard.css'
import  Phone from "./../images/phone1.svg";
import  Stack from "./../images/stack1.svg";
import Speaker from "./../images/speaker2.svg";
import {ThemeContext, themes} from '../../libs/contextLib';

const App = (props) => {
    const items = [
        {
          id: 1,
          header:  <h1 style={{color:props.color,fontSize:"100%"}}>
                Connect to Spotify
            </h1>,
          description:
            <h1 style={{color:props.color,boxShadow:"red",fontSize:"100%"}}>
                Read your Spotify data, including top artists and top tracks
            </h1>,
          image:
            Phone
          
        },
        {
          id: 2,
          header:  <h1 style={{color:props.color,fontSize:"100%"}}>
                Get Recommendations 
            </h1>,
          description:
            <h1 style={{color:props.color,boxShadow:"red",fontSize:"100%"}}>
                Get recommendations tailored to your taste
            </h1>,
          image: Stack
        },
        {
          id: 3,
          header:  <h1 style={{color:props.color,fontSize:"100%"}}>
                Check Back in the Future
            </h1>,
          description:
            <h1 style={{color:props.color,boxShadow:"red",fontSize:"100%"}}>
                This project is in development, check back for future features, possibly including a web player and playlist generator
            </h1>,
          image: Speaker
        }
      ]
       return (
    <CardView
      items={items}
      activeColor={props.color}
      imageHeight='50%'
      imageWidth='40%'
    />
  ) 
}

export default App