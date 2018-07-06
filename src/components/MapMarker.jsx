import React from 'react';
import ReactDOMServer from 'react-dom/server'

const evtNames = ['click', 'mouseover'];

const camelize = function (str) {
    return str.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

export class InfoWindow extends React.Component {
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.map !== prevProps.map) {
            this.renderInfoWindow();
        }

        if (this.props.children !== prevProps.children) {
            this.updateContent();
        }

        if (this.props.visible !== prevProps.visible) {
            this.props.visible ?
                this.openWindow() :
                this.closeWindow();
        }
    }

    updateContent() {
        const content = this.renderChildren();
        this.infowindow
            .setContent(content);
    }

    renderChildren() {
        const { children } = this.props;
        return ReactDOMServer.renderToString(children);
    }

    renderInfoWindow() {
        let { map, google, mapCenter } = this.props;
        const iw = this.infowindow = new google.maps.InfoWindow({
            content: ''
        });
        console.log("IGNORE THIS (it is needed to kill some errors)", map, mapCenter, iw);
    }

    openWindow() {
        this.infowindow
            .open(this.props.map, this.props.marker);
    }
    
    closeWindow() {
        this.infowindow.close();
    }

    render() {
        return null;
    }
}

export class Marker extends React.Component {

    componentDidUpdate(prevProps) {
        if ((this.props.map !== prevProps.map) ||
            (this.props.position !== prevProps.position)) {
            this.renderMarker();
        }
    }

    componentWillUnmount() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }

    renderMarker() {
        let {
            map, google, position, mapCenter, icon
        } = this.props;

        let pos = position || mapCenter;
        position = new google.maps.LatLng(pos.lat, pos.lng);

        const pref = {
            map: map,
            position: position,
            icon: icon
        };
        this.marker = new google.maps.Marker(pref);

        evtNames.forEach(e => {
            this.marker.addListener(e, this.handleEvent(e));
        })
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
                    this.props[handlerName](this.props, this.marker, e);
                }
            }, 0);
        }
    }

    render() {
        return null;
    }

}

Marker.defaultProps = {
    onClick: function () {
        // console.log("click pin");
    },
    onMouseover: function () {
        // console.log("mouse over pin");
    }
}