import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './MapMap.jsx';
import Marker from './MapMarker.jsx';

export class Container extends React.Component {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        const pos = { lat: 37.759703, lng: -122.428093 }
        return (
            <div style={style}>
                <Map google={this.props.google}>
                    <Marker />
                    <Marker position={pos} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC55kNS0hDuzWUDH1ebSBCpEqVveKyouqk',
    libraries: ['places']
})(Container)