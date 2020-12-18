import React from 'react';
import "./AnalyticsVis.css"
import CNTRLR from './CNTRLR'
import Wall from './Wall'

const getCode = async () => {
    let url = window.location.href;
    return url.split('=')[1];

}

getCode().then((result) => {
    localStorage.setItem('spotifyAuthToken', result);
});


const fetch = require('node-fetch');

const sendCode = async () => {
    const res = await fetch('https://lefyeserver.herokuapp.com/token', {
        method: "POST",
        body: JSON.stringify({code:localStorage.getItem('spotifyAuthToken')})
    });
    const data = await res.json();
    return data;
}


let isClicked = false;

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            click:isClicked
        };
        this.toggleButton=()=>{
            sendCode()
                .then(data => {
                    console.log(data)
                    localStorage.setItem('userDisplayName', data.userData[0].display_name)
                    var topTracks = []
                    var topTracksImages = []
                    for(var i = 0; i < data.userData[1].items.length; i++) {
                        topTracks[i] = data.userData[1].items[i].name
                        topTracksImages[i] = data.userData[1].items[i].album.images[0].url
                    }
                    localStorage.setItem('topTracks', topTracks)
                    localStorage.setItem('topTracksImages', topTracksImages)
                    var topArtists = []
                    var topArtistsImages = []
                    for(var i = 0; i < data.userData[2].items.length; i++) {
                        topArtists[i] = data.userData[2].items[i].name
                        topArtistsImages[i] = data.userData[2].items[i].images[0].url
                    }
                    localStorage.setItem('topArtists', topArtists)
                    localStorage.setItem('topArtistsImages', topArtistsImages)
                    var recs = []
                    var recsImages = []
                    for(var i = 0; i < data.userData[3].items.length; i++) {
                        recs[i] = data.userData[3].items.tracks[i].name
                        recsImages[i] = data.userData[3].items.tracks[i].album.images[0].url
                    }
                    localStorage.setItem('recs', recs)
                    localStorage.setItem('recsImages', recsImages)
                    this.setState({click:true})             
                })                       
                .catch(error => {
                    console.log(error)
                })
        };
    }
  render() {
    return (
      <div>
        <div style={{position: ''}}>
            <div className="landed" style={{position: 'relative',background:this.props.theme.theme.gradient,width:"100%",height:"120vh"}}>
                <h1>A N A L Y T I C S</h1>
                {!this.state.click ? (<button onClick={this.toggleButton}>Get Analytics</button>):(
                    <>
                    <div className="Welcome">
                        <h3 style={{position:'relative'}}>Welcome, {localStorage.getItem('userDisplayName')}!</h3>
                    </div>
                    <div className="Wall">
                        <Wall theme={this.props.theme} track1={localStorage.getItem('topTracks').split(',')[1]} track2={localStorage.getItem('topTracks').split(',')[2]} track3={localStorage.getItem('topTracks').split(',')[3]} track4={localStorage.getItem('topTracks').split(',')[4]} track5={localStorage.getItem('topTracks').split(',')[5]} trackImg1={localStorage.getItem('topTracksImages').split(',')[1]} trackImg2={localStorage.getItem('topTracksImages').split(',')[2]} trackImg3={localStorage.getItem('topTracksImages').split(',')[3]} trackImg4={localStorage.getItem('topTracksImages').split(',')[4]} trackImg5={localStorage.getItem('topTracksImages').split(',')[5]}
                        rec1={localStorage.getItem('recs').split(',')[1]} rec2={localStorage.getItem('recs').split(',')[2]} rec3={localStorage.getItem('recs').split(',')[3]} rec4={localStorage.getItem('recs').split(',')[4]} recImage1={localStorage.getItem('recsImages').split(',')[1]} recImage2={localStorage.getItem('recsImages').split(',')[2]} recImage3={localStorage.getItem('recsImages').split(',')[3]} recImage4={localStorage.getItem('recsImages').split(',')[4]}
                        />
                    </div>
                    </>
                )}
            </div>
        </div>
      </div>
    );
  }
}