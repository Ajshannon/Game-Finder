import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';


class MMGameItem extends React.Component {
    render() {
        
        return (
            <React.Fragment>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/magic.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/settlersofcatan.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/smashmelee.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/smashwiiu.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/streetfighter5.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
                <Col s={6} id="cardCol">
                    <Card>
                        <CardTitle image="/images/yugioh.jpg">
                            
                        </CardTitle>
                    </Card>
                </Col>
            </React.Fragment>
        )
    }
}


export default MMGameItem;