import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Map extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 12;
            let lat = 39.765880;
            let lng = -86.157752;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
        const style = {
            width: '100%',
            height: 'calc(100vh - 175px)'
        }
        return (
            <div ref="map" style={style}>
                Loading map...
            </div>
        )
    }
}