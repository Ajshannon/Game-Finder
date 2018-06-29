import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './MapMap.jsx';
import { Marker, InfoWindow } from './MapMarker.jsx';

export class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
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
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        const pos = { lat: 39.683099, lng: -86.148345 }
        return (
            <div style={style}>
                <Map
                    google={this.props.google}
                    onClick={this.onMapClick}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={`Guardian Games`}
                        details={`7pm on Fridays`}
                        position={pos} />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={`Current Location`} />
                    <Marker
                        onClick={this.onMarkerClick}
                        name={`Boss Battle Games`}
                        details={`4pm on Sundays`}
                        position={{lat: 39.779038, lng: -85.985527}} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h5>{this.state.selectedPlace.name}</h5>
                            <p>{this.state.selectedPlace.details}</p>
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