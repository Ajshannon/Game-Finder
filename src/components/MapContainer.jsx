import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './MapMap.jsx'

export class Container extends React.Component {
    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <Map google={this.props.google} />
                </div>
            )
        }
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC55kNS0hDuzWUDH1ebSBCpEqVveKyouqk',
    libraries: ['places']
})(Container)