import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './MapMap.jsx';
import { Marker, InfoWindow } from './MapMarker.jsx';

export class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            markers: [
                {
                    title: `Smash Brothers Friday's Final Destination at Guardian Games`,
                    lat: 39.683099,
                    lng: -86.148345,
                    game: 'Super Smash Bros. for Wii U',
                    day: 'Fridays',
                    time: '7:00pm',
                    link: 'https://www.facebook.com/events/1410766155717859/'
                },
                {
                    title: 'Salty Sundays at Boss Battle Games',
                    lat: 39.779038,
                    lng: -85.985527,
                    game: 'Super Smash Bros. for Wii U',
                    day: 'Sundays',
                    time: '4:00pm',
                    link: 'https://www.facebook.com/pg/bossbattlegamesindy/events/'
                }
            ]
        }
    }

    onMapClick = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    onMarkerClick = (props, marker, e) => {
        if (this.state.showingInfoWindow === true && this.state.activeMarker !== marker) {
            this.setState({
                showingInfoWindow: false
            });
        }
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    componentDidMount() {
        fetch('http://159.65.38.99/events')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json)
                // this.setState({ markers: json })
            })
    }

    render() {

        const style = {
            width: '100%',
            height: '100%'
        }

        return (
            <div style={style}>
                <Map

                    google={this.props.google}
                    onClick={this.onMapClick}>
                    <Marker
                        onClick={this.onMarkerClick}
                        title={`Current Location`}
                        icon={'https://i.imgur.com/dFO32RT.png'} />
                    {this.state.markers.map((m, i) => {
                        return (
                            <Marker
                                onClick={this.onMarkerClick}
                                title={m.title}
                                game={m.game}
                                day={m.day}
                                time={m.time}
                                link={m.link}
                                position={{ lat: m.lat, lng: m.lng }}
                                key={i} />
                        )
                    })}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h5>{this.state.selectedPlace.title}</h5>
                            {this.state.selectedPlace.game &&
                                <div>
                                    <p>Playing {this.state.selectedPlace.game} on {this.state.selectedPlace.day} at {this.state.selectedPlace.time}</p>
                                    <p><a href={this.state.selectedPlace.link}>See more details here</a></p>
                                </div>
                            }
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC55kNS0hDuzWUDH1ebSBCpEqVveKyouqk',
    libraries: ['places']
})(Container)