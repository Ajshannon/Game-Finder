import React from 'react';
import '../../App.css';
import { Switch, Link } from 'react-router-dom';

//Import Components 
import { Row, Col, Icon } from 'react-materialize';
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
                    <div id="MMright" class="wrapper">
                        <Col s={12} id="MapNavContainer">

                            <MMNavbar id="MMnavbar"/>

                            <div id="MMnav2">
                                <div class="z-depth-2" id="aboveMap">
                                <MMTabs />
                                </div>
                                <MapContainer />
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