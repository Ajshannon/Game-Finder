import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const evtNames = ['ready', 'click', 'dragend']

const camelize = function(str) {
    return str.split(' ').map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

export default class Map extends Component {

    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    recenterMap() {
        const map = this.map;
        const curr = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(curr.lat, curr.lng);
            map.panTo(center);
        }
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    })
                })
            }
        }
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let { initialCenter, zoom } = this.props;
            console.log("initialCenter: San Francisco", initialCenter);
            const { lat, lng } = this.state.currentLocation;

            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);

            evtNames.forEach(e => {
                this.map.addListener(e, this.handleEvent(e));
            });

            maps.event.trigger(this.map, 'ready');
        }
    }

    handleEvent(evtName) {
        let timeout;
        const handlerName = `on${camelize(evtName)}`;

        return (e) => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            timeout = setTimeout(() => {
                if (this.props[handlerName]) {
                    this.props[handlerName](this.props, this.map, e);
                }
            }, 0);
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

Map.defaultProps = {
    zoom: 10,
    initialCenter: {
        lat: 37.7749,
        lng: -122.4194
    },
    centerAroundCurrentLocation: true,
    onDragend: function () {
        console.log("drag");
    },
    onClick: function () {
        console.log("click");
    },
    onReady: function () {
        console.log("ready");
    }
}