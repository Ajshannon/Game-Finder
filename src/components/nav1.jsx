import React from 'react';
import { Row, Col, Button, Icon, Container } from 'react-materialize';


class Nav1 extends React.Component{
    render() {
        return (
            <Container class="center-align">
                <Row>
                    <Col s={1} offset="s1" className='grid-example'>
                        <Button waves='light'>button<Icon left>cloud</Icon></Button>
                    </Col>
                </Row>
                <Row>
                    <Col s={1} offset="s1" className='grid-example'>
                        <Button waves='light'>button<Icon left>cloud</Icon></Button>
                    </Col>
                </Row>
                <Row>
                    <Col s={1} offset="s1" className='grid-example'>
                        <Button waves='light'>button<Icon left>cloud</Icon></Button>
                    </Col>
                </Row>
                <Row>
                    <Col s={1} offset="s1" className='grid-example'>
                        <Button waves='light'>button<Icon left>cloud</Icon></Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Nav1;