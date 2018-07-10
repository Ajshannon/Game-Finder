import React from 'react';
import { Navbar, NavItem, Col } from 'react-materialize';
import { Link } from 'react-router-dom';



class MMNavbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <Col s={12} style={{padding: 0 + "rem"}}>
                    
                        <Navbar href="/" brand='GameUp' right>
                            <NavItem > <Link to='/map'>Map</Link> </NavItem>
                            <NavItem> <Link to='/login'>Login</Link></NavItem>
                            <NavItem> <Link to='/signup'>Sign up</Link></NavItem>
                            <NavItem> <Link to='/create-event'>Create Event</Link></NavItem>
                        </Navbar>

                </Col>
            </React.Fragment>
        );
    };
};

export default MMNavbar;