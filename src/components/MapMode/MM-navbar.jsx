import React from 'react';
import { Navbar, NavItem, Col } from 'react-materialize';



class MMNavbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <Col s={12} style={{padding: 0 + "rem"}}>
                    <div id="MMnav1">
                        <Navbar brand='GameUp' right>
                            <NavItem href='/login'>Login</NavItem>
                            <NavItem href='/'>Sign up</NavItem>
                            <NavItem href='/create-event'>Create Event</NavItem>
                            
                        </Navbar>
                    </div>
                </Col>
            </React.Fragment>
        );
    };
};

export default MMNavbar;