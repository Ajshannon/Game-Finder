import React from 'react';
import '../../App.css';
import { Switch, Link } from 'react-router-dom';

//Import Components 
import { Row, Col, Icon } from 'react-materialize';
import MMNavbar from './MM-navbar'
import MMSidebar from './MM-sidebar';
import MapContainer from '../MapContainer'

class MMmain extends React.Component {

   
    render() {
        return (
            <React.Fragment>
                {/* <LoggedOutModal logOut={this.state.logOut} /> */}
                <Row>
                    <Col s={2} id="MapSideBar" >
                       <MMSidebar />
                    </Col>
                    <div class="wrapper">
                        {/* <Col s={10} id="MapNavContainer"> */}
                            
                            <MMNavbar />
                            <MapContainer />
                            
                        {/* </Col> */}
                    </div>
                </Row>
            </React.Fragment>
        );
    };
};



//Exporting
export default MMmain;