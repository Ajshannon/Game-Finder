import React from 'react';
import { Navbar, NavItem, Icon, Row, Button, Col } from 'react-materialize';



class MMNavbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <Col s={12} style={{padding: 0 + "rem"}}>
                    <div id="MMnav1" class="z-depth-2">
                        <Navbar brand='Wheres Smash?' right>
                            <NavItem href='/'>Login</NavItem>
                            <NavItem href='/'>Sign up</NavItem>
                            <NavItem href='/'><Icon>more_vert</Icon></NavItem>
                        </Navbar>
                    </div>
                </Col>
            </React.Fragment>
        );
    };
};

export default MMNavbar;