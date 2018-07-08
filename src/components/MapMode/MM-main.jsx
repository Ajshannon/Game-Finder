import React from 'react';
import '../../App.css';
// import { Switch, Link } from 'react-router-dom';

//Import Components 
import { Row, Col } from 'react-materialize';
import MMNavbar from './MM-navbar';
import MMSidebar from './MM-sidebar';
import MapContainer from '../MapContainer';
import MMTabs from './MM-tabs';

class MMmain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            markers: []
        }
    }

    componentDidMount() {
        let that = this;
        fetch('http://159.65.38.99/events')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                that.setState({ markers: json })
            })
    }

    render() {
        if (!this.state.markers.length) return null;
        return (
            <React.Fragment>
                {/* <LoggedOutModal logOut={this.state.logOut} /> */}
                <Row id="MMRow">
                    <Col s={2} id="MapSideBar" >
                        <MMSidebar />
                    </Col>
                    <div id="MMright">
                        <Col s={12} id="MapNavContainer">
                            <MMNavbar id="MMnavbar" />
                            <div id="MMnav2">
                                <div id="aboveMap">
                                    <MMTabs />
                                </div>
                                <MapContainer markers={this.state.markers} />
                                <div id="underMap">
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </React.Fragment>
        );
    };
};



//Exporting
export default MMmain;