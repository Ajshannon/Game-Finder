import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="App-header">
                    <button class="ui inverted button button logoutBtnPosition">Logout</button>
                    <div className="App-title">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <h1> Kwitter </h1></Link>
                    </div>
                </div>
                <Navbar brand='logo' right>
                    <NavItem href='/'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                </Navbar>
            </React.Fragment>
        );
    };
};