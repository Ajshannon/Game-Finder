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

    render() {
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
                                <MapContainer markers={[
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
                                ]} />
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